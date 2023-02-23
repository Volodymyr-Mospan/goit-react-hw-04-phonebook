import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';

// import css from './Contacts.module.css';

export const Contact = ({ contact, onClick }) => {
  return (
    <>
      {`${contact.name}: ${contact.number}`}
      <ContactBtn type="button" onClick={() => onClick(contact.id)}>
        Delete
      </ContactBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
