import { useState, useEffect } from 'react';

import "./styles.css"

import List from "./List";
import Form from "./Form";

function Contacts () {

  const [contacts, setContacts] = useState([
      {
        fullname: "Faruk",
        phone_number: "0532 304 18 57"
      }, 
      {
        fullname: "Tayfun",
        phone_number: "0541 739 52 93"
      },
      {
        fullname: "Ahmet",
        phone_number: "0532 160 79 38"
      }
    ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);


  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;