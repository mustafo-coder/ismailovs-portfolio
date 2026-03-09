import Button from '@/shared/ui/Button'
import { ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-[33.25px] z-50 w-full">
      <div className="container mx-auto w-full">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm leading-[100%] font-medium tracking-[-0.28px]">
              Ismailov Islam
            </h3>
            <p className="text-sm leading-[100%] font-light tracking-[-0.28px]">wide</p>
          </div>
          <nav className="flex h-[44.93px] items-center gap-[38.82px] rounded-full bg-[#1D1D1F] px-[31.33px]">
            <p className="from-button-soft to-button-light bg-linear-to-r bg-clip-text text-sm leading-[100%] font-medium tracking-[-0.28px] text-transparent">
              Ismailov Islam
            </p>
            <ul className="flex items-center gap-[38.82px] text-sm leading-[100%] font-normal tracking-[-0.28px]">
              <li>Portfolio</li>
              <li>Maqola</li>
              <li>Mahsulot</li>
              <li>Dastur</li>
              <li>Yordam</li>
            </ul>
          </nav>
          <div>
            <Button className="w-[88.42px]">
              <span>Click</span>
              <ChevronDown size={14} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
