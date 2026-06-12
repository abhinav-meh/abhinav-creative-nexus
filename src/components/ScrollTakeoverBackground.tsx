import { useEffect, useRef } from 'react'

export default function ScrollTakeoverBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrame = 0

    const updateBackground = () => {
      animationFrame = 0

      const hero = document.getElementById('home-hero')
      const background = backgroundRef.current

      if (!hero || !background) return

      const heroHeight = hero.offsetHeight || window.innerHeight
      const raw = window.scrollY / Math.max(heroHeight * 0.85, 1)
      const progress = Math.min(1, Math.max(0, raw))

      background.style.opacity = String(progress)
      background.style.transform = `scale(${0.9 + progress * 0.16})`
      background.style.filter = `blur(${18 - progress * 18}px)`
    }

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateBackground)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] bg-white"
      style={{
        opacity: 0,
        transform: 'scale(0.9)',
        filter: 'blur(18px)',
        transformOrigin: 'center top',
      }}
    />
  )
}
