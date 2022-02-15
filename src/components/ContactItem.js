import Card from "./Card";

const ContactItem = ({ contact }) => {
  return (
    <Card>
      <h2>{contact.name}</h2>
      <h3>{contact.email}</h3>
      <h4>{contact.phone}</h4>
      <ul>
        <li>{contact.address.street}</li>
        <li>{contact.address.city}</li>
      </ul>
    </Card>
  );
};

export default ContactItem;
