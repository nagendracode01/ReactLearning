function Footer({ name = 'My Portfolio' }) {
  function handleSubmit(e) {
    e.preventDefault();
    alert('Thanks for subscribing!');
  }

  return (
    <footer>
      <p>© {new Date().getFullYear()} {name}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subscribe-email">Subscribe </label>
        <input
          id="subscribe-email"
          type="email"
          placeholder="Enter your email"
          onChange={e => console.log(e.target.value)}
        />
        <button>Subscribe</button>
      </form>
    </footer>
  );
}

export default Footer;