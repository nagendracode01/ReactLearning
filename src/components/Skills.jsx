function Skills({skills=[]}) {
  if(skills.length === 0) {
    return "No skills added yet";
  }else{
  return (
    <ul>
      {
      skills.map(skill => (
         <li key={skill}>{skill}</li>
        ))
      }
    </ul>
  );
}
}

export default Skills;