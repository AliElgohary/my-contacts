import { Component } from '@angular/core';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Contacts';
  name: string = '';
  phoneNumber?: number;
  searchFor: string = '';
  contacts: Contact[] = [];

  addContact() {
    if (
      this.name &&
      this.phoneNumber &&
      /^\d+$/.test(this.phoneNumber.toString()) &&
      this.phoneNumber.toString().length > 10
    ) {
      const newContact: Contact = {
        id: this.getId(),
        name: this.name.toLocaleLowerCase(),
        phoneNumber: this.phoneNumber,
      };
      this.contacts.push(newContact);
      this.name = '';
      this.phoneNumber = 0;
    }
  }

  getId(): number {
    const id = this.contacts.length + 1;
    return id;
  }

  sendData(event: Contact[]) {
    this.contacts = event;
  }
}
