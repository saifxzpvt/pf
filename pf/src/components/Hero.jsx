import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Download, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="kicker-line" />
            <span>Independent developer · {personalInfo.location}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m <span className="hero-name">Saif Ali.</span>
            <br />
            <span className="hero-title">Jr. Full Stack Developer</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            Building clean, modern and user-focused digital experiences through code and creativity.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            <a className="button button-primary" href="#projects">
              View projects <ArrowRight size={16} />
            </a>
            <a className="button button-quiet" href="#contact">
              Contact me <ArrowUpRight size={15} />
            </a>
            <a
              className={`button button-resume ${personalInfo.resume ? '' : 'button-disabled'}`}
              href={personalInfo.resume || undefined}
              target={personalInfo.resume ? '_blank' : undefined}
              rel={personalInfo.resume ? 'noreferrer' : undefined}
              aria-disabled={!personalInfo.resume}
              onClick={(event) => {
                if (!personalInfo.resume) event.preventDefault()
              }}
            >
              Resume <Download size={15} />
            </a>
          </motion.div>

          <motion.div
            className="hero-social-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            <SocialLinks links={personalInfo} />
            {personalInfo.availability && (
              <span className="availability"><i /> Available for opportunities</span>
            )}
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Abstract code-inspired artwork"
          role="img"
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <div className="art-core-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="art-label">A LITTLE ABOUT ME</span>
            </div>
            <div className="code-art">
              <span className="code-muted">01</span><span className="code-purple">const</span> saif = {'{'}
              <br /><span className="code-muted">02</span><span className="code-indent" />
              <span className="code-blue">creates</span>: <span className="code-green">&quot;for people&quot;</span>,
              <br /><span className="code-muted">03</span><span className="code-indent" />
              <span className="code-blue">style</span>: <span className="code-green">&quot;minimal&quot;</span>,
              <br /><span className="code-muted">04</span><span className="code-indent" />
              <span className="code-blue">detail</span>: <span className="code-orange">true</span>
              <br /><span className="code-muted">05</span>{'}'}
            </div>
            <div className="art-core-bottom">
              <span><Code2 size={14} /> Open to learning</span>
              <Sparkles size={15} className="art-sparkle" />
            </div>
          </div>
          <div className="art-float float-one"><span className="float-icon"><Code2 size={15} /></span> Thoughtful code</div>
          <div className="art-float float-two"><span className="float-icon"><Sparkles size={15} /></span> Creative by nature</div>
          <span className="art-coordinate">28° 24&apos; 12.0&quot; N</span>
        </motion.div>
      </div>

      <a className="scroll-cue container" href="#about">
        <span>Scroll to explore</span><ArrowDown size={14} />
      </a>
    </section>
  )
}
