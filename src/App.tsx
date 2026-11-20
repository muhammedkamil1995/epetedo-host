import { useEffect, useMemo, useState } from 'react'
import { rooms, pillars, phases, roles, Phase } from './data'

const filters: ('All' | Phase)[] = ['All', 'Shared', 'Phase 1', 'Phase 2', 'Phases 2 to 3']
const label = (f: string) => (f === 'Shared' ? 'Shared facilities' : f)
const MAIL = 'muhammed.kamil@sprintafrica.com.ng'

export default function App() {
  const [f, setF] = useState<'All' | Phase>('All')
  const [open, setOpen] = useState<number | null>(null)
  const list = useMemo(() => (f === 'All' ? rooms : rooms.filter(r => r.phase === f)), [f])

  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [list])

  useEffect(() => {
    if (open === null) return
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen(o => (o === null ? o : (o + 1) % list.length))
      if (e.key === 'ArrowLeft') setOpen(o => (o === null ? o : (o - 1 + list.length) % list.length))
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open, list.length])

  const cur = open !== null ? list[open] : null
  return (
    <>
      <header className="nav"><a href="#top" className="brand"><img src="assets/logo-icon-white.png" alt="" /><span>Epetedo Hub</span></a>
        <nav><a href="#vision">Vision</a><a href="#facilities">Facilities</a><a href="#phases">Phases</a><a href="#platform">Platform</a><a href="#ask">Our request</a></nav></header>

      <section id="top" className="hero" style={{ backgroundImage: `linear-gradient(180deg,rgba(16,35,63,.55),rgba(16,35,63,.92)),url(${rooms[0].img})` }}>
        <div className="wrap">
          <img className="hero-logo" src="assets/logo-white.png" alt="Epetedo Technology and Innovation Hub" />
          <p className="eyebrow">Concept for discussion · Epetedo East Ward, Lagos Island</p>
          <h1>Building Lagos’ next generation of technology and innovation.</h1>
          <p className="lead">A disused public primary school, redeveloped into a hub for technology education, software engineering, AI, research, entrepreneurship and digital transformation. Owned by Government throughout.</p>
          <div className="cta"><a className="btn gold" href="#facilities">Explore the Hub</a><a className="btn ghost" href="#platform">See how it will run</a></div>
        </div>
      </section>

      <section id="vision" className="wrap sec">
        <h2 className="reveal">One idle building. Four results for Lagos.</h2>
        <div className="grid4">
          {[['Train','Young graduates trained and placed in software, AI, data, cybersecurity and cloud roles.'],['Host','Secure digital infrastructure and Government technology services, kept in the State.'],['Incubate','Local technology companies and locally owned intellectual property.'],['Earn','Jobs, skills and internally generated revenue for Lagos State.']].map(([t, d]) => (
            <div className="card reveal" key={t}><h3>{t}</h3><p>{d}</p></div>))}
        </div>
        <h2 className="reveal sub">Five pillars</h2>
        <div className="pillars">{pillars.map(p => (<div className="pillar reveal" key={p.n}><span>{p.n}</span><div><h3>{p.t}</h3><p>{p.d}</p></div></div>))}</div>
      </section>

      <section id="facilities" className="band"><div className="wrap sec">
        <h2 className="reveal">Walk through the Hub</h2>
        <p className="muted">Sixteen views, each linked to a department and a phase of delivery. Select any picture to enlarge it.</p>
        <div className="tabs">{filters.map(x => (<button key={x} className={x === f ? 'on' : ''} onClick={() => { setF(x); setOpen(null) }}>{label(x)}</button>))}</div>
        <div className="gallery">{list.map((r, i) => (
          <article className="room reveal" key={r.id}>
            <button className="thumb" onClick={() => setOpen(i)} aria-label={`Enlarge ${r.title}`}><img src={r.img} alt={r.title} loading="lazy" /></button>
            <div className="meta"><span className="tag">{r.phase === 'Shared' ? 'Shared · Phases 1 to 3' : r.phase}</span><h3>{r.title}</h3><small>{r.dept}</small><p>{r.text}</p></div>
          </article>))}</div>
        <p className="note">Artist’s impressions only. Not construction drawings. Layout, dimensions, equipment and finishes will be set by the site survey and professional design. Product names on screens are illustrative; no supplier or partnership is assumed.</p>
      </div></section>

      <section id="phases" className="wrap sec">
        <h2 className="reveal">Spending follows proof, not promises</h2>
        <p className="muted">Each phase starts only when the gate before it is met, and funding is released in stages tied to those gates.</p>
        <ol className="timeline">{phases.map(p => (<li className="reveal" key={p.p}><b>{p.p}</b><h3>{p.t}</h3><p>{p.d}</p><em>Gate: {p.g}</em></li>))}</ol>
        <div className="safe reveal"><h3>If the title is not clear or the structure is not fit for reuse, the project stops at Phase 0.</h3><p>Government keeps ownership of the asset throughout, with board seats, audit rights and open reporting.</p></div>
      </section>

      <section id="platform" className="band"><div className="wrap sec">
        <h2 className="reveal">A working platform, not just a building</h2>
        <p className="muted">The Hub will be run through a digital platform where everyone taking part has a clear route in. This presentation shows the public face. The member portals are the next build.</p>
        <div className="grid5">{roles.map(r => (<div className="card reveal" key={r.t}><h3>{r.t}</h3><p>{r.d}</p><span className="soon">Next build</span></div>))}</div>
      </div></section>

      <section id="ask" className="wrap sec">
        <h2 className="reveal">What we ask of Government</h2>
        <ol className="asks">
          <li>Confirm the building’s ownership and availability for redevelopment.</li>
          <li>Authorise a joint feasibility study and structural survey.</li>
          <li>Approve full Government funding of the renovation, fit out, tools and equipment, in stages tied to the phase gates.</li>
          <li>Support importation of tools and equipment, including approvals, duty and clearance.</li>
          <li>Open negotiation of the funded contract through the State’s PPP office or the relevant ministry.</li>
        </ol>
        <div className="contact reveal"><div><h3>Muhammed Kamil Babatunde</h3><p>Promoter, Technical Lead and Contractor, on behalf of the SPV led by Olorunnishola Femi</p></div>
          <div><a className="btn gold" href={`mailto:${MAIL}`}>{MAIL}</a><p>09073606049 · 08091312160</p></div></div>
      </section>

      <footer className="foot"><div className="wrap">
        <div className="fgrid">
          <div className="fbrand"><img src="assets/logo-white.png" alt="Epetedo Technology and Innovation Hub" /><p>A proposed technology, AI and digital innovation hub for Epetedo East Ward, Lagos Island. Owned by Government. Built to train, host, incubate and earn for Lagos.</p></div>
          <div><h4>Explore</h4><a href="#vision">Vision and pillars</a><a href="#facilities">Facilities</a><a href="#phases">Phases and gates</a><a href="#platform">The platform</a><a href="#ask">Our request</a></div>
          <div><h4>Contact</h4><p>Muhammed Kamil Babatunde<br /><span>Promoter, Technical Lead and Contractor</span></p><a href={`mailto:${MAIL}`}>{MAIL}</a><a href="tel:+2349073606049">09073606049</a><a href="tel:+2348091312160">08091312160</a></div>
          <div><h4>Prepared for</h4><p>Hon. Prince Taiwo Ajibade Oyekan<br /><span>Executive Chairman, Lagos Island Local Government, Lagos State</span></p><a className="btn gold sm" href="#top">Back to top ↑</a></div>
        </div>
        <div className="fbase"><p>© 2026 Epetedo Technology and Innovation Hub. Concept proposal for discussion, 16 November 2026.</p><p>Confidential. Subject to title verification, site survey and legal review. No cost figures are stated and no approval or third party commitment is assumed. Images are artist’s impressions.</p></div>
      </div></footer>

      {cur && (<div className="lb" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
        <button className="x" onClick={() => setOpen(null)} aria-label="Close">×</button>
        <button className="nv l" onClick={e => { e.stopPropagation(); setOpen((open! - 1 + list.length) % list.length) }} aria-label="Previous">‹</button>
        <figure onClick={e => e.stopPropagation()}><img src={cur.img} alt={cur.title} /><figcaption><b>{cur.title}</b> · {cur.dept}<br />{cur.text}<br /><small>Artist’s impression, proposed development.</small></figcaption></figure>
        <button className="nv r" onClick={e => { e.stopPropagation(); setOpen((open! + 1) % list.length) }} aria-label="Next">›</button></div>)}
    </>
  )
}
