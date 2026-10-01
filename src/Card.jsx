function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid black', padding: 20, margin: 10, borderRadius: 10 }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;