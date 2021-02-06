import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation(props) {
  let links = ['Reviews', 'FAQ', 'Contact', 'Help']
  const router = useRouter()

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const navbarToggle = navbar.querySelector('.navbar-toggle')

    function openMobileNavbar() {
      navbar.classList.add('opened')
      navbarToggle.setAttribute('aria-label', 'Close navigation menu.')
    }

    function closeMobileNavbar() {
      navbar.classList.remove('opened')
      navbarToggle.setAttribute('aria-label', 'Open navigation menu.')
    }

    navbarToggle.addEventListener('click', (e) => {
      e.preventDefault()
      if (navbar.classList.contains('opened')) {
        closeMobileNavbar()
      } else {
        openMobileNavbar()
      }
    })

    const navbarLinks = navbar.querySelector('.navbar-links')
    const navbarLinksContainer = navbar.querySelector('.navbar-links')

    navbarLinksContainer.addEventListener('click', (e) => {
      e.stopPropagation()
    })

    navbarLinks.addEventListener('click', closeMobileNavbar)
  }, [])

  return (
    <nav id='navbar' className='flex justify-between items-center border-b p-4 sticky top-0 bg-gray-50'>

      <div className="w-1/3">
        <ul className='min-w-90 md:min-w-full navbar-links flex flex-auto justify-between'>
          {links.map((value, index) => {
            let l = `/${value.toLowerCase()}`
            return (
              <li className='navbar-item' key={index}>
                <Link href={l}>
                  <a className={`navbar-link ${router.pathname === l ? 'active' : ''}`}>{value}</a>
                </Link>
              </li>
            )
          })}
        </ul>

        <button type='button' className='navbar-toggle visible' aria-label='Open navigation menu'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
      </div>

      <Link href='/'>
        <a className='home-link w-4/12 flex justify-center'>
          <Image
            src='/icons/logo.png'
            alt='FairRate Logo'
            width={100}
            height={67}
          />
        </a>
      </Link>

      <Link href='/account'>
        <a className='home-link w-4/12 flex justify-end'>
          My Account
          </a>
      </Link>
    </nav>
  )
}
