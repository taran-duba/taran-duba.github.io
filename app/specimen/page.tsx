export default function Specimen() {
  return (
    <div className="container-page py-20">
      <p className="label uppercase text-muted">Specimen / Type pairing</p>
      <h1 className="mt-6 font-display text-hero text-ink">Taran Duba</h1>
      <p className="mt-6 text-lede text-ink">Founder of Byte-Sized Python. Programming lead for FRC Team 3506.</p>
      <p className="measure mt-6 text-body text-muted">I’m a high school student in Charlotte, North Carolina. I started a nonprofit that teaches Python to students who can’t pay for classes, and I lead the programming subteam on Yeti Robotics.</p>
      <h2 className="mt-16 text-h2">More things I’ve built</h2>
      <h3 className="mt-6 text-h3">Byte-Sized Python</h3>
      <div className="mt-10 flex gap-12 bg-band p-10 text-band-fg">
        <div><p className="tabular font-display text-stat">200+</p><p className="mt-2 text-band-muted">students taught</p></div>
        <div><p className="tabular font-display text-stat">2026</p><p className="mt-2 text-band-muted">Hopper Division</p></div>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {["Next.js", "Tailwind", "Gemini API", "Mapbox GL JS"].map((t) => (
          <li key={t} className="label rounded-sm bg-accent-soft px-2 py-1 text-ink">{t}</li>
        ))}
      </ul>
      <p className="mt-8"><a className="link-underline text-accent" href="#">An accent link</a></p>
    </div>
  );
}
