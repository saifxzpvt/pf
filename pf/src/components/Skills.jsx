import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3 } from 'lucide-react'
import { skillGroups } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Tools of the trade"
          title="Learning, building, improving."
          description="A growing toolkit, built one project and one curious question at a time."
        />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-top">
                <span className="skill-icon"><Layers3 size={17} /></span>
                <span className="skill-card-index">0{index + 1}</span>
              </div>
              <h3>{group.title}</h3>
              <p className="skill-level">{group.level}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
              <ArrowUpRight className="skill-corner" size={16} />
            </motion.article>
          ))}
        </div>
        <p className="skills-note">
          <span className="note-line" />
          Skills shown reflect my current hands-on experience — always a work in progress.
        </p>
      </div>
    </section>
  )
}
