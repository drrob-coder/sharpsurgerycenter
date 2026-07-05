import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Procedures",
  description:
    "Explore the surgical procedures offered at Sharp Surgery Center, a self-pay center in Austin, TX.",
};

export default function ProceduresPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / Procedures
          </div>
          <span className="eyebrow">Procedures</span>
          <h1>Our procedure list.</h1>
          <p>Browse by category. Content is coming from the design source.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="procedure-toc">
            <a href="#facial">Facial</a>
            <a href="#breast">Breast</a>
            <a href="#body">Body</a>
          </div>

          <div className="procedure-block" id="facial">
            <div className="procedure-block-head">
              <h2>Facial Surgery</h2>
              <span className="eyebrow">Now Booking</span>
            </div>
            <ul className="procedure-list">
              <li>Rhinoplasty <span className="tag">Self-Pay</span></li>
              <li>Facelift <span className="tag">Self-Pay</span></li>
              <li>Brow Lift <span className="tag">Self-Pay</span></li>
              <li>Eyelid Surgery (Blepharoplasty) <span className="tag">Self-Pay</span></li>
              <li>Facial Fat Grafting <span className="tag">Self-Pay</span></li>
              <li>Neck Lift <span className="tag">Self-Pay</span></li>
            </ul>
          </div>

          <div className="procedure-block" id="breast">
            <div className="procedure-block-head">
              <h2>Breast Surgery</h2>
              <span className="eyebrow">Now Booking</span>
            </div>
            <ul className="procedure-list">
              <li>Explant &amp; Breast Implant Removal <span className="tag">Self-Pay</span></li>
              <li>En Bloc Capsulectomy <span className="tag">Self-Pay</span></li>
              <li>Fat Transfer Breast Augmentation <span className="tag">Self-Pay</span></li>
              <li>Breast Lift (Mastopexy) <span className="tag">Self-Pay</span></li>
              <li>Breast Reduction <span className="tag">Self-Pay</span></li>
              <li>Breast Muscle Repair <span className="tag">Self-Pay</span></li>
            </ul>
          </div>

          <div className="procedure-block" id="body">
            <div className="procedure-block-head">
              <h2>Body</h2>
              <span className="eyebrow">Now Booking</span>
            </div>
            <ul className="procedure-list">
              <li>Body Contouring <span className="tag">Self-Pay</span></li>
              <li>Liposuction <span className="tag">Self-Pay</span></li>
              <li>Fat Transfer <span className="tag">Self-Pay</span></li>
              <li>Tummy Tuck (Abdominoplasty) <span className="tag">Self-Pay</span></li>
              <li>BodyTite Skin Tightening <span className="tag">Self-Pay</span></li>
              <li>Arm Lift (Brachioplasty) <span className="tag">Self-Pay</span></li>
              <li>Thigh Lift <span className="tag">Self-Pay</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
