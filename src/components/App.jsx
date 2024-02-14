import { ContactForm } from "./ContactForm/ContactForm";
import {ContactList} from "./ContactList/ContactList"
import {Filter} from "./Filter/Filter"
import { Container, Title } from './App.styled'
import { GlobalStyle } from "GlobalStyle";

export const App = () => {
	return (
		<Container>
			<Title>Phonebook</Title>
				<ContactForm />
					<Title>Contacts</Title>
						<Filter/>
							<ContactList/>
								<GlobalStyle />
		</Container>
);
}

