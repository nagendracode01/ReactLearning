function Hobbie({hobbie = [],havingHobbie}) {
  return (
    <ul>
      {hobbie.length > 0 
      ? hobbie.map(h => (
        <li key={h} className={havingHobbie ? 'seniorhobby' : 'juniorhobby'}>
          {h}
        </li>
      )):null}
    </ul>
  );
}

export default Hobbie;