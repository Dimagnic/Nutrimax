import { useRef, useState, type ReactNode } from "react";
import { Icon } from "./ui";

export default function Carousel({ children, count }: { children: ReactNode; count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const go = (d: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: d * (el.firstElementChild as HTMLElement).offsetWidth * 1.03, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const w = (el.firstElementChild as HTMLElement).offsetWidth;
    setI(Math.round(el.scrollLeft / (w * 1.03)));
  };
  return (
    <div className="carousel">
      <button className="arrow" aria-label="Anterior" onClick={() => go(-1)}><Icon name="left" /></button>
      <div className="track" ref={ref} onScroll={onScroll}>{children}</div>
      <button className="arrow" aria-label="Siguiente" onClick={() => go(1)}><Icon name="right" /></button>
      <div className="dots">
        {Array.from({ length: count }).map((_, k) => <span key={k} className={k === i ? "on" : ""} />)}
      </div>
    </div>
  );
}
