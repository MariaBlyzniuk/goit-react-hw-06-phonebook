import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/contacts/actions';
import { getVisibleContacts } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import { ContactListStyle, ContactText, ContactButton, ContactItem } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = id => {
    dispatch(actions.deleteContact(id));
    };
    return (
        <ContactListStyle>
    {contacts.map(({ id, name, number }) => (
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