import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    value = 0;

    onIncrementClick() {
        this.value = Math.min(100, ++this.value);
    }

    onDecrementClick() {
        this.value = Math.max(-100, --this.value);
    }
}