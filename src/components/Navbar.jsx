import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from '@mui/material';

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContexProvider';

const NavButton = ({ titleNavButton, customFunc, icon, color, dotColor}) => (
  <Tooltip title={titleNavButton} position="Bottom">
    <button type="button" onClick={customFunc} style={{ color }}
            className="relative text-x1 rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{ background: dotColor}}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </Tooltip>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, 
    setScreenSize, } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return() => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton titleNavButton="Menu"
                 customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                 color="blue"
                 icon={<AiOutlineMenu/>} 
       />
      <div className="flex">
        <NavButton titleNavButton="Carrinho"
                  customFunc={() => handleClick('cart')}
                  color="blue"
                  icon={<FiShoppingCart/>} 
        />
        <NavButton titleNavButton="Chat"
                  dotColor="#03C9D7"
                  customFunc={() => handleClick('chat')}
                  color="blue"
                  icon={<BsChatLeft/>}
        />
        <NavButton titleNavButton="Notificação"
                  dotColor="#03C9D7"
                  customFunc={() => handleClick('notification')}
                  color="blue"
                  icon={<RiNotification3Line/>} 
        />
        <Tooltip title="Perfil" position="Botton">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick('userProfile')}
          >
            <img src={avatar}
                className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Olá, </span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Bruno</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
          </div>
        </Tooltip>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar