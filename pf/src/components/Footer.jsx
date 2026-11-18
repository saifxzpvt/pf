import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">s<span>.</span></span>
          <span><b>{personalInfo.name}</b><small>{personalInfo.title}</small></span>
        </a>
        <div className="footer-center">
          <span>Designed &amp; built with intention.</span>
          <span className="footer-copyright">© {new Date().getFullYear()} {personalInfo.name}</span>
        </div>
        <div className="footer-right">
          <SocialLinks links={personalInfo} />
          <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Made for the love of making.</span>
        <a href="#home">Back to top <ArrowUpRight size={12} /></a>
      </div>
    </footer>
  )
}
