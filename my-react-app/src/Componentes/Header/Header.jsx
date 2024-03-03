import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";
import {
  faSearch,
  faUserMinus,
  faXmark,
  faAddressBook,
  faPhone,
  faEnvelope,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [showAddContactPopup, setShowAddContactPopup] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Cargar contactos desde localStorage al inicio
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  // Actualizar localStorage cada vez que cambian los contactos
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        contact.phone.includes(lowerCaseSearchTerm) ||
        contact.email.toLowerCase().includes(lowerCaseSearchTerm) ||
        contact.city.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    setFilteredContacts(filteredContacts);
  }, [contacts, searchTerm]);

  const handleAddContactClick = () => {
    setShowAddContactPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleAddContact = () => {
    const newContactObject = {
      id: uuidv4(),
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      city: newContact.city,
    };

    setContacts((prevContacts) => [...prevContacts, newContactObject]);
    setNewContact({
      id: uuidv4(),
      name: "",
      phone: "",
      email: "",
      city: "",
    });
    setShowAddContactPopup(false);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const Contactos = ({ contact }) => {
    return (
      <div className="contacto-card-new" key={contact.id}>
        <div className="contacto-card-text-new">
          <div className="contact-number">
            <p className="contacto-card-word">
              <FontAwesomeIcon
                icon={faUserMinus}
                onClick={() => handleDeleteContact(contact.id)}
              />
            </p>
          </div>
          <p className="contacto-card-text-name-new">
            <FontAwesomeIcon
              className="icon-contact-card"
              icon={faAddressBook}
            />
            {contact.name}
          </p>
          <p className="contacto-card-text-mobile-new">
            <FontAwesomeIcon className="icon-contact-card" icon={faPhone} />
            {contact.phone}
          </p>
          <p className="contacto-card-text-email-new">
            <FontAwesomeIcon className="icon-contact-card" icon={faEnvelope} />
            {contact.email}
          </p>
          <p className="contacto-card-text-city-new">
            <FontAwesomeIcon className="icon-contact-card" icon={faCity} />
            {contact.city}
          </p>
        </div>
      </div>
    );
  };

  return (
    <header>
      <nav className="header-container">
        <h1>My Contact List</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="input-text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <button className="button-add" onClick={handleAddContactClick}>
            Add contact
          </button>
        </div>

        {showAddContactPopup && (
          <div className="add-contact-popup">
            <div className="title-add-contact">
              <button
                className="button-close-add-contact-popup"
                onClick={() => setShowAddContactPopup(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <h3 style={{ color: "#00736c", marginBottom: "10px" }}>
                Add a new contact
              </h3>
            </div>
            <div>
              <input
                className="input-add-contact"
                type="text"
                placeholder="Name"
                name="name"
                value={newContact.name}
                onChange={handleInputChange}
              />
              <input
                className="input-add-contact"
                type="text"
                placeholder="Mobile phone"
                name="phone"
                value={newContact.phone}
                onChange={handleInputChange}
              />
              <input
                className="input-add-contact"
                type="email"
                placeholder="E-mail"
                name="email"
                value={newContact.email}
                onChange={handleInputChange}
              />
              <input
                className="input-add-contact"
                type="text"
                placeholder="City"
                name="city"
                value={newContact.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-close-add-contact">
              <button onClick={handleAddContact}>Add contact</button>
            </div>
          </div>
        )}
      </nav>
      <div id="contacts-container">
        {filteredContacts.map((contact) => (
          <Contactos key={contact.id} contact={contact} />
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  showAddContactPopup: PropTypes.bool,
  contacts: PropTypes.array,
  newContact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
  }),
  searchTerm: PropTypes.string,
  filteredContacts: PropTypes.array,
  handleAddContactClick: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleAddContact: PropTypes.func,
};

export default Header;
