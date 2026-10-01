import Header from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import Skills from './components/Skills';
// import Footer from './components/Footer';
import './App.css';
import Card from './Card';
import Footer from './components/Footer';

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
};

const person2 = {
  name: 'Priya Sharma',
  role: 'Frontend Developer',
  city: 'Pune',
  yearsOfExp: 3,
  // no photo, so the default should be used
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
};



function App() {
  return (
    <div className="profile-card" style={cardTheme}>
      {/* Main profile sections */}
      <Header />
      <div style={{ display: 'flex', gap: 16 }}>
     <Card title="Profile 1">
  <ProfileCard {...person1} />
  <Skills skills={person1.skills} />
</Card>

<Card title="Profile 2">
  <ProfileCard {...person2} />
  <Skills skills={person2.skills} />
</Card>
</div>
<Footer name="Nagendra"/>
    </div>
  );
}

export default App;