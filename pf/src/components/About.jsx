import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, PencilRuler } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="A bit about me" title="Curious by nature. Thoughtful by design." />
        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="about-lead">
              Hi, I&apos;m Saif — a junior full stack developer currently pursuing my MCA at Jamia
              Hamdard.
            </p>
            <p>
              I completed my BCA at DAV Institute of Management, Faridabad, and gained practical
              experience through internships at Oasis Infobyte and Unified Mentor.
            </p>
            <p>
              I started with Python fundamentals and small CLI projects, and now explore full-stack
              apps, APIs, and AI-powered ideas. I enjoy creating clean, user-friendly experiences;
              away from the screen, I watch anime and sketch.
            </p>
            <a className="text-link" href="#experience">
              More about my journey <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="education-card-heading">
              <span className="education-icon"><GraduationCap size={18} /></span>
              <span>Education</span>
            </div>
            {education.map((item, index) => (
              <div className="education-item" key={item.school}>
                <div className="education-item-top">
                  <h3>{item.degree}</h3>
                  <span className="education-index">0{index + 1}</span>
                </div>
                <p>{item.school}</p>
                <span className="education-detail"><PencilRuler size={12} /> {item.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
