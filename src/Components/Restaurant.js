import { useState } from 'react'
import "./Style.css"
import Menu from './menuaApp'
import MenuCard from './menuCard'

const Restaurant = () => {
    const [menuData, setmenudata]= useState(Menu);
    const filteritem=(category)=>{
      const updateList = Menu.filter((curElem)=>{
        return curElem.category===category
      })
      setmenudata(updateList)
    }
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className='btn-group__item'
         onClick={()=>filteritem("breakfast")}>
          Breakfast</button>
        <button className='btn-group__item'onClick={()=>filteritem("lunch")}>
          Lunch</button>
        <button className='btn-group__item'onClick={()=>filteritem("evening")}>
          Evening</button>
        <button className='btn-group__item'onClick={()=>filteritem("dinner")}>
          Dinner</button>
        <button className='btn-group__item' onClick={()=>setmenudata(Menu )}>
          All</button>
      </div>
    </nav>
      <MenuCard menuData={menuData}/>

    </>
  )
}

export default Restaurant
