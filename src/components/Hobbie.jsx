function Hobbie({hobbie = [],havingHobbie}) {
  return (
    <ul>
    { hobbie.length > 0 ? <li className={havingHobbie ? 'seniorhobby' : 'juniorhobby'}>{hobbie.join(' . ')}</li>: null}
    </ul>
  );
}

export default Hobbie;