import "./App.css";
// import React from "react";
import React, { useState } from "react";
import Contactos from "./Componentes/Contactos/Contactos";
import "./App.css";

const App = () => {
  const [contactos, setContactos] = useState([
    {
      id: 1,
      ContactNumber: 1,
      Word: "Delete contact",
      Name: "Name: Steven Spilberg",
      Mobile: "Mobile phone: 11392210922",
      Email: "E-mail: s.pilberg67@hotmail.com",
      City: "City: Los Ángeles",
    },
    {
      id: 2,
      ContactNumber: 2,
      Word: "Delete contact",
      Name: "Name: Angelina Jolie",
      Mobile: "Mobile phone: 43216753133",
      Email: "E-mail: angelina90@gmail.com",
      City: "City: New York",
    },
    {
      id: 3,
      ContactNumber: 3,
      Word: "Delete contact",
      Name: "Name: Roger Federer",
      Mobile: "Mobile phone: 89541203212",
      Email: "E-mail: roggief23@hotmail.com",
      City: "City: Barcelona",
    },
    {
      id: 4,
      ContactNumber: 4,
      Word: "Delete contact",
      Name: "Name: Jennifer Lopez",
      Mobile: "Mobile phone: 112908667574",
      Email: "E-mail: jennylopez@hotmail.com",
      City: "City: Miami",
    },
    {
      id: 5,
      ContactNumber: 5,
      Word: "Delete contact",
      Name: "Name: Ed Sheeran",
      Mobile: "Mobile phone: 3434212434",
      Email: "E-mail: eddiesheeran@gmail.com",
      City: "City: Halifax",
    },
    {
      id: 6,
      ContactNumber: 6,
      Word: "Delete contact",
      Name: "Name: Cristiano Ronaldo",
      Mobile: "Mobile phone: 435252566357",
      Email: "E-mail: ronnaldito34@gmail.com",
      City: "City: Madrid",
    },
    {
      id: 7,
      ContactNumber: 7,
      Word: "Delete contact",
      Name: "Name: Steven Spilberg",
      Mobile: "Mobile phone: 11392210922",
      Email: "E-mail: s.pilberg67@hotmail.com",
      City: "City: Los Ángeles",
    },
    {
      id: 8,
      ContactNumber: 8,
      Word: "Delete contact",
      Name: "Name: Angelina Jolie",
      Mobile: "Mobile phone: 43216753133",
      Email: "E-mail: angelina90@gmail.com",
      City: "City: New York",
    },
    {
      id: 9,
      ContactNumber: 9,
      Word: "Delete contact",
      Name: "Name: Roger Federer",
      Mobile: "Mobile phone: 89541203212",
      Email: "E-mail: roggief23@hotmail.com",
      City: "City: Barcelona",
    },
    {
      id: 10,
      ContactNumber: 10,
      Word: "Delete contact",
      Name: "Name: Jennifer Lopez",
      Mobile: "Mobile phone: 112908667574",
      Email: "E-mail: jennylopez@hotmail.com",
      City: "City: Miami",
    },
    {
      id: 11,
      ContactNumber: 11,
      Word: "Delete contact",
      Name: "Name: Ed Sheeran",
      Mobile: "Mobile phone: 3434212434",
      Email: "E-mail: eddiesheeran@gmail.com",
      City: "City: Halifax",
    },
    {
      id: 12,
      ContactNumber: 12,
      Word: "Delete contact",
      Name: "Name: Cristiano Ronaldo",
      Mobile: "Mobile phone: 435252566357",
      Email: "E-mail: ronnaldito34@gmail.com",
      City: "City: Madrid",
    },
  ]);

  //Funcion para eliminar un contacto

  const eliminarContacto = (contactoId) => {
    const nuevaListaContactos = contactos.filter(
      (contacto) => contacto.id !== contactoId
    );
    setContactos(nuevaListaContactos);
  };

  return (
    <div className="contacto-card-container">
      {/* Eliminar un contacto de mi lista */}
      {contactos.map((contacto) => (
        <Contactos
          key={contacto.id}
          onDelete={() => eliminarContacto(contacto.id)}
          {...contacto}
        />
      ))}
    </div>
  );
};

export default App;
