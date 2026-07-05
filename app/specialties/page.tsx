import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialties",
  description:
    "Plastic, cosmetic, and orthopedic surgical specialties at Sharp Surgery Center in Austin, TX.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Specialties
          </div>
          <span className="eyebrow">Specialties</span>
          <h1>The surgical specialties we serve.</h1>
          <p>
            A focused set of cosmetic and orthopedic services in a modern
            outpatient setting.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="specialty-grid" id="plastic-surgery">
            <div className="specialty-card">
              <span className="specialty-status status-live">Now Booking</span>
              <h3>Plastic &amp; Cosmetic Surgery</h3>
              <p>Breast, body, and skin procedures in a purpose-built outpatient setting.</p>
              <ul>
                <li>Explant &amp; breast implant removal</li>
                <li>Fat transfer breast augmentation</li>
                <li>Breast lift &amp; reduction</li>
                <li>Body contouring &amp; liposuction</li>
                <li>BodyTite skin tightening</li>
                <li>Tummy tuck</li>
              </ul>
            </div>
            <div className="specialty-card" id="facial-surgery">
              <span className="specialty-status status-live">Now Booking</span>
              <h3>Facial Surgery</h3>
              <p>Refined facial procedures performed with precision and care.</p>
              <ul>
                <li>Rhinoplasty</li>
                <li>Facelift</li>
                <li>Brow lift</li>
                <li>Eyelid surgery</li>
                <li>Facial fat grafting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
