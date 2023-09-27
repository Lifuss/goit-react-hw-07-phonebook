import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemBtn, StyledList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectItems } from 'redux/phoneBook/selectors';

import getFilteredData from 'Helpers/getFilteredData';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/phoneBook/operations';

const ContactList = () => {
  const items = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <StyledList>
      {getFilteredData(items, filter)?.map(el => (
        <StyledItem key={el.id}>
          {el.name}: {el.phone}
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
  filter: PropTypes.string,
};

export default ContactList;
