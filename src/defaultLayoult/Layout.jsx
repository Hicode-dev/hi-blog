import React from 'react'
import MainNav from '../component/MainNav'

const Layout = ({children}) => {
  return (
 <main>
       <MainNav />
    <div className='min-w-[100px] mx-auto flex justify-center itemsen'>
      {children}
    </div>
 </main>
  )
}

export default Layout
