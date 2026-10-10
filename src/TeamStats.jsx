function TeamStats({ people = [] }) {
  if (people.length === 0) {
    return null;
  }

  let totalYears = 0;
  let mostExperienced = people[0];

  for(let person of people) {
      totalYears = totalYears + person.yearsOfExp;
      if(person.yearsOfExp > mostExperienced.yearsOfExp) {
         mostExperienced = person;
      }
  }

  return (
    <>
      <h3>Team Stats</h3>
      <p>Total experience: {totalYears} years</p>
      <p>Most experienced: {mostExperienced.name}</p>
    </>
  );
}

export default TeamStats;