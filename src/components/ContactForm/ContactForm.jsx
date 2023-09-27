import React from 'react';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/phoneBook/selectors';
import { addContactThunk } from 'redux/phoneBook/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;
    if (contacts.find(user => user.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    const contact = {
      name: name.value,
      phone: phone.value,
      id: crypto.randomUUID(),
    };

    dispatch(addContactThunk(contact));
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
          name="phone"
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
