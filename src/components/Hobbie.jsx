function Hobbie({hobbie = []}) {
  return (
    <ul>
    { hobbie.length > 0 ? <li>{hobbie.join(' . ')}</li>: null}
    </ul>
  );
}

export default Hobbie;