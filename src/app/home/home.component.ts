import { Component } from '@angular/core';

import { AccountService } from '../_services';

@Component({ templateUrl: 'home.component.html', standalone: false })
export class HomeComponent {
    constructor(private accountService: AccountService) { }

    get account() {
        return this.accountService.accountValue;
    }
}