import { ArrowUpRight, Github, Instagram, Linkedin, Send } from 'lucide-react'

const socialItems = [
  { key: 'github', label: 'GitHub', Icon: Github },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'telegram', label: 'Telegram', Icon: Send },
]

export default function SocialLinks({ links, className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      {socialItems.map(({ key, label, Icon }) => {
        const href = links[key]
        return href ? (
          <a key={key} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={16} strokeWidth={1.7} />
            <span>{label}</span>
            <ArrowUpRight className="social-arrow" size={13} />
          </a>
        ) : (
          <span key={key} className="social-link-unset" aria-label={`${label} link not set`}>
            <Icon size={16} strokeWidth={1.7} />
            <span>{label}</span>
          </span>
        )
      })}
    </div>
  )
}
