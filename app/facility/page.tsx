import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Facility",
  description:
    "Tour Sharp Surgery Center — a purpose-built outpatient surgery facility on South Lamar in Austin, TX.",
};

export default function FacilityPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / The Facility
          </div>
          <span className="eyebrow">The Facility</span>
          <h1>A calm, modern space designed for outpatient surgery.</h1>
          <p>
            Purpose-built operating rooms and a patient-first environment
            on South Lamar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="feature-num">01</span>
              <h3>Four purpose-built operating rooms</h3>
              <p>
                SHARP Surgery Center was designed from the ground up as a
                dedicated outpatient surgical facility. Four fully equipped
                operating rooms support a focused range of plastic, cosmetic,
                and orthopedic procedures — each room purpose-built for
                efficiency, safety, and the highest standard of care.
              </p>
            </div>
            <div className="feature-media">
              <img
                src="/images/sharp-marquee.jpg"
                alt="SHARP Surgery Center building exterior with marquee letters on South Lamar"
              />
            </div>
          </div>
          <div className="feature-row reverse">
            <div>
              <span className="feature-num">02</span>
              <h3>An experience built for every person in the room</h3>
              <p>
                From the moment a patient arrives, the environment is calm,
                welcoming, and unhurried. A newly appointed waiting area and a
                dedicated preoperative preparation space set the tone before
                surgery begins. Every case is run with precision — but no one
                here is ever made to feel rushed. That same standard extends to
                the surgical team: SHARP Surgery Center was built to elevate the
                experience for patients, caregivers, surgical staff, and
                surgeons alike.
              </p>
            </div>
            <div className="feature-media">
              <img
                src="/images/ribbon-cutting.jpg"
                alt="Ribbon cutting ceremony at the SHARP Surgery Center grand opening"
              />
            </div>
          </div>
          <div className="feature-row">
            <div>
              <span className="feature-num">03</span>
              <h3>A team that operates like family</h3>
              <p>
                The SHARP team brings together experienced surgical
                professionals who share a commitment to precision, respect, and
                collaboration. Every member of the team — from front desk to
                operating room — is here because they believe in doing things
                differently.
              </p>
              <p>
                <a href="https://drrobertwhitfieldmdreviews.com">
                  See what patients say
                </a>{" "}
                about their care with Robert Whitfield, MD.
              </p>
            </div>
            <div className="feature-media">
              <img
                src="/images/team.jpg"
                alt="The SHARP Surgery Center team at the grand opening event"
              />
            </div>
          </div>
          <div className="feature-row reverse">
            <div>
              <span className="feature-num">04</span>
              <h3>Community and innovation</h3>
              <p>
                SHARP Surgery Center is more than a facility — it is a hub for
                surgical innovation and community engagement. From hosting
                industry events to collaborating with leading surgeons, SHARP is
                building the future of outpatient surgery in Austin.
              </p>
            </div>
            <div className="feature-media">
              <img
                src="/images/red-carpet.jpg"
                alt="Red carpet event with SHARP Labs backdrop at the grand opening"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section facility-gallery">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Gallery</span>
            <h2>Inside SHARP Surgery Center</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="/images/grand-opening-backdrop.jpg"
                alt="Dr. Whitfield with SHARP book at the grand opening backdrop"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/lolli-interview.jpg"
                alt="Dr. Whitfield and Anthony Lolli in a documentary interview at the SHARP Labs event"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/dr-whitfield-books.jpg"
                alt="Dr. Robert Whitfield, founder of SHARP Surgery Center"
              />
            </div>
            <div className="gallery-item">
              <img
                src="/images/event-photo-8.jpg"
                alt="SHARP Surgery Center website homepage showcasing the facility"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
