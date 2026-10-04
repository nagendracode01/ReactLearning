function getGreeting() {
  const hour = new Date().getHours();
return hour < 12 ? 'Good Morning': hour < 18 ? 'Good Afternoon' : 'Good evening';

}

function Header() {
  return (
    <header>
      <h1>{getGreeting()}</h1>
    </header>
  );
}

export default Header;