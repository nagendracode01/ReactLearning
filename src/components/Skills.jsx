import Button from "../Button";
import { useState } from "react";
function Skills({skills=[]}) {
  const [isOpen, setIsOpen] = useState(false);
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
{/* <Button label="skills" onClick={OnSkills}/>  */}
<Button label={isOpen ? 'Hide Skills' : 'Show Skills'} onClick={() => setIsOpen(!isOpen)}/>

    {isOpen && (
    sorted.length > 0 ? (
        <ul>
          {sorted.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet</p>
      )
    )}
  </div>
);


}


export default Skills;

