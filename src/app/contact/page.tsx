import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">
          You must be logged in to view contacts
        </h1>
        <a
          href="/login"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Go to Login
        </a>
      </div>
    );
  }

  const contacts = await getContacts(user?.id);
  console.log("Contacts:", contacts); // Debugging log
//   console.log("User ID type:", typeof user.id);
//   console.log("User ID value:", user.id);
  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center py-10">
        No contacts found.{" "}
        <a
          href="/contact/new"
          className="text-blue-600 hover:underline"
        >
          Create one
        </a>
      </div>
    );
  }

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
        <h1>Your Contacts</h1>
        <a href="/contact/new" className="text-blue-600 hover:underline">Add New Contact</a>
        
        </div>
        <ContactList contacts={contacts}/>
    </div>
  );
};

export default ContactPage;