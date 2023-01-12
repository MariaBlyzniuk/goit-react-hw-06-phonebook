import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteContact} from 'redux/contacts/contactsSlice';
import { getVisibleContacts } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import { ContactListStyle, ContactText, ContactButton, ContactItem } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(state => state.contact.contacts);
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();

    const onDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ContactListStyle>
    {getVisibleContacts(contacts, filter).map(({ id, name, number }) => (
        <ContactItem key={id}>
        <ContactText >
            {name}: {number}
        </ContactText>
        <ContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
        >Delete</ContactButton>
        </ContactItem>
    ))}
    </ContactListStyle>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
    ),
};