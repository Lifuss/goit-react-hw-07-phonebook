import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemBtn, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/phoneBook/selectors';
import { deleteContacts } from 'redux/phoneBook/slice';
import getFilteredData from 'Helpers/getFilteredData';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <StyledList>
      {getFilteredData(contacts, filter).map(el => (
        <StyledItem key={el.id}>
          {el.name}: {el.number}
          <StyledItemBtn onClick={() => handleDelete(el.id)}>
            Delete
          </StyledItemBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string
};

export default ContactList;
