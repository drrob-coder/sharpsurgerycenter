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
                src="/images/facility/fx3-11-or4.jpg"
                alt="Fully equipped operating room at SHARP Surgery Center with surgical table, overhead lights, and anesthesia equipment"
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
                src="/images/facility/fx3-02-lobby.jpg"
                alt="Modern waiting area with mid-century leather chairs, teal tile display wall, and sputnik chandelier"
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
            <span className="eyebrow">Virtual Walkthrough</span>
            <h2>Inside SHARP Surgery Center</h2>
            <p>
              Walk through our purpose-built facility — from the welcoming lobby
              through the surgical suites.
            </p>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">01</span>
              Lobby &amp; Reception
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-01-lobby.jpg"
                  alt="SHARP Surgery Center reception area with front desk and modern seating"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-02-lobby.jpg"
                  alt="Waiting area with mid-century leather chairs, teal tile display wall, and sputnik chandelier"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-03-lobby.jpg"
                  alt="Lobby seating area with natural light from floor-to-ceiling windows"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">02</span>
              Pre-Op
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item gallery-item-wide">
                <img
                  src="/images/facility/fx3-04-preop.jpg"
                  alt="Pre-operative preparation area with patient beds and privacy curtains"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">03</span>
              Nurse Station
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-05-nurse-station.jpg"
                  alt="Central nurse station with monitoring equipment and workstations"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-06-nurse-station.jpg"
                  alt="Nurse station from a second angle showing clinical workspace"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">04</span>
              Operating Rooms
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-18-or1.jpg"
                  alt="Operating Room 1 — fully equipped surgical suite"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-17-or2.jpg"
                  alt="Operating Room 2 — surgical supply and preparation area"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-12-or3.jpg"
                  alt="Operating Room 3 — surgical table with overhead lights and monitoring equipment"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-13-or3.jpg"
                  alt="Operating Room 3 — wide view showing anesthesia machine and surgical lights"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-10-or4.jpg"
                  alt="Operating Room 4 — surgical suite with ceiling-mounted equipment"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-11-or4.jpg"
                  alt="Operating Room 4 — full view with surgical table, lights, and anesthesia station"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">05</span>
              OR Hallway
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-14-or-hall.jpg"
                  alt="OR hallway corridor with multiple operating room entrances and scrub sinks"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-15-or-hall.jpg"
                  alt="OR hallway from a second angle showing clean clinical environment"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-16-or-hall.jpg"
                  alt="OR hallway view toward the surgical wing entrance"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">06</span>
              Post-Op &amp; Recovery
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item gallery-item-wide">
                <img
                  src="/images/facility/fx3-07-postop.jpg"
                  alt="Post-operative recovery area with patient beds and monitoring stations"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">07</span>
              Anesthesia
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-08-anaesthesia.jpg"
                  alt="Anesthesia preparation area with equipment and supply stations"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-09-anaesthesia.jpg"
                  alt="Anesthesia room from a second angle showing workspace layout"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">08</span>
              Sterilization
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-19-sterilization.jpg"
                  alt="Sterilization room with instrument processing equipment"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-20-sterilization.jpg"
                  alt="Sterilization room showing autoclaves and sterile storage"
                />
              </div>
            </div>
          </div>

          <div className="walkthrough-section">
            <h3 className="walkthrough-heading">
              <span className="walkthrough-num">09</span>
              Staff Facilities
            </h3>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-21-locker-m.jpg"
                  alt="Men's staff locker room with personal storage"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/images/facility/fx3-22-locker-w.jpg"
                  alt="Women's staff locker room with personal storage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-video-tour">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Video Walkthrough</span>
            <h2>Experience the facility in motion</h2>
            <p>
              Step inside SHARP Surgery Center — from the welcoming lobby
              through the fully equipped operating suites.
            </p>
          </div>
          <div className="video-tour-grid">
            <div className="video-tour-panel">
              <div className="video-tour-label">Lobby &amp; Reception</div>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/sharp-clip-1-poster.jpg"
              >
                <source src="/videos/sharp-clip-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="video-tour-panel">
              <div className="video-tour-label">Operating Suite</div>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/sharp-clip-2-poster.jpg"
              >
                <source src="/videos/sharp-clip-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
