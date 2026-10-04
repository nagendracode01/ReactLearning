import Header from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import Skills from './components/Skills';
// import Footer from './components/Footer';
import './App.css';
import Card from './Card';
import Footer from './components/Footer';
import Hobbie from './components/Hobbie';
import OpentoWork from './OpentoWork';

const cardTheme = {
  border: '3px solid steelblue',
};

const person1 = {
  name: 'Nagendra Babu',
  role: 'Associate Manager',
  city: 'Hyderabad',
  yearsOfExp: 11,
  photo: 'https://picsum.photos/id/1005/150',
  skills: ['Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
  isAvailable: true,
  certifications: 3,
};

const person2 = {
  name: 'Priya Sharma',
  role: 'Frontend Developer',
  city: 'Pune',
  yearsOfExp: 3,
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  isAvailable: false,
  certifications: 0,
};

const person3 = {
  name: 'Arjun Rao',
  role: 'Intern',
  city: 'Chennai',
  yearsOfExp: 0,
  skills: [],
  isAvailable: true,
  certifications: 1,
};



function App() {
  return (
    <div className="profile-card" style={cardTheme}>
      {/* Main profile sections */}
      <Header />
      <div style={{ display: 'flex', gap: 16 }}>
     <Card title="Profile 1"  isSenior={person1.yearsOfExp >= 8}>
  <ProfileCard {...person1} />
  <Skills skills={person1.skills} />
  <Hobbie hobbie={person1.Hobbies}/>
  <OpentoWork work = {person1.isAvailable}/>
</Card>

<Card title="Profile 2"  isSenior={person2.yearsOfExp >= 8}>
  <ProfileCard {...person2} />
  <Skills skills={person2.skills} />
  <Hobbie hobbie={person2.Hobbies}/>
  <OpentoWork work = {person2.isAvailable}/>
</Card>

<Card title="Profile 3"  isSenior={person3.yearsOfExp >= 8}>
  <ProfileCard {...person3} />
  <Skills skills={person3.skills} />
  <Hobbie hobbie={person3.Hobbies}/>
  <OpentoWork work = {person3.isAvailable}/>
</Card>

</div>



<Footer name="Nagendra"/>
    </div>
  );
}

export default App;