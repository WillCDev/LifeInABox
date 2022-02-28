import { FC } from 'react'

interface Props {
  to: string
  label: string
}

const ExternalLink: FC<Props> = ({ to, children, label }) => (
  <a href={to} rel="noreferrer noopener" target="_blank" aria-label={label}>
    {children}
  </a>
)

export default ExternalLink
