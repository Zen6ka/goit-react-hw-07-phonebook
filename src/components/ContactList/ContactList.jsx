import { ContactItems, Contact, Button } from './ContactList.styled'
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

// export function ContactList({ contacts, deleteContact }) {
// 	return (
// 		<ul>
// 			{contacts.map((contact) => (
// 				<ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
// ))}
// 		</ul>
// );
// }

// function ContactItem({ contact, deleteContact }) {
// 	const handleDelete = () => {
// 	deleteContact(contact.id);
// };


const getFilteredContacts = (contacts, filter) => {
	const normalizedFilter = filter.toLowerCase();
		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

export function ContactList() {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const filteredContacts = getFilteredContacts(contacts, filter);
		return (
			<ul>
				{filteredContacts.map(({ id, name, number }) => (
				<ContactItem key={id} contact={{ id, name, number }}/>
))}
			</ul>
);
}

function ContactItem({ contact }) {
	const dispatch = useDispatch();

const handleDelete = () => {
	dispatch(deleteContact(contact.id));
};

	return (
		<ContactItems>
			<Contact>{contact.name}</Contact>
			<Contact>{contact.number}</Contact>
			<Button onClick={handleDelete}>Delete</Button>
		</ContactItems>
);
}