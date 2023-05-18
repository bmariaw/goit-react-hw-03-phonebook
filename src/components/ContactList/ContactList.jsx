import React from 'react';
import PropTypes from 'prop-types';
import { Ul, Li, Span, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          <Span>{name}: </Span>
          <Span>{number}</Span>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
