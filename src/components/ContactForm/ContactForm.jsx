import { Component } from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
     handleContact=({target:{name, value}})=> {
    this.setState({
      [name]: value,
    })
    }
     heandleSubmit = (e) => {
    e.preventDefault();
         this.props.submitForm(this.state);
         this.setState({ name: '', number: '' });
  }
    render() {
        const {name, number}=this.state
        return (     
             <form className={css.contact_form} onSubmit={this.heandleSubmit}>
                <label className={css.contact_label}>Name:
                    <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleContact}
            placeholder="Enter contact"
            pattern="[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" 
                required
                className={css.contact_input}
                />
                </label>
             
                <label className={css.contact_label}>
                       Number phone:
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleContact}
  placeholder="Enter number phone"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                 className={css.contact_input}
/></label>
      <button type="submit">Add contact</button>
        </form>
        )
    }
}
ContactForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default ContactForm;