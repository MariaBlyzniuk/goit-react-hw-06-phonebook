import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', ({ name, number }) => ({
    payload: {
    id: nanoid(),
    name,
    number,
    },
}));

const deleteContact = createAction('phonebook/deleteContact');

const filterChange = createAction('phonebook/filterChange');

const actions = { addContact, deleteContact, filterChange };
export default actions;