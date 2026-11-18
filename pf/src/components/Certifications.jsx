import { motion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="Learning beyond the classroom"
          title="Courses & certifications."
          description="A few milestones from continuing to explore technology, networks, and career skills."
        />
        <div className="certification-grid">
          {certifications.map((item, index) => (
            <motion.article
              className="certification-card"
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="certification-top">
                <span className="certification-icon"><Award size={17} /></span>
                <span className="certification-date">{item.date}</span>
              </div>
              <span className="certification-category">{item.category}</span>
              <h3>{item.name}</h3>
              <div className="certification-issuer">
                {item.issuer}
                <ArrowUpRight size={13} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
