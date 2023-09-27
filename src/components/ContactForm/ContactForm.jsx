import React from 'react';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/phoneBook/slice';
import { selectContacts } from 'redux/phoneBook/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (contacts.find(user => user.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    dispatch(
      setContacts({
        name: name.value,
        number: number.value,
        id: crypto.randomUUID(),
      })
    );
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="[A-z]{2,9} [A-z]{2,9}"
          title="latin chars, 
          format:Name Surname"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="123-45-67"
          required
        />
      </StyledLabel>

      <StyledBtn>Add contacts</StyledBtn>
    </StyledForm>
  );
};

export default ContactForm;
