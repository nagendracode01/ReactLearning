function Skills({skills=[]}) {
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
  return sorted.length > 0 ? (
         <ul>
      {
      sorted.map(skill => (
         <li key={skill}>{skill}</li>
        ))
      }
    </ul>
  ) : "No skills added yet" 

}


export default Skills;

