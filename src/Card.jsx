function Card({ title, children, isSenior }) {
  return (
    <div className={isSenior ? 'card senior' : 'card'}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;