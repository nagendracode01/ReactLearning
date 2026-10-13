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
import { useState } from 'react';

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
   const [query, setQuery] = useState('');
    // Calculated from state on every render (not stored in state)
  const visiblePeople = sortedPeople.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  function handleContact(person) {
    alert(`Contacting ${person.name} in ${person.city}`);
  }
  function ShowSkills(skills){
       alert(`showing skills: ${skills}`);
  }
  return (
    <div className="profile-card" style={cardTheme}>
      {/* Main profile sections */}
      <Header />
         <p>{sortedPeople.length} People · {sortedPeople.filter(p => p.isAvailable).length} open to work</p>
         <TeamStats people={people} />  
          {/* Search box */}
      <input
        placeholder="Search by name"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <p>Showing {visiblePeople.length} of {people.length} people</p>

      <div style={{ display: 'flex', gap: 16 }}>
      {
  visiblePeople.map(p => {
    return (
      <Card
        key={p.id}
        title="Profile"
        id={p.id}
        isSenior={p.yearsOfExp >= 8}
        onClick={() => console.log(`Card clicked: ${p.name}`)}
  onMouseEnter={() => console.log(`Viewing ${p.name}`)}
      >
        <ProfileCard {...p} OnContact={() => handleContact(p)}  />
        <Skills skills={p.skills} OnSkills={() => ShowSkills(p.skills)} />
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


 {/* Proof: original order of the people array */}
      <h3>Original order</h3>
      <ol>
        {people.map(p => (
          <li key={p.id}>{p.name} – {p.yearsOfExp} yrs</li>
        ))}
      </ol>

<Footer name="Nagendra"/>
    </div>
  );
}

export default App;