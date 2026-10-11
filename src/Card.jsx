function Card({ title, children, isSenior, onClick, onMouseEnter }) {
  return (
    <div
      className={isSenior ? 'card senior' : 'card'}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;