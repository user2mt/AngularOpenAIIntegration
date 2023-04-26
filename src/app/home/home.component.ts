import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { OpenaiService } from '@app/_services/openai.service';

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

    textList: textResponse[] = [{ sno: 1, text: '', response: '' }];

    constructor(private userService: UserService, private openaiService: OpenaiService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            console.log(users);
            this.loading = false;
            this.users = users;
        });

        this.distanceDropdownItems = ['hello', 'you', 'there'];
        console.log('FORMS dropdown items = ', this.distanceDropdownItems);
    }

    onItemSelection(id: any) {
        this.id = id;
    }

    generateText(data: textResponse) {
        this.openaiService.generateText(data.text).then(text => {
            data.response = text;
            if (this.textList.length === data.sno) {
                this.textList.push({ sno: 1, text: '', response: '' });
            }
        });
    }

}