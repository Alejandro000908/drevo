import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible] as const
}

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const offset = (scrolled - elementTop) * speed
      
      element.style.transform = `translateY(${offset}px)`
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [speed])

  return ref
}

export const useStaggerAnimation = (delay: number = 100) => {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          const children = element.children
          Array.from(children).forEach((child, index) => {
            (child as HTMLElement).style.animationDelay = `${index * delay}ms`
          })
          
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  return [ref, isVisible] as const
}
