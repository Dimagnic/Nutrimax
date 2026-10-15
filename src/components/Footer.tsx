import { business, footer, nav, reviews } from "../config";
import { Img, img } from "./ui";

const social: Record<string, string> = {
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01",
  tiktok: "M14 3v11a3 3 0 1 1-3-3M14 3c0 3 2 5 5 5",
  youtube: "M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8zM10 9l5 3-5 3V9z",
};

export default function Footer() {
  const soc = Object.entries(business.social).filter(([, v]) => v);
  const links = nav.filter((n) => !("needs" in n) || reviews.length > 0);
  const cr = footer.credit;
  const crBody = (
    <>
      <span>{cr.text}</span>
      <span className="cr-logo"><img src={img(cr.logo)} alt={cr.name} height="26" /></span>
    </>
  );
  return (
    <footer className="footer">
      <div className="container fgrid">
        <div className="fcol-brand">
          <div className="brand light">
            <span className="logo-badge"><img src={img("logo.png")} alt="Nutrimax L. García" width="56" height="62" /></span>
            <span>NUTRIMAX</span>
          </div>
          <p className="muted">{footer.about}</p>
          {business.email && <p><a href={`mailto:${business.email}`}>{business.email}</a></p>}
          <p><a className="wa-link" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp: {business.whatsappDisplay}</a></p>
          {business.address && <p className="muted">{business.mapUrl ? <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">{business.address}</a> : business.address}</p>}
          {business.hours && <p className="muted">{business.hours}</p>}
          {soc.length > 0 && (
            <p className="social">
              {soc.map(([k, v]) => (
                <a key={k} href={v} target="_blank" rel="noopener noreferrer" aria-label={k}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={social[k]} /></svg>
                </a>
              ))}
            </p>
          )}
        </div>
        <div>
          <h4>{footer.navTitle}</h4>
          <ul>
            {links.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
            <li><a href="#solicitar">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>{footer.servicesTitle}</h4>
          <ul>{footer.services.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        <div>
          <h4>{footer.legalTitle}</h4>
          {footer.legal.length > 0 && <ul>{footer.legal.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>}
          {footer.note && <p className="muted note">{footer.note}</p>}
        </div>
        <div className="fcol-ai">
          <h4>{footer.assistantTitle}</h4>
          <Img src={footer.assistantImg} label={`public/images/${footer.assistantImg}`} className="qr" />
          <p className="muted">{footer.assistantCaption}</p>
        </div>
      </div>
      <div className="container copy">
        <span>© {new Date().getFullYear()} {business.name} {business.owner}. Todos los derechos reservados.</span>
        {cr.url
          ? <a className="credit" href={cr.url} target="_blank" rel="noopener noreferrer">{crBody}</a>
          : <span className="credit">{crBody}</span>}
      </div>
    </footer>
  );
}
