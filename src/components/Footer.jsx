function Footer({name='myportpolio'}) {
  return (
    <footer>
      <p>© {new Date().getFullYear()}:{name}</p>
      <label htmlFor="subscribe-email">Subscribe</label>
      <input id="subscribe-email" type="email" placeholder="Enter your email" />
    </footer>
  );
}

export default Footer;