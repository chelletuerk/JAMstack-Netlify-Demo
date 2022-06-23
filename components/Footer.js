export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            Our mission is to inspire healthier lives by creating the best
            products, services and experiences for our customers. Creating
            inviting and transformative fitness solutions that benefit every
            exerciser and any facility.
          </h2>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
        <div className="project-credit">
        </div>
      </footer>
    </>
  );
}
