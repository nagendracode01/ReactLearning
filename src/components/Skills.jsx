function Skills({skills = []}) {
  return (
    <ul>
      <li>{skills.join(' . ')}</li>
    </ul>
  );
}

export default Skills;