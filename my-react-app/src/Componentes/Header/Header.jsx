import React, { useState, useEffect } from "react";
import "./Header.css";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [showAddContactPopup, setShowAddContactPopup] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  //Filtrar contactos

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) => {
      const searchString = searchTerm.toLowerCase();
      return (
        contact.name.toLowerCase().includes(searchString) ||
        contact.phone.includes(searchString) ||
        contact.email.toLowerCase().includes(searchString) ||
        contact.city.toLowerCase().includes(searchString)
      );
    });

    const contactsContainer = document.getElementById("contacts-container");
    contactsContainer.innerHTML = filteredContacts.map((contact) => (
      <div key={contact.id}>
        {`${contact.name} - ${contact.phone} - ${contact.email} - ${contact.city}`}
      </div>
    ));

    filteredContacts.forEach((contact) => {
      const contactDiv = document.createElement("div");
      contactDiv.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email} - ${contact.city}`;
      contactsContainer.appendChild(contactDiv);
    });
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
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      city: newContact.city,
    };

    setContacts((prevContacts) => [...prevContacts, newContactObject]);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      city: "",
    });
    setShowAddContactPopup(false);
  };

  useEffect(() => {
    // Cuando se actualiza la lista de contactos, actualiza el DOM
    const contactsContainer = document.getElementById("contacts-container");
    contactsContainer.innerHTML = ""; // Limpia el contenido existente

    contacts.forEach((contact) => {
      const contactDiv = document.createElement("div");
      contactDiv.innerHTML = `${contact.name} - ${contact.phone} - ${contact.email} - ${contact.city}`;
      contactsContainer.appendChild(contactDiv);
    });
  }, [contacts]);

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
            {/* Contenido del pop-up para agregar contacto */}
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
      {/* Contenedor para mostrar los contactos en el body */}
      <div id="contacts-container"></div>
    </header>
  );
};

export default Header;
