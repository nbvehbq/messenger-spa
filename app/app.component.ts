import { Component } from '@angular/core';

class Message {
  sender: string;
  time: string;
  text: string;
  owned: boolean;

  constructor(text: string, sender: text = '') {
    const now = new Date();
    const options = {
      year: 'numeric',
      hour12: false,
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    if (sender === '') {
      this.owned = true;
    }
    this.text = text;
    this.sender = sender;
    this.time = `(${now.toLocaleString("en-US", options)})`;
  }
}

const messages: Message[] = [
  {
    sender: 'Robert Lutes',
    time: '(2016-11-23 21:13:45)',
    text: 'Hi, Piter',
    owned: false,
  },
  {
    sender: '',
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
  messages: Message[] = messages;
  newMessage: string = '';

  delete(message: Message) {
    let index = this.messages.indexOf(message);

    if ( index > -1 ) {
      this.messages.splice(index, 1);
    }
  }

  send() {
    let message: Message = new Message(this.newMessage);

    this.messages.push(message);
    this.newMessage = '';
  }
}