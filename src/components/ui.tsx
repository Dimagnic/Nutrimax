import { useEffect, useRef, useState, type ReactNode } from "react";
import { business } from "../config";

export const img = (path: string) => `/images/${path}`;

export const waLink = (text: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

/** Imagen con recuadro de marca: si el archivo no existe, se ve el recuadro. */
export function Img({ src, label, className = "", alt = "" }: { src: string; label: string; className?: string; alt?: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`img ${className}`}>
      <div className="img-ph" aria-hidden={ok}>
        <span>{label}</span>
      </div>
      {ok && <img src={img(src)} alt={alt || label} loading="lazy" onError={() => setOk(false)} />}
    </div>
  );
}

/** Aparece al hacer scroll. */
export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return void el.classList.add("in");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = Tag as "div";
  return <T ref={ref} className={`reveal ${className}`}>{children}</T>;
}

export function Icon({ name }: { name: string }) {
  const p: Record<string, string> = {
    dumbbell: "M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11",
    bottle: "M9 2h6M10 2v3l-2 3v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l-2-3V2M8 13h8",
    chat: "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z",
    target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
    pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    headset: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3zM20 19c0 1.5-2 2-5 2",
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M6 9l6 6 6-6",
    left: "M15 6l-6 6 6 6",
    right: "M9 6l6 6-6 6",
    star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
    send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
    check: "M5 12l5 5 9-10",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6L6 18",
  };
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={p[name] ?? p.check} />
    </svg>
  );
}

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.2-.4.600-1.200.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.200c0 1.300.9 2.500 1 2.700.1.200 1.800 2.800 4.400 3.900 1.600.7 2.200.7 3 .6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}

export function Heading({ eyebrow, title, light, className = "" }: { eyebrow?: string; title: string; light?: boolean; className?: string }) {
  return (
    <div className={`heading ${light ? "light" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <span className="bar" />
    </div>
  );
}
