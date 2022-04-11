import React,{useState,useContext}from 'react';
import Popup from './Popup';
import {AllMenuContext} from "./Menus"
import AddToCart from './AddToCart';


function SpecialDishes(props) {
  console.log(props.specialMenu)
  let [showPopup,setShowPopup]=useState(false)
  let [currentDish,setCurrentDish]=useState('')
  let [addToCartItem,setAddToCartItem]=useState([])
 
  const allMenus=useContext(AllMenuContext)
  let maxspecialMenu=8;
  let specialsMenu= allMenus.map((menuItem,index)=>{
    if(index<=maxspecialMenu){
      
    return(
      <li>
        <a href="javaScript:;" onClick={()=>showPopupHandler(menuItem.strMeal)}>
        <img className='border-radius' src={menuItem.strMealThumb}/>
        <h3>{menuItem.strMeal}</h3>
        </a>
      </li>
    )} 
  })
  function showPopupHandler(dishName){
    
setShowPopup(true)
setCurrentDish(dishName)
  }
 function closePopupHandler(){
    setShowPopup(false)
  }
  function addToCartHandler(addToCartImg,addToCartTitle){
    
    setAddToCartItem(
      [...addToCartItem,
        {
          "img":addToCartImg,
          "title":addToCartTitle
        }
      ]
    )

  }
     
  return (
    <section className='special-dishes'>
      {showPopup && <Popup closePopup={closePopupHandler} currentDish={currentDish} allDishes={ allMenus} addToCartHandler={addToCartHandler}></Popup>}
        <div className='container'>
          <AddToCart addToCartItem={addToCartItem} />
            <div className='special-dishes-content text-center'>
        <h2>Our Special Dishes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat a suscipit molestiae. Nulla unde natus obcaecati, est totam vitae id quia blanditiis fugit? Voluptate, obcaecati? Distinctio sequi dicta quibusdam.</p>
        <div className='special-dishes-list'>
          <ul className='flex flex-wrap gap'> {specialsMenu}</ul>
            
          </div>
    </div></div></section>
  )
}

export default SpecialDishes;