import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  CloudSun,
  Code2,
  Coins,
  ExternalLink,
  Github,
  KeyRound,
  LockKeyhole,
  Plus,
  SquareCheckBig,
  Terminal,
} from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectPreview({ project }) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={`${project.title} preview`} />
  }

  return (
    <div className={`project-preview project-preview-${project.variant}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-browser">
          <span className="window-dots"><i /><i /><i /></span>
          <span className="preview-address" />
          <span className="preview-menu">•••</span>
        </div>
        {project.variant === 'auth' ? (
          <div className="preview-auth">
            <div className="preview-brand-mark">s<span>.</span></div>
            <span className="preview-auth-title">Welcome back</span>
            <span className="preview-auth-subtitle">Sign in to your account</span>
            <span className="preview-input">Email address</span>
            <span className="preview-input">Password <i>••••••</i></span>
            <span className="preview-submit">Sign in <ArrowUpRight size={11} /></span>
          </div>
        ) : project.variant === 'tasks' || project.variant === 'taskzen' ? (
          <div className="preview-tasks">
            <div className="preview-tasks-heading">
              <div><span className="preview-small-label">MONDAY, OCTOBER 21</span><b>My tasks<span>.</span></b></div>
              <span className="preview-add"><Plus size={13} /></span>
            </div>
            <div className="preview-task-row"><span className="task-check checked"><SquareCheckBig size={12} /></span><span className="task-done">Review project notes</span></div>
            <div className="preview-task-row"><span className="task-check" /><span>Design the landing page</span><i className="task-priority" /></div>
            <div className="preview-task-row"><span className="task-check" /><span>Read 10 pages</span></div>
            <div className="preview-task-row"><span className="task-check" /><span>Sketch something new</span></div>
          </div>
        ) : (
          <div className={`preview-concept preview-concept-${project.variant}`}>
            <span className="concept-icon">
              {project.variant === 'ai' && <Bot size={23} />}
              {project.variant === 'currency' && <Coins size={23} />}
              {project.variant === 'security' && <KeyRound size={23} />}
              {project.variant === 'weather' && <CloudSun size={23} />}
              {project.variant === 'python' && <Terminal size={23} />}
            </span>
            <span className="concept-kicker">SELECTED PROJECT / {project.number}</span>
            <span className="concept-title">{project.title}</span>
            <span className="concept-tags">{project.tags.slice(0, 3).join(' · ')}</span>
            <span className="concept-code"><Code2 size={12} /> built with curiosity</span>
          </div>
        )}
      </div>
      <span className="preview-caption">
        {project.variant === 'auth' ? 'AUTH / SIGN IN' : project.variant === 'tasks' || project.variant === 'taskzen' ? 'TODAY / 04 TASKS' : `PROJECT / ${project.number}`}
      </span>
    </div>
  )
}

function ProjectLink({ href, children, label, primary = false }) {
  const className = `project-link ${primary ? 'project-link-primary' : ''} ${href ? '' : 'project-link-disabled'}`
  return href ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <span className={className} aria-label={`${label} link not set`}>{children}</span>
  )
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things I’ve made."
          description="Small projects, real learning. Each one is a chance to get a little better."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <ProjectPreview project={project} />
              <div className="project-info">
                <div className="project-heading-row">
                  <div>
                    <span className="project-number">PROJECT / {project.number}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <ArrowUpRight className="project-heading-arrow" size={19} />
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  <ProjectLink href={project.github} label="GitHub"><Github size={14} /> GitHub</ProjectLink>
                  <ProjectLink href={project.demo} label="Live demo" primary><ExternalLink size={14} /> Live demo</ProjectLink>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="projects-footnote">
          <LockKeyhole size={13} />
          Project links and screenshots can be added in <code>portfolioData.js</code>.
        </div>
      </div>
    </section>
  )
}
