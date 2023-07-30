import  { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened,setMenuOpened] = useState<boolean>(false)

  const getMenuStyle = (menuOpened:boolean) => {
    if (document.documentElement.clientWidth <= 800  && !menuOpened)
    {
      return {right:"-100%"}
    }
  }

  const onClickOutside: (event: MouseEvent) => void = () => {
    setMenuOpened(false)
  };

  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">
        <img src="./villagehub.png" className="img-logo" alt="logo" />
      <OutsideClickHandler onOutsideClick={onClickOutside}>
      <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
              <a href="">Contact</a>
            </button>
        </div>
      </OutsideClickHandler>
      <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
      </div>
    </div>
</section>
  )
}

export default Header


