import React from 'react';
import { StyledText } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/phoneBook/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <StyledText>Find contacts by name or number</StyledText>
      <input onChange={handleInput} type="text" />
    </>
  );
};

export default Filter;
