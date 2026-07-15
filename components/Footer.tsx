import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-mark">Sharp Surgery Center</div>
            <p style={{ marginTop: "1rem", maxWidth: "32ch" }}>
              4544 S Lamar Blvd, Unit 655
              <br />
              Austin, TX 78745
            </p>
            <p style={{ marginTop: "1rem" }}>(512) 541-8132</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/facility">The Facility</Link></li>
              <li><Link href="/specialties">Specialties</Link></li>
              <li><Link href="/procedures">Procedures</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Specialties</h4>
            <ul>
              <li><Link href="/specialties#plastic-surgery">Plastic &amp; Cosmetic</Link></li>
              <li><Link href="/specialties#orthopedics">Orthopedic</Link></li>
              <li><Link href="/procedures#breast">Breast Surgery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li><Link href="/contact">Contact &amp; Directions</Link></li>
              <li><Link href="/contact#consult">Request a Consult</Link></li>
              <li>
                <a href="https://drrobertwhitfieldmdreviews.com">
                  See what patients say
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sharp Surgery Center. All rights reserved.</span>
          <span>Austin, Texas</span>
        </div>
      </div>
    </footer>
  );
}
