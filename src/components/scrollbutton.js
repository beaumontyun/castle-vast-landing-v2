'use client'
import { useEffect, useState, useCallback } from 'react'

export default function scrolltotop() {
  const [isVisible, setIsVisible] = useState(false)

  const onScroll = useCallback(event => {
    if (window.scrollY < 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="fixed bottom-10 right-14 z-30">
    
        <button
          type="button"
          onClick={scrollToTop}
          className=''>
          <svg className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m13 5.586l-4.707 4.707a.999.999 0 1 0 1.414 1.414L12 9.414V17a1 1 0 1 0 2 0V9.414l2.293 2.293a.997.997 0 0 0 1.414 0a.999.999 0 0 0 0-1.414L13 5.586z" /></svg>
        </button>
    
    </div>
  )
}