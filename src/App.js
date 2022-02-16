import "./App.css";
import React from "react";
import users from "./data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [usersData, setUsersData] = useState(users);
  return (
    <div className="App">
      <Header />

      <Form setUsersData={setUsersData} />

      <ContactList users={usersData} />
      <Footer />
    </div>
  );
}

export default App;
