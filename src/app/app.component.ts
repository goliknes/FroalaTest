import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';

    getDate(): Date {
        return new Date();
    }

    validate(): boolean {
        console.log('validation!');
        return true;
    }
}
