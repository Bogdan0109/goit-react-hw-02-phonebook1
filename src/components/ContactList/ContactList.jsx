import './ContactList.scss';

export const ContactList = ({ contacts, onContactsDelete }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
          <p className="ContactList__text">{name}:</p>
          <span className="ContactList__span">{number}</span>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => onContactsDelete(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
