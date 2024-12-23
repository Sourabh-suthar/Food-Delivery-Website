import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const[menu,setmenu] =useState("menu")
  const [mobileItem, setMobileItem] = useState(false)
  const Clicked = () => {
    setMobileItem(!mobileItem)
  }
  const{getTotalCartAmount} =useContext(StoreContext);
  
  return (
    <div className='navbar' >
      
        <Link to='/' > <img src={assets.logo} id='logo' className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setmenu('Home')} className={menu==='Home'? "active":""} >Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu('Menu')} className={menu==='Menu'? "active":""}>Menu</a>
            <a href='#app-downlond' onClick={()=>setmenu('Mobile-App')} className={menu==='Mobile-App'? "active":""} >Mobile-App</a>
            <a href='#footer' onClick={()=>setmenu('Contact us')} className={menu==='Contact us'? "active":""}>Contact us</a>
        </ul>
      
        <div className="navbar-right">
          <SearchIcon className='searchicon'/>
          <div className="navbar-cart-icons">
            <Link to='/cart' className='carticon' ><ShoppingCartIcon/> </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
            <button onClick={()=>setShowLogin(true)} >Sign in</button>
            <span className='menu-icon' onClick={Clicked}><MenuIcon  sx={{ color:'#49557e' }}  /></span>
            <div className={mobileItem?'menu-icon':'icon'}>
              <div className='sidebar'>
              <Link to='/' onClick={Clicked} >Home</Link>
            <a href='#explore-menu' onClick={Clicked} >Menu</a>
            <a href='#app-downlond'  onClick={Clicked}>Mobile-App</a>
            <a href='#footer' onClick={Clicked}>Contact us</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar