// ContactList will render multiple ContactItem components
import ContactItem from "./ContactItem";

const ContactList = ({ users }) => {
  return (
    <div>
      {users.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
