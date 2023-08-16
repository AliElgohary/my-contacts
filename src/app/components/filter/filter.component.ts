import { Component, Input } from '@angular/core';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterBy: string = '';
  @Input() allContacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  
  ngOnChanges() {
    this.filterContacts();
  }
  
  filterContacts() {
    this.filteredContacts = this.allContacts.filter((contact: Contact) => {
      return contact.name == this.filterBy;
    });
  }
}
