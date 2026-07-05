import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">South Lamar · Austin, Texas</span>
            <h1>
              Where patients and surgeons <em>are treated like family.</em>
            </h1>
            <p className="hero-sub">
              SHARP Surgery Center is a purpose-built ambulatory surgery center
              on South Lamar — designed to elevate the experience for everyone
              in the room. Patients receive exceptional, unhurried care.
              Surgeons operate in a facility built to support them at every
              level.
            </p>
            <div className="hero-actions">
              <a href="tel:+15125418132" className="btn btn-primary">
                (512) 541-8132
              </a>
              <Link href="/facility" className="btn btn-outline">
                Tour the Facility
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="/images/sharp-marquee.jpg"
              alt="SHARP Surgery Center marquee letters at the building exterior on South Lamar, Austin TX"
            />
          </div>
        </div>
        <div className="spec-strip">
          <div className="container">
            <div className="spec-item">
              <div className="spec-value">2026</div>
              <div className="spec-label">Operational</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">4</div>
              <div className="spec-label">Operating Rooms</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">S. Lamar</div>
              <div className="spec-label">Austin, TX</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">Austin</div>
              <div className="spec-label">South Lamar</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Specialties</span>
            <h2>Focused on cosmetic and orthopedic surgery.</h2>
            <p>
              A curated set of services delivered in a purpose-built outpatient
              setting.
            </p>
          </div>
          <div className="specialty-grid">
            <div className="specialty-card">
              <span className="specialty-status status-live">Now Booking</span>
              <h3>Plastic &amp; Cosmetic</h3>
              <p>Facial, breast, and body procedures.</p>
              <ul>
                <li>Facial rejuvenation</li>
                <li>Breast surgery &amp; explant</li>
                <li>Body contouring</li>
              </ul>
            </div>
            <div className="specialty-card">
              <span className="specialty-status status-soon">Coming Soon</span>
              <h3>Orthopedic</h3>
              <p>Outpatient orthopedic procedures.</p>
              <ul>
                <li>Arthroscopy</li>
                <li>Hand &amp; wrist</li>
                <li>Sports medicine</li>
              </ul>
            </div>
            <div className="specialty-card">
              <span className="specialty-status status-live">Now Booking</span>
              <h3>General Cosmetic</h3>
              <p>Consultations across our full service list.</p>
              <ul>
                <li>Skin tightening</li>
                <li>Minor procedures</li>
                <li>Follow-up care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-event">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">Grand Opening</span>
              <h3>Built from the ground up in Austin, TX</h3>
              <p>
                SHARP Surgery Center celebrated its grand opening with surgeons,
                partners, and the Austin community. A purpose-built facility
                designed to serve the next generation of outpatient surgery.
              </p>
            </div>
            <div className="feature-media">
              <img
                src="/images/ribbon-cutting.jpg"
                alt="Ribbon cutting ceremony at the SHARP Surgery Center grand opening"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Everyone here is treated like family.</h2>
          <p>
            Call our office to discuss bringing your cases to SHARP Surgery
            Center.
          </p>
          <div className="hero-actions">
            <a href="tel:+15125418132" className="btn btn-outline on-dark">
              (512) 541-8132
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
