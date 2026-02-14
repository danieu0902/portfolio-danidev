"use client"

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-cyan-400">&lt;</span>
          DANIdev
          <span className="text-cyan-400">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#sobre-mi" className="hover:text-cyan-400 transition">Sobre mí</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Proyectos</a>
          <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden bg-black border-t border-zinc-800
          overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-60 py-4" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 text-sm">
          <a onClick={toggleMenu} href="#sobre-mi" className="hover:text-cyan-400 transition">
            Sobre mí
          </a>
          <a onClick={toggleMenu} href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a onClick={toggleMenu} href="#projects" className="hover:text-cyan-400 transition">
            Proyectos
          </a>
          <a onClick={toggleMenu} href="#contacto" className="hover:text-cyan-400 transition">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
