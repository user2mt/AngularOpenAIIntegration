import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
    providedIn: 'root'
})
export class OpenaiService {

    // {"id":"cmpl-7AC57QPdxQWiiLABdaqQa9rKvihjv","object":"text_completion","created":1682664077,"model":"text-davinci-003",
    // "choices":[{"text":"\n\nChat GPT is a chatbot platform that uses GPT-3, an advanced natural language processing (NLP) engine. GPT-3 is a deep learning algorithm developed by OpenAI which is used for natural language processing tasks such as text completion, question answering, text summarization, and machine translation. With Chat GPT,","index":0,"logprobs":null,"finish_reason":"length"}],
    // "usage":{"prompt_tokens":6,"completion_tokens":70,"total_tokens":76}}

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