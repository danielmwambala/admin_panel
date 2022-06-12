import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChartLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { avatart } from '../data/avatar.jpg'
import { Cart, Chart, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) =>(
  <TooltipComponent content={{title}} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 Hove:bg-light-gray">
      <span style={{ background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">{icon}</span>
    </button>
  </TooltipComponent>
)

function Navbar() {         
   const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" color="blue" icon={<AiOutlineMenu />} customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}/>
    </div>
  )
}

export default Navbar