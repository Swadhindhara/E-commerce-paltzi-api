import React from 'react'
import logo from './../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { LucideShoppingBag, SearchIcon, User2 } from 'lucide-react'

const Header = () => {
  return (
    <>
      <div className="header_container px-4">
        <div className="container mx-auto">
          <div className="header py-5 lg:py-4 flex items-center justify-between">
            <div className="left">
              <Link to={'/'}><img className='w-[160px] md:w-52' src={logo} alt="" /></Link>
            </div>
            <div className="right flex items-center gap-4">
              <Link to={'/search'}>
                <SearchIcon />
              </Link>
              <Link to={'/profile'}>
                <User2 />
              </Link>
              <Link to={'/cart'}>
                <LucideShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header