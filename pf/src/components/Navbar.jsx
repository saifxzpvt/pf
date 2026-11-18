import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, personalInfo } from '../data/portfolioData.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.4] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${personalInfo.name}, home`}>
          <span className="brand-mark">s<span>.</span></span>
          <span className="brand-name">{personalInfo.name}</span>
        </a>

        <div className="desktop-nav">
          {navigation.map(({ label, href }) => {
            const id = href.slice(1)
            return (
              <a
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                href={href}
                key={id}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
                {activeSection === id && (
                  <motion.span className="nav-active-line" layoutId="nav-indicator" />
                )}
              </a>
            )
          })}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navigation.map(({ label, href }) => (
              <a
                href={href}
                key={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
