import { business, footer } from "../config";
import { img } from "./ui";

export default function Footer() {
  const soc = Object.entries(business.social).filter(([, v]) => v);
  return (
    <footer className="footer">
      <div className="container fgrid">
        <div>
          <div className="brand light">
            <span className="logo-badge"><img src={img("logo.png")} alt="Nutrimax L. García" width="56" height="62" /></span>
            <span>NUTRIMAX</span>
          </div>
          <p className="muted">{footer.about}</p>
          {soc.length > 0 && (
            <p className="social">
              {soc.map(([k, v]) => <a key={k} href={v} target="_blank" rel="noopener noreferrer">{k[0].toUpperCase() + k.slice(1)}</a>)}
            </p>
          )}
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp {business.whatsappDisplay}</a></li>
            {business.email && <li><a href={`mailto:${business.email}`}>{business.email}</a></li>}
            {business.address && <li>{business.mapUrl ? <a href={business.mapUrl} target="_blank" rel="noopener noreferrer">{business.address}</a> : business.address}</li>}
            {business.hours && <li>{business.hours}</li>}
          </ul>
        </div>
        {footer.legal.length > 0 && (
          <div>
            <h4>Legales</h4>
            <ul>{footer.legal.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
        )}
      </div>
      <div className="container copy">© {new Date().getFullYear()} {business.name} {business.owner}. Todos los derechos reservados.</div>
    </footer>
  );
}
