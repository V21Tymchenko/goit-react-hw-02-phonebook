import React, { Component } from 'react';
import { LabelForm, InputForm, FormButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  onSubmitAdd = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitAdd}>
        <LabelForm htmlFor="name">
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </LabelForm>
        <LabelForm htmlFor="number">
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </LabelForm>
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
