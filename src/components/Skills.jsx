import Button from "../Button";
function Skills({skills=[],OnSkills}) {
//   if(skills.length === 0) {
//     return "No skills added yet";
//   }else{
//     const sorted = [...skills].sort();

//   return (
//     <ul>
//       {
//       sorted.map(skill => (
//          <li key={skill}>{skill}</li>
//         ))
//       }
//     </ul>
//   );
// }
// }
 const sorted = [...skills].sort();
return(
  <div>
    <br/>
<Button label="skills" onClick={OnSkills}/> 

    {sorted.length > 0 ? (
        <ul>
          {sorted.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet</p>
      )}
  </div>
);


}


export default Skills;

