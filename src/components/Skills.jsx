function Skills({skills=[]}) {
  if(skills.length === 0) {
    return "No skills added yet";
  }else{
    const sorted = [...skills].sort();

  return (
    <ul>
      {
      sorted.map(skill => (
         <li key={skill}>{skill}</li>
        ))
      }
    </ul>
  );
}
}

export default Skills;