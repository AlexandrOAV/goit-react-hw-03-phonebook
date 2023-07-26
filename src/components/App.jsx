import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList ";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

export class App extends Component {
  state = {
     contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  isCheckContact = (nameUser) => {
    const { contacts } = this.state;
    return contacts.find(contact=>contact.name.toUpperCase()===nameUser.toUpperCase())
  }


  submitForm = stateContactForm => {
    stateContactForm.id = nanoid(7);
    const { name } = stateContactForm;
    if (this.isCheckContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => (
      {
        contacts: [...prevState.contacts, stateContactForm]
      })
    )
    
  }
  
  filterForm = (event) => {
    this.setState({ filter: event.target.value })
  };

  deleteChenge = (id) => {
    this.setState(prevState=>({contacts:prevState.contacts.filter(contact=>contact.id!==id)}))
   }
  filterArray = () => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))
   }
  render() {
    const contactsFilter = this.filterArray();
    return (
    <div className={css.container}>
        <h1 className={css.title}> Phonebook</h1>
        <ContactForm submitForm={this.submitForm}/>
        <h2 className={css.title_contacts}>Contacts</h2>
        <Filter onChange={this.filterForm}  />
        <ContactList  contacts={contactsFilter} deleteChenge={this.deleteChenge} />
    </div>
  );
  }
};
