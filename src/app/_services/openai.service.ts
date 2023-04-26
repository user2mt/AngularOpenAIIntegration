import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
    providedIn: 'root'
})
export class OpenaiService {
    private openai: OpenAIApi;
    configuration = new Configuration({
        apiKey: environment.OPENAI_API_KEY,
    });

    constructor() {
        this.openai = new OpenAIApi(this.configuration);
    }

    generateText(prompt: string): Promise<string | undefined> {
        return this.openai.createCompletion({
            //model: "text-davinci-002",
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 70
        }).then(response => {
            return response.data.choices[0].text;
        }).catch(error => {
            return '';
        });
    }
}