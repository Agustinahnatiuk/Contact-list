import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faAddressBook,
  faPhone,
  faEnvelope,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import "./Contactos.css";

const Contactos = ({ ContactNumber, Name, Mobile, Email, City, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(ContactNumber);
  };

  return (
    <div className="contacto-card">
      <div className="contacto-card-text">
        <div className="contact-number">
          <div>{ContactNumber}</div>
          <p className="contacto-card-word">
            <FontAwesomeIcon icon={faUserMinus} onClick={handleDeleteClick} />
          </p>
        </div>
        <p className="contacto-card-text-name">
          <FontAwesomeIcon className="icon-contact-card" icon={faAddressBook} />
          {Name}
        </p>
        <p className="contacto-card-text-mobile">
          <FontAwesomeIcon className="icon-contact-card" icon={faPhone} />
          {Mobile}
        </p>
        <p className="contacto-card-text-email">
          <FontAwesomeIcon className="icon-contact-card" icon={faEnvelope} />
          {Email}
        </p>
        <p className="contacto-card-text-city">
          <FontAwesomeIcon className="icon-contact-card" icon={faCity} />
          {City}
        </p>
      </div>
    </div>
  );
};

Contactos.propTypes = {
  ContactNumber: PropTypes.number.isRequired,
  Name: PropTypes.string.isRequired,
  Mobile: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  City: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contactos;
