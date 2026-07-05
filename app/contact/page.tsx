import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Contact Sharp Surgery Center at 4544 S Lamar Blvd, Unit 655, Austin, TX 78745. Call (512) 541-8132.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </div>
          <span className="eyebrow">Contact</span>
          <h1>Call our office.</h1>
          <p>
            SHARP Surgery Center works directly with surgeons and physician
            groups. Call us to discuss facility access, scheduling, or a tour.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="info-card">
            <h3>Phone</h3>
            <p>
              <a href="tel:+15125418132">(512) 541-8132</a>
            </p>
          </div>
          <div className="info-card">
            <h3>Address</h3>
            <p>
              4544 S Lamar Blvd, Unit 655
              <br />
              Austin, TX 78745
            </p>
          </div>
          <div className="info-card">
            <h3>Hours</h3>
            <p>
              Monday – Friday, by appointment
              <br />
              Office hours available upon request
            </p>
          </div>
          <div className="map-frame" style={{ marginTop: "1.5rem" }}>
            <iframe
              src="https://maps.google.com/maps?q=4544%20S%20Lamar%20Blvd%2C%20Unit%20655%2C%20Austin%2C%20TX%2078745&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Sharp Surgery Center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
