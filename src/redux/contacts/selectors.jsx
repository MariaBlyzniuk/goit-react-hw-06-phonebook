export const getVisibleContacts = (contacts, filter) => {
    const filtered = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filtered)
    );
};