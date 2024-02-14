import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { Form, Input, Button, Text } from './ContactForm.styled';
import { useDispatch, useSelector }	 from 'react-redux';
import { addContact } from  '../../redux/contactsSlice';
// 
import Notiflix from 'notiflix';

// export const ContactForm = ({addContact}) => {
// 	const [name, setName] = useState('');
// 	const [number, setNumber] = useState('');

// 	const handleNameChange = (event) => {
// 		setName(event.target.value);
// };

// const handleNumberChange = (event) => {
// 		setNumber(event.target.value);
// };

// const handleSubmit = (event) => {
// 	event.preventDefault();
// 	if (name.trim() === '' || number.trim() === '') {
// 		return;
// } 

// const newContact = {
// 	id: nanoid(),
// 	name: name.trim(),
// 	number: number.trim(),
// };
// 		addContact(newContact);
// 		setName('');
// 		setNumber('');
// };



// export const ContactForm = () => {
// 	const dispatch = useDispatch ();
// 	const namesContacts = useSelector(getContacts).map(contact => contact.name);

// 	const updateStateForAdd = (evt) => {
// 		evt.preventDefault();
// 		const newName = evt.currentTarget.elements.name.value;
// 		const newNumber = evt.currentTarget.elements.number.value;

// 		if (!namesContacts.some (name => name.toLowerCase()=== newName.toLowerCase())){
// 			dispatch(addContact(newName, newNumber));
// 			evt.currentTarget.reset();
// 		}
// 		else {
// 			alert(`${newName} is already in the contact list`)
// 		}
// 	};
export const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts);

	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
};

	const handleNumberChange = (event) => {
		setNumber(event.target.value);
};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (name.trim() === '' || number.trim() === '') {
return;
}

	const isContactExist = contacts.find(
		contact => contact.name.toLowerCase() === name.toLowerCase()
);

		if (isContactExist) {
			Notiflix.Report.warning(
				'Alert',
				`Contact with name ${name} already exists!`,
				'Ok'
);
return;
}

	const isNumberExist = contacts.find(
		contact => contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
);

		if (isNumberExist) {
			Notiflix.Report.warning(
				'Alert',
				`Number ${number} is already in contacts list!`,
				'Ok'
);
return;
}

	dispatch(addContact(name, number));
	setName('');
	setNumber('');
};

	return (
			<Form onSubmit={handleSubmit}>
				<Text>Name</Text>
					<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={handleNameChange}
					/>
				<Text>Number</Text>
					<Input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={handleNumberChange}
					/>
						<Button type="submit">Add Contact</Button>
				</Form>
);
}