import { useState, type FormEvent } from "react";
import { business, form as f, waMessage } from "../config";
import { Heading, Icon, WaIcon, waLink } from "./ui";

export default function ContactForm() {
  const [err, setErr] = useState<Record<string, string>>({});

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    const errors: Record<string, string> = {};
    if (!v("nombre")) errors.nombre = "Escribe tu nombre.";
    if (v("whatsapp").replace(/\D/g, "").length < 10) errors.whatsapp = "Escribe 10 dígitos con lada.";
    if (!d.get("privacidad")) errors.privacidad = "Debes aceptar para continuar.";
    setErr(errors);
    if (Object.keys(errors).length) return;
    const lines = [
      `Hola ${business.name}, quiero información.`,
      `Nombre: ${v("nombre")}`,
      `WhatsApp: ${v("whatsapp")}`,
      v("correo") && `Correo: ${v("correo")}`,
      v("ciudad") && `Ciudad: ${v("ciudad")}`,
      v("interes") && `Me interesa: ${v("interes")}`,
      v("mensaje") && `Mensaje: ${v("mensaje")}`,
    ].filter(Boolean) as string[];
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <section id="solicitar" className="section alt">
      <div className="container split form-split">
        <div className="split-l">
          <Heading eyebrow={f.eyebrow} title={f.title} />
          <p className="sub left">{f.text}</p>
          <ul className="points">
            {f.points.map((p) => (
              <li key={p.strong}><span className="ptico"><Icon name={p.icon} /></span><span><b>{p.strong}</b> {p.text}</span></li>
            ))}
          </ul>
          <p className="callout">{f.callout}</p>
          <p className="alt-t">{f.alt}</p>
          <a className="btn btn-outline" href={waLink(waMessage)} target="_blank" rel="noopener noreferrer"><WaIcon /> Escríbenos por WhatsApp</a>
        </div>
        <form className="form" onSubmit={submit} noValidate>
          <div className="row">
            <label>Nombre *
              <input name="nombre" autoComplete="name" aria-invalid={!!err.nombre} />
              <small className={err.nombre ? "err" : ""}>{err.nombre || "Tu nombre y apellido."}</small>
            </label>
            <label>WhatsApp con lada *
              <input name="whatsapp" inputMode="tel" autoComplete="tel" aria-invalid={!!err.whatsapp} />
              <small className={err.whatsapp ? "err" : ""}>{err.whatsapp || "10 dígitos con lada."}</small>
            </label>
          </div>
          <div className="row">
            <label>Correo electrónico
              <input name="correo" type="email" placeholder="tu@correo.com" autoComplete="email" />
              <small>Opcional.</small>
            </label>
            <label>Ciudad
              <input name="ciudad" autoComplete="address-level2" />
              <small>Opcional.</small>
            </label>
          </div>
          <label>¿Qué te interesa?
            <input name="interes" />
            <small>Opcional. Ej. entrenar, suplementos, precios.</small>
          </label>
          <label>Cuéntanos más
            <textarea name="mensaje" rows={4} />
            <small>Opcional.</small>
          </label>
          <label className="check">
            <input type="checkbox" name="privacidad" aria-invalid={!!err.privacidad} />
            <span>{f.privacy} *</span>
          </label>
          {err.privacidad && <small className="err">{err.privacidad}</small>}
          <button className="btn btn-lg" type="submit"><Icon name="send" /> {f.submit}</button>
          <p className="fine">{f.fine}</p>
        </form>
      </div>
    </section>
  );
}
