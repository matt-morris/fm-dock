import {
  HTMLMotionProps,
  motion,
  MotionValue,
  Reorder,
  useMotionValue,
  useTransform,
} from "framer-motion"
import clsx from "clsx"
import useMeasure from "react-use-measure"
import { icons, getIcon } from "./icons"

import { useState } from "react"

const Icon = ({
  name,
  x,
  w = 22,
  multiplier = 2.1,
  offset,
  className = "",
  href,
  ...props
}: {
  name: string
  offset: number
  x: MotionValue
  w?: number
  multiplier?: number
  href?: string
} & HTMLMotionProps<"div">) => {
  const [ref, bounds] = useMeasure()
  const center = bounds.left - offset + bounds.width / 2
  const distance = useTransform(x, (v) => Math.abs(center - v))
  const scale = useTransform(distance, (v) => (-v) ** 2)
  const IconComponent = getIcon(name)

  return (
    <motion.div
      ref={ref}
      animate={{
        filter: `
          drop-shadow(0 1rem 0.25rem rgb(1 1 1 / 0.1))
        `,
      }}
      whileHover={{
        filter: `
          drop-shadow(0 0 0.75rem rgb(255 255 255 / 0.33))
          drop-shadow(0 1rem 0.5rem rgb(1 1 1 / 0.22))
        `,
      }}
      style={{
        width: useTransform(scale, [0, 5000], [w * multiplier, w]),
      }}
      className={clsx(["hover:brightness-110", className])}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <IconComponent className="h-full w-full" />
        </a>
      ) : (
        <IconComponent className="h-full w-full" />
      )}
    </motion.div>
  )
}

export default function Dock({ ...props }: DockProps) {
  const [ref, bounds] = useMeasure()
  const x = useMotionValue(-100)
  const [items, setIcons] = useState(icons)

  const size = 26

  return (
    <motion.div
      layout
      className="rounded-full px-4 py-2 bg-stone-700/30"
      {...props}
    >
      <Reorder.Group axis="x" values={items} onReorder={setIcons}>
        <motion.div
          ref={ref}
          className="flex items-end justify-center gap-3"
          animate={{
            height: size,
          }}
          onMouseMove={(e) => {
            x.set(e.pageX - e.currentTarget.offsetLeft)
          }}
          onMouseLeave={() => {
            x.set(-100)
          }}
        >
          {items.map((item) => (
            <Reorder.Item layout key={item.name} value={item} className="">
              <Icon
                name={item.name}
                x={x}
                w={size}
                offset={bounds.left}
                href={item.href}
                className={item.color}
              />
            </Reorder.Item>
          ))}
        </motion.div>
      </Reorder.Group>
    </motion.div>
  )
}

type DockProps = HTMLMotionProps<"div"> & {}
