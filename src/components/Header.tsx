import { useEffect, useState } from "react";
import { nav, navCta, reviews, business } from "../config";
import { Icon, img } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const items = nav.filter((n) => !("needs" in n) || (n.needs === "reviews" && reviews.length > 0));

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "";
      for (const n of items) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) cur = n.id;
      }
      const f = document.getElementById("solicitar");
      if (f && f.offsetTop <= y) cur = "";
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-in">
        <a href="#inicio" className="brand" aria-label={`${business.name} — inicio`}>
          <img src={img("logo.png")} alt="" width="40" height="44" />
          <span>NUTRIMAX</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Principal">
          {items.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""} onClick={go}>
              {n.label}
            </a>
          ))}
          <a href="#solicitar" className="btn btn-sm nav-cta-m" onClick={go}>{navCta}</a>
        </nav>
        <a href="#solicitar" className="btn btn-sm nav-cta">{navCta}</a>
        <button className="burger" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
