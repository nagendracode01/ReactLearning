import { useState } from "react";

function Footer({ name = 'My Portfolio' }) {
  const [email, setEmail] = useState('');
const [isSubscribed, setIsSubscribed] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
   setIsSubscribed(true);
  }

  return (
    <footer>
      <p>© {new Date().getFullYear()} {name}</p>
      {
      isSubscribed  ? (  <p>Thanks for subscribing, {email}!</p>
  ) : (
      <form onSubmit={handleSubmit}>
        <label htmlFor="subscribe-email">Subscribe </label>
        <input
          id="subscribe-email"
          type="email"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <button disabled={email.length === 0}>Subscribe</button>
      </form>
     )}
    </footer>
  );
}

export default Footer;