'use client'
import Button from '@/shared/ui/Button'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-[33.25px] z-50 w-full">
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
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Maqola</Link>
              </li>
              <li>
                <Link href="/products">Mahsulot</Link>
              </li>
              <li>
                <Link href="/apps">Dastur</Link>
              </li>
              <li>
                <Link href="/help">Yordam</Link>
              </li>
            </ul>
          </nav>
          <div className="relative">
            <Button className="z-10 w-[88.42px]" onClick={() => setIsOpen(!isOpen)}>
              <span>Click</span>
              <ChevronDown size={14} />
            </Button>
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 flex flex-col gap-[6.21px] pt-[6.21px]"
                >
                  <Button className="w-[88.42px]">Bog'lanish</Button>
                  <Button className="w-[88.42px]" variant="secondary">
                    Resume
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
