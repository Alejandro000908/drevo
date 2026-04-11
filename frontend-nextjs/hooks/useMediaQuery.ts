'use client'

import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Set initial value
    checkMobile()

    // Add resize listener with debounce
    let timeoutId: NodeJS.Timeout
    const debouncedCheck = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 150)
    }

    window.addEventListener('resize', debouncedCheck, { passive: true })
    return () => {
      window.removeEventListener('resize', debouncedCheck)
      clearTimeout(timeoutId)
    }
  }, [breakpoint])

  return isMobile
}

export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
