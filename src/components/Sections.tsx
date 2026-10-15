import { useState } from "react";
import * as c from "../config";
import plansData from "../menu.json";
import { Heading, Icon, Img, Reveal, WaIcon, waLink } from "./ui";
import Carousel from "./Carousel";

export function Hero() {
  const h = c.hero;
  return (
    <section id="inicio" className="hero">
      <Img src="hero.jpg" label="Foto principal · public/images/hero.jpg" className="hero-bg" />
      <div className="hero-shade" />
      <div className="container hero-in">
        <p className="eyebrow gold">{h.eyebrow}</p>
        <h1>
          {h.titleA} <em>{h.titleAccent}</em>
        </h1>
        <p className="lead">{h.text}</p>
        {h.price && (
          <p className="price">
            <small>Desde</small> <strong>{h.price}</strong> <span>{h.priceNote}</span>
            {h.priceSmall && <i>{h.priceSmall}</i>}
          </p>
        )}
        <div className="hero-btns">
          <a href="#solicitar" className="btn btn-lg">{h.cta}</a>
          <a href={waLink(c.waMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-ghost">
            <WaIcon /> {h.ctaWa}
          </a>
        </div>
        <p className="small">{h.small}</p>
        {h.bullets.length > 0 && (
          <ul className="ticks">{h.bullets.map((b) => <li key={b}><Icon name="check" />{b}</li>)}</ul>
        )}
      </div>
    </section>
  );
}

export function Trust() {
  if (!c.stats.length) return null;
  return (
    <section className="trust">
      <div className="container">
        {c.statsEyebrow && <p className="trust-eyebrow">{c.statsEyebrow}</p>}
        <div className="stats">
          {c.stats.map((s) => (
            <Reveal key={s.label} className="stat">
              <Icon name={s.icon} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problems() {
  const p = c.problems;
  return (
    <section className="section">
      <div className="container">
        <Heading title={p.title} />
        <div className="grid g2">
          {p.items.map((it) => (
            <Reveal key={it.title} className="pcard">
              <Img src={it.img} label={`public/images/${it.img}`} />
              <div className="pcard-t">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="closing">{p.closing} <strong>{p.closingStrong}</strong></p>
      </div>
    </section>
  );
}

export function Solution() {
  const s = c.solution;
  return (
    <section id="solucion" className="section alt">
      <div className="container">
        <Heading title={s.title} />
        <div className="grid g2">
          {s.items.map((it) => (
            <Reveal key={it.title} className="scard">
              <span className="ico"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="center"><a href="#solicitar" className="btn btn-lg">{s.cta}</a></div>
      </div>
    </section>
  );
}

export function Dark() {
  const d = c.dark;
  return (
    <section className="section dark">
      <div className="container split">
        <Reveal className="split-l">
          <Heading eyebrow={d.eyebrow} title={d.title} light />
          <p className="muted">{d.text}</p>
          <table className="tbl">
            <thead><tr>{d.tableHead.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{d.rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td><b>{r[1]}</b></td></tr>)}</tbody>
          </table>
        </Reveal>
        <Reveal className="split-r">
          <Img src={d.img} label={`public/images/${d.img}`} className="framed" />
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  const r = c.reviewsSection;
  if (!c.reviews.length) return null;
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <Heading eyebrow={r.eyebrow} title={r.title} />
        <Carousel count={c.reviews.length}>
          {c.reviews.map((v) => (
            <article key={v.name} className="rcard">
              <h3>{v.name}</h3>
              <p className="place">{v.place}</p>
              <p className="stars" aria-label={`${v.stars} de 5`}>{"★".repeat(v.stars)}</p>
              <p>{v.text}</p>
            </article>
          ))}
        </Carousel>
        <h3 className="center q">{r.cta}</h3>
        <div className="center"><a href="#solicitar" className="btn btn-lg">{r.ctaBtn}</a></div>
      </div>
    </section>
  );
}

export function Videos() {
  const v = c.videosSection;
  if (!c.videos.length) return null;
  return (
    <section className="section alt">
      <div className="container">
        <Heading title={v.title} />
        <p className="sub">{v.text}</p>
        <Carousel count={c.videos.length}>
          {c.videos.map((x) => (
            <article key={x.youtube} className="vcard">
              <div className="vframe">
                <iframe src={`https://www.youtube-nocookie.com/embed/${x.youtube}`} title={x.title} loading="lazy" allowFullScreen />
              </div>
              <h3>{x.title}</h3>
              {x.text && <p>{x.text}</p>}
            </article>
          ))}
        </Carousel>
        <div className="center"><a href="#solicitar" className="btn btn-lg">{v.cta}</a></div>
      </div>
    </section>
  );
}

export function Gallery() {
  const g = c.gallery;
  return (
    <section id="galeria" className="section">
      <div className="container">
        <Heading eyebrow={g.eyebrow} title={g.title} />
        <div className="gallery">
          {g.items.map((it, i) => (
            <Reveal key={it.file} className={`gitem gi${i}`}>
              <Img src={`gallery/${it.file}`} label={`gallery/${it.file}`} alt={it.caption} />
            </Reveal>
          ))}
        </div>
        {g.moreLabel && g.moreUrl && (
          <div className="center"><a className="btn btn-outline" href={g.moreUrl} target="_blank" rel="noopener noreferrer">{g.moreLabel}</a></div>
        )}
      </div>
    </section>
  );
}

type Plan = { name: string; desc: string; price: number | null; unit: string; features: string[]; featured?: boolean; badge?: string };

export function Plans() {
  const p = c.plansSection;
  const plans = plansData.plans as Plan[];
  return (
    <section id="planes" className="section alt">
      <div className="container">
        <Heading eyebrow={p.eyebrow} title={p.title} />
        <ul className="ticks dark-ticks">{p.bullets.map((b) => <li key={b}><Icon name="check" />{b}</li>)}</ul>
        <div className="plans">
          {plans.map((pl) => (
            <Reveal key={pl.name} className={`plan ${pl.featured ? "featured" : ""}`}>
              {pl.badge && <span className="badge">{pl.badge}</span>}
              <h3>{pl.name}</h3>
              <p className="pdesc">{pl.desc}</p>
              <p className="pprice">
                {pl.price == null ? <span className="consult">Consultar precio</span> : <><strong>${pl.price.toLocaleString("es-MX")}</strong> <small>{pl.unit}</small></>}
              </p>
              {pl.features.length > 0 && <ul className="ticks">{pl.features.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>}
              <a href="#solicitar" className="btn">Cotizar</a>
            </Reveal>
          ))}
        </div>
        <Img src={p.promoImg} label={`Banner de promoción (opcional) · public/images/${p.promoImg}`} className="promo" />
      </div>
    </section>
  );
}

export function Store() {
  const s = c.store;
  return (
    <section className="section">
      <div className="container">
        <Heading eyebrow={s.intro} title={s.introTitle} />
        <p className="sub">{s.introText}</p>
        <div className="grid g2 cards-l">
          {s.cards.map((x) => (
            <Reveal key={x.title} className="lcard"><h3>{x.title}</h3><p>{x.text}</p></Reveal>
          ))}
        </div>
        <Reveal className="storebox">
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <a className="btn btn-ghost" href={waLink(s.waText)} target="_blank" rel="noopener noreferrer"><WaIcon /> {s.btn}</a>
        </Reveal>
      </div>
    </section>
  );
}

export function Steps() {
  const s = c.steps;
  return (
    <section id="como-funciona" className="section alt">
      <div className="container">
        <Heading title={s.title} />
        <ol className="steps">
          {s.items.map((it, i) => (
            <Reveal as="li" key={it.title} className="step">
              <span className="num">{i + 1}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Support() {
  const s = c.support;
  return (
    <section className="section dark">
      <div className="container split rev">
        <Reveal className="split-r"><Img src={s.img} label={`public/images/${s.img}`} className="framed" /></Reveal>
        <Reveal className="split-l">
          <Heading title={s.title} light />
          <h3 className="sub-h">{s.subtitle}</h3>
          <p className="boxtext">{s.text}</p>
          <a href="#solicitar" className="btn btn-lg">{s.cta}</a>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="preguntas" className="section">
      <div className="container narrow">
        <Heading eyebrow={c.faqTitle.eyebrow} title={c.faqTitle.title} />
        <div className="faq">
          {c.faqs.map((f, i) => (
            <div key={f.q} className={`faq-i ${open === i ? "open" : ""}`}>
              <h3>
                <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span><Icon name="down" />
                </button>
              </h3>
              <div id={`faq-${i}`} className="faq-a" role="region"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
