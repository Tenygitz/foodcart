import React,{useState} from 'react';
import Pageination from './Pageination';

function FilteredDishes(props) {
   console.log(props.allMenus)
   let[allMenu,setallMenu]=useState(props.allMenus)
   let[filteredDishes,setFilteredDishes]=useState([])
   let[activeDish,setActiveDish]=useState("Beef")
   let[currentPage,setCurrentPage]=useState(1)
   let[itemsPerPage,setItemsPerPaage]=useState(4)
   let indexOfLastDish=currentPage * itemsPerPage;
   let indexOfFirstDish=indexOfLastDish - itemsPerPage;
   let showTheseFilterDish=filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
   let maxItem=8;
   let singleDishItem=props.singleDish.map((item,index)=>{
       if(index<maxItem){
        return(
            <li>
                  <img src={item.strMealThumb}/>
                  <h2>{item.strMeal}</h2>
            </li>
    
        )
       }
  
   })
   function showFiltredDisheshandler(category){
       props.setSingleDish([])
    setActiveDish(category)
     let FilteredDishesAre=allMenu.filter((item)=>{
         
        return item.strCategory===category
     

       }).map((item)=>{
           return(
               <li>
                     <img src={item.strMealThumb}/>
                     <h2>{item.strMeal}</h2>
               </li>

           )
       })
       setFilteredDishes( FilteredDishesAre)
   }
    let allCategoires=props.allMenuCategory.map((item)=>{
        return(
            <li className={item.strCategory==activeDish? "active":""}onClick={()=>{showFiltredDisheshandler(item.strCategory)}}>
                {item.strCategory}
            </li>
        )
    })
  return (
    <div className='filtered-dishes'>
        <div className='container'>
            <div children="text-center">
                <h2>Choose your dishes</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates quam quisquam odit at facere sint nulla aut saepe voluptatibus!</p>
            </div>
            <div className='Filtered-dishes'>
                <ul>
                    {allCategoires}
                </ul>
            </div>
            <div className='filtered-dishes-results'>
                <ul className='flex flex-wrap gap'>
                    {singleDishItem}
                {singleDishItem !=0 ||filteredDishes.length != 0 ?showTheseFilterDish:
                <div className="alert">
                    <h3>Sorry no item found</h3>
                    <h4>Please try other items</h4>
                    </div>}
                </ul>

            </div>
            <Pageination filteredDishes={filteredDishes} itemsPerPage={itemsPerPage}
            currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>

    </div>
  )
}

export default FilteredDishes;