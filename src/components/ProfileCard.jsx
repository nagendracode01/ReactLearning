import { Badge } from './Badge';

const data = {
  name: 'Nagendra',
  role: 'Developer',
  city: 'Hyderabad',
  yearsOfExp: 10,
  image: 'https://img.magnific.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg',
};

export function ProfileCard({ name, role, city, yearsOfExp, photo = 'https://picsum.photos/150' }) {
  return (
    <>
      <img src={photo} alt={`Profile of ${name}`} width="200" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{city}</p>
     <p>{yearsOfExp} years · {yearsOfExp >= 8 ? 'Senior' : 'Junior'}</p>
      <Badge label={role} color="steelblue"/>
    </>
  );
}