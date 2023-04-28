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
            text: 'tel me about Chat GPT',
            response: 'Chat GPT (Generative Pre-Training) is an unsupervised language model developed by Microsoft for conversational AI agents. The model is trained on large amounts of conversational data and can be used to generate natural language answers to users’ questions. Chat GPT is based on transformer models and is pre-trained on numerous publicly available conversational and non-conversational datasets. In addition, it is trained on internal proprietary data to improve its accuracy.'
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

    generateText(data: textResponse) {
        this.openaiService.generateText(data.text).then(text => {
            // data.response = this.textList[0].response;
            if (this.textList.length === data.sno) {
                // this.textList.push({ sno: 1, text: '', response: '' });
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