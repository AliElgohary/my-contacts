import { Component } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: string = '';
  phoneNumber: string = '';
  editingContact: boolean = false;
  selectedContactId: number | null = null;
  searchTerm: string = '';
  contacts: Contact[] = [];

  addContact(): void {
    if (this.name && this.phoneNumber) {
      const newContact: Contact = {
        id: this.getNextId(),
        name: this.name,
        phone: this.phoneNumber
      };
      this.contacts.push(newContact);
      this.name = '';
      this.phoneNumber = '';
    }
  }

  deleteContact(contact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  editContact(contact: Contact): void {
    this.editingContact = true;
    this.selectedContactId = contact.id;
    this.name = contact.name;
    this.phoneNumber = contact.phone;
  }

  updateContact(): void {
    if (this.selectedContactId !== null) {
      const updatedContact: Contact = {
        id: this.selectedContactId,
        name: this.name,
        phone: this.phoneNumber
      };
      const index = this.contacts.findIndex((c) => c.id === this.selectedContactId);
      if (index !== -1) {
        this.contacts[index] = updatedContact;
        this.name = '';
        this.phoneNumber = '';
        this.editingContact = false;
        this.selectedContactId = null;
      }
    }
  }

  getNextId(): number {
    return this.contacts.length > 0 ? Math.max(...this.contacts.map((contact) => contact.id)) + 1 : 1;
  }

  get filteredContacts(): Contact[] {
    if (!this.searchTerm) {
      return this.contacts;
    }
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
