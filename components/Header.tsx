"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/facility", label: "The Facility" },
  { href: "/specialties", label: "Specialties" },
  { href: "/procedures", label: "Procedures" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <nav className="nav container">
        <Link href="/" className="nav-mark" onClick={() => setOpen(false)}>
          Sharp Surgery Center
        </Link>

        <ul className={`nav-links${open ? " is-open" : ""}`}>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="tel:+15125418132" className="btn btn-primary">
            (512) 541-8132
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
