import React,{useContext}from 'react';
import{AllMenuContext} from "./Menus"

function Popup({closePopup,currentDish,allDishes,addToCartHandler}) {
  const allMenus=useContext(AllMenuContext)
  console.log(allDishes)
  let dishDetails=allMenus.filter((menuItem)=>{
    return menuItem.strMeal==currentDish}).map((item)=>{
      return(
        <div className='popup-content-data'>
          <div className='popup-header'>
          <img src={item.strMealThumb}/>
          <h4 className='popup-header-category'>{item.strCategory}</h4>
          </div>
         
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className='dish-ingredients flex'>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>

          </ul>
          <button onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}>Order Now</button>
            <h4 className='popup-close'onClick={closePopup}>Close</h4>
        </div>
      )
    })

  
  return (
    <div className='popup'>
        <div className='popup-content'>
          {dishDetails}
            
           
        </div>
    </div>
  )
}

export default Popup