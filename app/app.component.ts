import { Component } from '@angular/core';

const messages = [
  {
    sender: 'Robert Lutes',
    time: '(2016-11-23 21:13:45)',
    text: 'Hi, Piter',
    owned: false,
  },
  {
    sender: 'My',
    time: '(2016-11-23 21:13:49)',
    text: 'Hi, Robert',
    owned: true,
  },

];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
  messages = messages;

  delete(message: any) {
    let index = this.messages.indexOf(message);

    if ( index > -1 ) {
      this.messages.splice(index, 1);
    }
  }
}