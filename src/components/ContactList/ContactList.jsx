import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.filters.name);

      const filteredProfiles = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));

    return (
        <ul className={css.contactList}>
            {filteredProfiles.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <Contact
                            name={name}
                            number={number}
                            id={id}
                        />
                    </li>
                )
            })}
        </ul>
    );
}

export default ContactList