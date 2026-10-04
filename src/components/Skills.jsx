function Skills({skills}) {
  if(skills.length === 0) {
    return "No skills added yet";
  }else{
  return (
    <ul>
      <li>{skills.join(' . ')}</li>
    </ul>
  );
}
}

export default Skills;