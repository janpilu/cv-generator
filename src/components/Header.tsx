interface HeaderProps {
  name: string;
  title?: string;
  contact: {
    email: string;
    phone: string;
    location?: string;
  };
}

export const Header = ({ name, title, contact }: HeaderProps) => (
  <header className="cv-header">
    <h1>{name}</h1>
    <p className="title">{title}</p>
    <div className="contact-info">
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      {contact.location && <p>{contact.location}</p>}
    </div>
  </header>
);
