import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="link-category">
        <p>Resources</p>
        <ul>
          <li>Allergen Info</li>
          <li>Nutritional Info</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="link-category">
        <p>About</p>
        <ul>
          <li>Franchising</li>
          <li>Our Story</li>
          <li>Fundraising</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="link-category">
        <p>Other Links</p>
        <ul>
          <li>Intranet</li>
          <li>HelpDesk</li>
          <li>Training Site</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
