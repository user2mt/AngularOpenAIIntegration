import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { OpenaiService } from '@app/_services/openai.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
export class textResponse {
    sno: number = 1;
    text: string = '';
    response: any = '';
}

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users?: User[];
    id?: any;
    distanceDropdownItems: any[] = [];
    textList: textResponse[] = [
        {
            sno: 1,
            text: '',
            response: ''
        }
    ];
    constructor(private userService: UserService,
        private openaiService: OpenaiService,
        private clipboard: Clipboard,
        private snackBar: MatSnackBar
    ) { }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            console.log(users);
            this.loading = false;
            this.users = users;
        });
    }

    onItemSelection(id: any) {
        this.id = id;
    }

    // {"id":"cmpl-7AC57QPdxQWiiLABdaqQa9rKvihjv","object":"text_completion","created":1682664077,"model":"text-davinci-003",
    // "choices":[{"text":"\n\nChat GPT is a chatbot platform that uses GPT-3, an advanced natural language processing (NLP) engine. GPT-3 is a deep learning algorithm developed by OpenAI which is used for natural language processing tasks such as text completion, question answering, text summarization, and machine translation. With Chat GPT,","index":0,"logprobs":null,"finish_reason":"length"}],
    // "usage":{"prompt_tokens":6,"completion_tokens":70,"total_tokens":76}}

    generateText(data: textResponse) {
        this.openaiService.generateText(data.text).then((text: any) => {
            //   console.log(text);
            data.response = text;
            if (this.textList.length === data.sno) {
                //this.textList.push({ sno: 1, text: '', response: '' });
            }
        });
    }

    public copyToClipboardWithParameter(value: HTMLElement): void {
        const text: string = value.textContent || '';
        // console.log(text);
        const successful = this.clipboard.copy(text);
        this.snackBar.open('Text copied to clipboard', '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        });

    }
}