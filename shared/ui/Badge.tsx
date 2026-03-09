import { cn } from '../lib/utils'

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span
      className={cn(
        'from-button-soft to-button-light block h-[26.27px] rounded-full bg-linear-to-r p-px',
        className,
      )}
    >
      <span className="font-montreal flex h-full w-full items-center justify-center rounded-full bg-black px-2.5 text-base leading-[100%] text-white">
        {children}
      </span>
    </span>
  )
}

export default Badge
