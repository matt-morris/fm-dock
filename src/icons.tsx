import { BsFillTerminalFill } from "react-icons/bs"
import { ImFinder, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im"
import { SiNextdotjs, SiPolywork, SiExercism } from "react-icons/si"
import { MdViewCarousel } from "react-icons/md"
import { GiAbstract050 } from "react-icons/gi"
export const getIcon = (name = "") =>
  ({
    finder: ImFinder,
    next: SiNextdotjs,
    twitter: ImTwitter,
    github: ImGithub,
    linkedin: ImLinkedin,
    carousel: MdViewCarousel,
    grid: GiAbstract050,
    polywork: SiPolywork,
    exercism: SiExercism,
  }[name] || BsFillTerminalFill)
export const icons = [
  { name: "green", color: "text-lime-500", href: "https://mattmorris.codes" },
  {
    name: "yellow",
    color: "text-yellow-500",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "grid",
    color: "text-pink-500",
    href: "https://codesandbox.io/s/wizardly-taussig-o78cfr",
  },
  {
    name: "carousel",
    color: "text-stone-500",
    href: "https://codesandbox.io/s/image-carousel-yicv3j",
  },
  {
    name: "twitter",
    color: "text-cyan-400",
    href: "https://twitter.com/doubleEmms",
  },
  {
    name: "linkedin",
    color: "text-blue-500",
    href: "https://www.linkedin.com/in/matthew-morris-676bb231/",
  },
  {
    name: "polywork",
    color: "text-purple-500",
    href: "https://www.polywork.com/mattmorris",
  },
  {
    name: "white",
    color: "text-white",
    href: "https://exercism.org/profiles/matt-morris",
  },

  {
    name: "black",
    color: "text-black-500",
    href: "https://www.hackerrank.com/double_emms",
  },
  {
    name: "github",
    color: "text-black-500",
    href: "https://github.com/matt-morris",
  },
  { name: "next", color: "text-black-500", href: "https://nextjs.org/" },
]
