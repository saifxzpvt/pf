import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'
import SocialLinks from './SocialLinks.jsx'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!personalInfo.email) {
      setError('Add your email address in portfolioData.js to enable the email fallback.')
      return
    }

    const trimmed = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    )
    if (Object.values(trimmed).some((value) => !value)) {
      setError('Please complete each field before continuing.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      setError('Please enter a valid email address.')
      return
    }

    const subject = encodeURIComponent(trimmed.subject)
    const body = encodeURIComponent(
      `Hi Saif,\n\n${trimmed.message}\n\nFrom: ${trimmed.name}\nReply to: ${trimmed.email}`,
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setError('Your email app should open with this message ready to send. Nothing is sent by this website.')
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Have something in mind?"
          description="Have a project, an opportunity, or just want to say hi? My inbox is open."
        />
        <div className="contact-grid">
          <motion.div
            className="contact-aside"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="contact-aside-label">A good conversation starts here.</span>
            <p>I&apos;m always glad to connect with thoughtful people and interesting ideas.</p>
            <div className="contact-details">
              <div className="contact-detail-icon"><Mail size={17} /></div>
              <div>
                <span>Email me</span>
                {personalInfo.email ? (
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                ) : (
                  <span className="unset-value">Add email in portfolioData.js</span>
                )}
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-detail-icon"><MapPin size={17} /></div>
              <div><span>Based in</span><p>{personalInfo.location}</p></div>
            </div>
            <SocialLinks links={personalInfo} className="contact-social" />
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input name="name" autoComplete="name" value={form.name} onChange={updateForm} placeholder="Jane Smith" required />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" autoComplete="email" value={form.email} onChange={updateForm} placeholder="jane@example.com" required />
              </label>
            </div>
            <label>
              <span>Subject</span>
              <input name="subject" value={form.subject} onChange={updateForm} placeholder="What would you like to discuss?" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" value={form.message} onChange={updateForm} placeholder="A little about your idea..." required />
            </label>
            <div className="form-bottom">
              <button className="button button-primary" type="submit">
                Prepare email <Send size={14} />
              </button>
              <span>Opens your email app <ArrowRight size={13} /></span>
            </div>
            <p className="form-disclaimer">No backend — this form prepares a message in your email app. It won&apos;t send anything automatically.</p>
            {error && <p className={`form-feedback ${error.startsWith('Your email') ? 'form-feedback-success' : ''}`} role="status">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
