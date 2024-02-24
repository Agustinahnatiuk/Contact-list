// import React from "react";
import PropTypes from "prop-types";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  return (
    <div className="contacto-card">
      <div className="contacto-card-text">
        <p className="contacto-card-text-name">{contact.name}</p>
        <p className="contacto-card-text-mobile">{contact.phone}</p>
        <p className="contacto-card-text-email">{contact.email}</p>
        <p className="contacto-card-text-city">{contact.city}</p>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;
