import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { StyledDiv } from './App.styled';

export const App = () => {
  return (
    <StyledDiv>
      <h1>Phone book</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledDiv>
  );
};
