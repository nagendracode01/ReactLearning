function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning';
  } else if (hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

function Header() {
  return (
    <header>
      <h1>{getGreeting()}</h1>
    </header>
  );
}

export default Header;