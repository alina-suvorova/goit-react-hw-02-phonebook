import style from './Contacts.module.css'
import PropTypes from 'prop-types';

const ContactsListItem = ({filter, contacts, onDeleteContact}) => {
    return (
    contacts.map(({name, number, id}) => {
        if (name.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase())) {
           return <li className={style.formListItem} key={id}>
                    <p className={style.text}>{name}: {number}</p>
                    <button className={style.btn} type="button" onClick={onDeleteContact} id={id}>Delete</button>
                  </li> 
        }
    }));
}

export default ContactsListItem;

ContactsListItem.propType = {
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}