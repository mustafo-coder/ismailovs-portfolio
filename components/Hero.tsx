import { ArrowDown } from 'lucide-react'
import Badge from '../shared/ui/Badge'

const Hero = () => {
  return (
    <div className="flex h-screen items-end pb-10">
      <div>
        <p className="font-montreal font-light mb-2.5 text-lg leading-[100%]">Perfectionist / Minimalist</p>
        <h1 className="font-sfpro mb-7.5 text-[32px] leading-[100%]">
          Ismailov Islam <br /> Graphic & UX/UI Designer
        </h1>
        <div className="mb-12.5 flex items-center gap-[5.62px]">
          <span className="font-montreal text-base leading-[100%] text-white/50">Industries</span>
          <div className="flex items-center gap-1">
            <Badge>Design</Badge>
            <Badge>UX/UI</Badge>
            <Badge>Editors</Badge>
          </div>
        </div>
        <span className="relative flex h-[37.39px] w-[16.62px] items-end justify-center rounded-[8.31px] bg-white p-1 text-black">
          <ArrowDown size={12} className="absolute bottom-1 animate-bounce" />
        </span>
      </div>
    </div>
  )
}

export default Hero
