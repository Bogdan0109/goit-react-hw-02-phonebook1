export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className="TodoList__text">{name}</p>
          <span>{number}</span>
        </li>
      ))}
    </ul>
  );
};
