import Header from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import Skills from './components/Skills';
// import Footer from './components/Footer';
import './App.css';
import Card from './Card';
import Footer from './components/Footer';
import Hobbie from './components/Hobbie';
import OpentoWork from './OpentoWork';
import TeamStats from './TeamStats';

const cardTheme = {
  border: '3px solid steelblue',
};



const people = [
  { id: 1,
  name: 'Nagendra Babu',
  role: 'Associate Manager',
  city: 'Hyderabad',
  yearsOfExp: 11,
  photo: 'https://picsum.photos/id/1005/150',
  skills: ['Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
  hobbie: ['doing code','reading books','cricket'],
  isAvailable: true,
  certifications: 3,
   },
  { 
  id: 2,
  name: 'Priya Sharma',
  role: 'Frontend Developer',
  city: 'Pune',
  yearsOfExp: 3,
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  hobbie: ['cooking','reading books'],
  isAvailable: false,
  certifications: 0,

  },
  { 
    id: 3, 
    name: 'Arjun Rao',
  role: 'Intern',
  city: 'Chennai',
  yearsOfExp: 0,
  skills: [],
  hobbie: ['badminton','singing'],
  isAvailable: true,
  certifications: 1,
  },
  { 
    id: 4, 
    name: 'fafa',
  role: 'Intern',
  city: 'Chennai',
  yearsOfExp: 0,
  skills: ['java'],
  hobbie: ['cooking','code'],
  isAvailable: true,
  certifications: 4,
  }
];



function App() {
  const sortedPeople = [...people].sort((a,b) => b.yearsOfExp - a.yearsOfExp)
  return (
    <div className="profile-card" style={cardTheme}>
      {/* Main profile sections */}
      <Header />
         <p>{sortedPeople.length} People · {sortedPeople.filter(p => p.isAvailable).length} open to work</p>
         <TeamStats people={people} />  
      <div style={{ display: 'flex', gap: 16 }}>
      {
  sortedPeople.map(p => {
    return (
      <Card
        key={p.id}
        title="Profile"
        id={p.id}
        isSenior={p.yearsOfExp >= 8}
      >
        <ProfileCard {...p} />
        <Skills skills={p.skills} />
        <Hobbie
          hobbie={p.hobbie}
          havingHobbie={p.hobbie.length > 2}
        />
        <OpentoWork work={p.isAvailable} />
      </Card>
    );
  })
}

</div>

{/* <div>
{
  people.map(p => (
    <Card
      key={p.id}
      title="Profile"
      id={p.id}
      isSenior={p.yearsOfExp >= 8}
    >
      <ProfileCard {...p} />
      <Skills skills={p.skills} />
      <Hobbie
        hobbie={p.hobbie}
        havingHobbie={p.hobbie.length > 2}
      />
      <OpentoWork work={p.isAvailable} />
    </Card>
  ))
}

</div> */}

{/* // ❌ No return
people.map(p => {
  <Card />
}) */}


{/* // ✅ Explicit return
people.map(p => {
  return <Card />;
}) */}


{/* // ✅ Implicit return
people.map(p => (
  <Card />
)) */}




<Footer name="Nagendra"/>
    </div>
  );
}

export default App;