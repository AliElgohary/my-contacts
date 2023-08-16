import { Component, Input } from '@angular/core';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent {
  @Input() theContacts: Contact[] = [];
  searchFor: string = '';

  editContact(contact: Contact) {
    const editedName = prompt(`Edit name for ${contact.name}:`, contact.name);
    const editedNumber = prompt(`Edit number for ${contact.name}:`, contact.phoneNumber.toString());

    if (editedName !== null && editedNumber !== null) {
      contact.name = editedName;
      contact.phoneNumber = parseInt(editedNumber);

      console.log(`Edited contact: ${contact.name}`);
    }
  }

  deleteContact(contact: Contact) {
    const confirmation = confirm(`Are you sure you want to delete ${contact.name}?`);

    if (confirmation) {
      const index = this.theContacts.indexOf(contact);
      if (index !== -1) {
        this.theContacts.splice(index, 1);
        console.log(`Deleted contact: ${contact.name}`);
      }
    }
  }
}
