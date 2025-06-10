const contacts = [
  {
    id: 1,
    first: 'John',
    last: 'Doe',
    phone: '555-555-5555',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    first: 'Jane',
    last: 'Doe',
    phone: '555-555-1234',
    email: 'jane.doe@example.com',
  },
  {
    id: 3,
    first: 'Bob',
    last: 'Smith',
    phone: '555-555-5678',
    email: 'bob.smith@example.com',
  },
];
export interface Contact {
  id?: number;
  first: string;
  last: string;
  phone: string;
  email: string;
}

class Contacts {
  private contacts: typeof contacts;

  constructor() {
    this.contacts = contacts;
  }

  getAll(): typeof contacts {
    return this.contacts;
  }

  get(id: number): (typeof contacts)[number] | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  create(contact: Contact): void {
    const newContact = { id: this.contacts.length + 1, ...contact };
    this.contacts.push(newContact);
  }

  update(id: number, contact: Partial<(typeof contacts)[number]>): void {
    const index = this.contacts.findIndex((c) => c.id === id);
    if (index === -1) return;
    this.contacts[index] = { ...this.contacts[index], ...contact };
  }

  delete(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}

export default new Contacts();
