import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'

const DashboardNavbar = () => {
  return (
   
    <div className="flex justify-between items-center w-full overflow-hidden sticky top-0 px-5 z-[1000] bg-primary9 ">
        <h2 className="font-semibold ">Welcome Winifred,</h2>
        <div>
          <ThemeToggleButton />
        </div>
      </div>
  )
}

export default DashboardNavbar