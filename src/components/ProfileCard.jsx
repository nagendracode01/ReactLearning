import { Badge } from './Badge';
import Button from '../Button';


export function ProfileCard({ name, role, city, yearsOfExp, photo,certifications, OnContact }) {
  return (
    <>
      {photo ? (
        <img src={photo} alt={`Profile of ${name}`} width="200" />
      ):(
         <div className="avatar-circle">{name[0]}</div>
      )}
      <h2>{name}</h2>
      <Button label="Contact" onClick={OnContact}/> 
      <p>{role}</p>
      <p>{city}</p>
     <p>{yearsOfExp} years · {yearsOfExp >= 8 ? 'Senior' : 'Junior'}</p>
     {certifications > 0 && (
      <p>{certifications} certifications</p>
     )}
      <Badge label={role} color={yearsOfExp >= 8 ? 'darkgreen' : 'orange'}/>  
    </>
  );
}