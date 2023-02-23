import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Input,
  FormStyled,
  Label,
  ErrorMessageStyled,
  FormBtn,
} from 'components/Contacts/';
// import css from './Contacts.module.css';

export const ContactForm = ({ onSubmit, onCheck }) => {
  const initialValues = { name: '', number: '' };
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('It is required'),
    number: yup
      .number()
      .required('It is required')
      .positive()
      .integer()
      .typeError(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  const handleSubmit = (values, { resetForm }) => {
    const isContactsInclude = onCheck(values.name);

    if (isContactsInclude) {
      alert(`${values.name} is alredy in contacts.`);
      return;
    }

    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name" component={ErrorMessageStyled} />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorMessageStyled} />
        </Label>

        <FormBtn type="submit">Add contact</FormBtn>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
