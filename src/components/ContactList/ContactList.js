import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactListUl,
  ContactItem,
  ContactName,
  ContactNumer,
  FindContactButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactName>{name}:</ContactName>
            <ContactNumer>{number}</ContactNumer>
            <FindContactButton onClick={() => onDeleteContact(id)}>
              Delete
            </FindContactButton>
          </ContactItem>
        );
      })}
    </ContactListUl>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
