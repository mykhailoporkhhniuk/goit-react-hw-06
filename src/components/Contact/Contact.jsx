import css from './Contact.module.css'

import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const onDeleteContact = (contactId) => {
        const action = deleteContact(contactId);
        dispatch(action);
    }

    return (
        <div className={css.contactWrapper}>
            <div className={css.infoWrapper}>
                <p>👤 {name}</p>
                <p>📞 {number}</p>
            </div>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
}

export default Contact