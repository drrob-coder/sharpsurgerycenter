import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about self-pay surgery, pricing, and scheduling at Sharp Surgery Center in Austin, TX.",
};

const FAQS = [
  {
    q: "What specialties does SHARP Surgery Center support?",
    a: "SHARP currently supports plastic and cosmetic surgery and facial surgery, including explant, fat transfer, rhinoplasty, facelift, and body contouring procedures. Additional specialties are being added. Call our office to discuss your specific case requirements.",
  },
  {
    q: "How do I bring my cases to SHARP?",
    a: "Contact our office directly at (512) 541-8132. We work directly with surgeons and physician groups to coordinate scheduling, staffing, and facility access.",
  },
  {
    q: "What equipment is available in the operating rooms?",
    a: "SHARP Surgery Center features four fully equipped operating rooms purpose-built for outpatient procedures. Call our office for a full equipment list or to schedule a facility tour.",
  },
  {
    q: "Where are you located?",
    a: "4544 S Lamar Blvd, Unit 655, Austin, TX 78745 — on South Lamar with ample parking.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / FAQ
          </div>
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked questions.</h1>
          <p>Common questions from surgeons and physician groups. Call (512) 541-8132 for anything not covered here.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          {FAQS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary className="faq-question">
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
