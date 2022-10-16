import './Section.scss';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className="Title">{title}</h2>
      {children}
    </>
  );
};
