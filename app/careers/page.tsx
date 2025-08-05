"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function CareersPage() {
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
        className={`fixed z-50 transition-all duration-300
          ${navBg
            ? 'bg-white border-b border-gray-200 shadow-lg'
            : 'bg-transparent border-transparent shadow-none'
          }
          w-full left-0 top-0
          md:max-w-7xl md:w-[98vw] md:left-1/2 md:-translate-x-1/2 md:top-6 md:rounded-2xl
        `}
      >
        <div className="px-8 mx-auto">
          <div className="flex flex-row items-center h-12 gap-x-6 whitespace-nowrap justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 focus:outline-none">
              <Image src="/logo-sidebar.png" alt="Cench AI Logo" width={18} height={18} className={`mr-4 ${navBg ? 'brightness-0' : 'brightness-0 invert'}`} />
              <h1 className={`text-lg font-bold ${navBg ? 'text-black' : 'text-white'}`}>Cench AI</h1>
            </Link>
            {/* Nav links */}
            <div className="hidden md:flex flex-row items-center gap-x-8">
              <Link href="/#how-it-works" className={`${navBg ? 'text-black' : 'text-white'} hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium`}>
                  How It Works
                </Link>
              <Link href="/#edit-with-natural-language" className={`${navBg ? 'text-black' : 'text-white'} hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium`}>
                  Features
                </Link>

              <Link href="/enterprise" className={`${navBg ? 'text-black' : 'text-white'} hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium`}>
                  Enterprise
                </Link>
              <Link href="/help" className={`${navBg ? 'text-black' : 'text-white'} hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium`}>
                  Help
                </Link>
              <Link href="/careers" className={`${navBg ? 'text-black' : 'text-white'} hover:underline hover:underline-offset-4 px-3 py-2 text-sm font-medium`}>
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

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our careers page is currently in development. We're excited to share opportunities to join our team soon.
          </p>
          <div className="flex justify-center">
            <Link href="/">
              <Button className="bg-white text-black rounded-full font-bold px-8 py-3 shadow-md hover:scale-105 hover:bg-white transition-transform flex items-center gap-2">
                Back to Home <ArrowUpRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 