"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Target, 
  Mail, 
  MessageSquare,
  CheckCircle,
  Star,
  ArrowUpRight,
  Instagram,
  X as XIcon
} from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'


function CyclingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const texts = ['stream', 'podcast', 'tiktok', 'reel', 'vlog', 'video']

  useEffect(() => {
    if (isTyping) {
      const currentWord = texts[currentIndex]
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, 150) // Type speed
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1000) // Wait 1 second before deleting
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 100) // Delete speed
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next word
        setIsTyping(true)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    }
  }, [currentText, isTyping, currentIndex, texts])

  return (
    <span className="inline-block min-w-[120px] text-left">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function TypingText() {
  const fullText = "Match cut my foot stepping out of each restaurant door to stepping into the next location. Create a teleportation effect across the city."

  return (
    <div className="whitespace-pre-wrap">
      {fullText}
      <span className="animate-pulse">|</span>
    </div>
  )
}

export default function HomePage() {
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setNavBg(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav
        className={`fixed z-50 bg-black w-full left-0 top-0 md:max-w-7xl md:w-[98vw] md:left-1/2 md:-translate-x-1/2 md:top-6 md:rounded-2xl transition-all duration-300 ${
          navBg ? 'shadow-[0_0_20px_rgba(255,255,255,0.1)]' : ''
        }`}
      >
        <div className="px-8 mx-auto">
          <div className="flex flex-row items-center h-12 gap-x-6 whitespace-nowrap justify-between">
            {/* Logo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center flex-shrink-0 focus:outline-none"
              aria-label="Scroll to top"
            >
              <Image src="/logo-sidebar.png" alt="Cench AI Logo" width={18} height={18} className="mr-4 brightness-0 invert" />
              <h1 className="text-lg font-bold text-white">Cench AI</h1>
            </button>
            {/* Nav links */}
            <div className="hidden md:flex flex-row items-center gap-x-8">
              <Link href="#edit-with-natural-language" className="text-white hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium">
                  How It Works
                </Link>
              <Link href="#edit-with-natural-language" className="text-white hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium">
                  Features
                </Link>

              <Link href="/enterprise" className="text-white hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium">
                  Enterprise
                </Link>
              <Link href="/help" className="text-white hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium">
                  Help
                </Link>
              <Link href="/careers" className="text-white hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium">
                  Careers
                </Link>
            </div>
            {/* Auth Buttons */}
            <div className="flex flex-row items-center gap-x-4">
              <Link href="/signup">
                <Button className="bg-black text-white rounded-full font-bold px-5 py-2 shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                  Get Access <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-start justify-start px-8 relative pt-16 bg-hero-new">
        <div className="relative text-left z-20 pt-4">
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white mb-6">
            The AI<br />Video<br />Editor
          </h1>
        </div>
      </section>

      {/* New Section with back7 background */}
      <section className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 relative bg-back7">
        <div className="relative max-w-6xl mx-auto text-center z-20 pt-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Never Hire An Editor Again
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto text-center z-20 pb-32">
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto -ml-48">
            Edit my <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              <CyclingText />
            </span>
          </p>
        </div>
      </section>





      {/* New Section with back5 background */}
      <section id="edit-with-natural-language" className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 relative bg-back5">
        <div className="relative max-w-6xl mx-auto text-center z-20 pt-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Edit With Natural Language
          </h2>
        </div>
        <div className="relative z-20 pb-32 flex justify-end">
          <div className="text-lg text-white max-w-lg text-left">
            <TypingText />
          </div>
        </div>
      </section>

      {/* AI editor that learns your creative style Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-start gap-16">
            <div className="flex flex-col items-start justify-start pt-2 pr-8">
              <Image src="/logo-sidebar.png" alt="Cench AI Logo" width={80} height={80} className="brightness-0 invert" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 flex-1">
                             {/* Get Started */}
               <div>
                 <h4 className="text-sm font-semibold mb-4 tracking-widest text-left uppercase text-gray-300">Get Started</h4>
                 <ul className="space-y-2 text-gray-400 text-left">
                   <li>Get Access</li>
                   <li>Talk to Sales</li>
                 </ul>
               </div>
               {/* Solutions */}
               <div>
                 <h4 className="text-sm font-semibold mb-4 tracking-widest text-left uppercase text-gray-300">Solutions</h4>
                 <ul className="space-y-2 text-gray-400 text-left">
                   <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                   <li><Link href="#edit-with-natural-language" className="hover:text-white">Features</Link></li>

                 </ul>
               </div>
               {/* Resources */}
               <div>
                 <h4 className="text-sm font-semibold mb-4 tracking-widest text-left uppercase text-gray-300">Resources</h4>
                 <ul className="space-y-2 text-gray-400 text-left">
                   <li>Careers</li>
                   <li>Help Center</li>
                   <li>Enterprise</li>
                 </ul>
               </div>
               {/* Legal */}
               <div>
                 <h4 className="text-sm font-semibold mb-4 tracking-widest text-left uppercase text-gray-300">Legal</h4>
                 <ul className="space-y-2 text-gray-400 text-left">
                   <li>Privacy Policy</li>
                   <li>Terms of Service</li>
                   <li>Marketing</li>
                 </ul>
               </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
            <p className="text-gray-400">&copy; 2024 Cench AI. All rights reserved.</p>

          </div>
        </div>
      </footer>
    </div>
  )
}

function AIResponseBox() {
  return (
    <>
      <div className="w-full bg-gray-50 rounded-lg shadow px-6 py-4 text-base text-gray-700 border border-gray-200 mb-2">
        Sure, here is your personal statement using this Common App prompt:
      </div>
      <div className="w-full h-32 bg-gray-200 rounded-lg mt-2 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-200/60 flex items-center justify-center">
          <span className="text-gray-400 text-lg font-medium select-none">Essay content blurred for privacy</span>
        </div>
      </div>
    </>
  )
}

 