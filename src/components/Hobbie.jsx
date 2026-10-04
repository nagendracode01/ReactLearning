function Hobbie({hobbie = []}) {
  return (
    <ul>
      <li>{hobbie.join(' . ')}</li>
    </ul>
  );
}

export default Hobbie;