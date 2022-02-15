import "./App.css";
import React from "react";
import users from "./data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <Header />

      <ContactList users={users} />
      <Footer />
    </div>
  );
}

export default App;
