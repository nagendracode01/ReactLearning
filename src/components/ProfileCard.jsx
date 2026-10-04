import { Badge } from './Badge';


export function ProfileCard({ name, role, city, yearsOfExp, photo = 'https://picsum.photos/150',certifications }) {
  return (
    <>
      <img src={photo} alt={`Profile of ${name}`} width="200" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{city}</p>
     <p>{yearsOfExp} years · {yearsOfExp >= 8 ? 'Senior' : 'Junior'}</p>
     <span>{certifications > 0 && (
      <p>{certifications} certifications</p>
     )}</span>
      <Badge label={role} color={yearsOfExp >= 8 ? 'darkgreen' : 'orange'}/>  
    </>
  );
}