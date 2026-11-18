import { motion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Check } from 'lucide-react'
import { experience } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="The path so far"
          title="Experience that keeps me curious."
          description="Practical beginnings, meaningful lessons, and plenty more to come."
        />
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.company}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <span className="experience-type"><BriefcaseBusiness size={12} /> {item.date}</span>
                    <span className="experience-duration">{item.duration}</span>
                  </div>
                  <h3>{item.company}{item.location && <span>, {item.location}</span>}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-description">{item.description}</p>
                  <span className="completed-badge"><Check size={12} /> {item.status}</span>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.aside
            className="experience-aside"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <span className="aside-index">01 — 02</span>
            <div className="aside-symbol"><span /><span /><span /></div>
            <h3>Every first step counts.</h3>
            <p>These internships gave me a place to turn curiosity into practice and keep growing as a developer.</p>
            <a href="#contact" className="text-link">Let&apos;s connect <ArrowUpRight size={14} /></a>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
