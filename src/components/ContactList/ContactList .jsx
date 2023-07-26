import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteChenge }) => {
 
  return (contacts.length>0&&
         <ul className={css.list}>
                {contacts.map(contact => {
                  const tel=`tel:${contact.number}`
            return (
                <li className={css.item} key={contact.id}>
                 <span className={css.name}>{contact.name}:</span> 
                  <a href={tel} className={css.number}>{contact.number}</a> 
                    <button type="button" onClick={()=>deleteChenge(contact.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterValue: PropTypes.string,
  deleteChenge: PropTypes.func.isRequired,
};
export default ContactList; 