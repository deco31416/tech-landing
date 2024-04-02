import React from 'react'
import styles from './Anchor.module.css'
import { cx } from '../utils/cx'

export const Anchor = ({ color, className }: { color?: string, className?: string }) => (
  <svg
    className={cx(styles.svg, className)}
    width="23"
    height="15"
    color={color}
  >
    <path
      className={styles.path}
      // eslint-disable-next-line @stylistic/max-len
      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
      fillRule="evenodd"
    />
  </svg>
)

export const AnchorContainer = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} className={cx(styles.anchor, className)} />
)
