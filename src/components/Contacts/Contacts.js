import ContactsListItem from "./ContactsListItem";
import style from './Contacts.module.css'
import PropTypes from 'prop-types'

const Contacts = ({filter, contacts, onDeleteContact}) => {
    
    return (
        <><ul className={style.contactsList}>
            <ContactsListItem 
                contacts={contacts}
                filter={filter}
                onDeleteContact={onDeleteContact}
            />
          </ul></>
    );
}

export default Contacts;

Contacts.propType = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
  }
