import { cn } from '../lib/utils'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'accent' | 'secondary'
  onClick?: () => void
}

const variants = {
  primary: 'bg-linear-to-r from-button-soft to-button-light text-white',
  accent: 'bg-url-hover text-white',
  secondary: 'bg-black text-white',
}

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', onClick }) => {
  return (
    <button
      className={cn(
        'flex h-[44.93px] items-center justify-center gap-0.5 rounded-full px-4 py-2',
        variants[variant],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
