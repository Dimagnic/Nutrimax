import { useEffect, useState } from "react";
import { Icon, WaIcon, waLink } from "./ui";
import { waMessage } from "../config";

export default function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 500);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className="floating">
      <button className={`fab fab-up ${show ? "show" : ""}`} aria-label="Subir" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Icon name="up" />
      </button>
      <a className="fab fab-wa" href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
        <WaIcon />
      </a>
    </div>
  );
}
