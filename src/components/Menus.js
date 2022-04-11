import React,{useState,useEffect} from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from"./FilteredDishes";
import Loader from "./Loader";
import Header from "./Header";



export const AllMenuContext = React.createContext()
function Menus(){
    let [menu,setMenu]=useState([]);
    let [menuCategory,setMenuCategory]=useState([]);
    let [loading,setLoading]=useState(true)
    let [singleDish,setSingleDish]=useState([])
    async function getAllTheMenu(){
        let API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    const respose=await fetch(API_URL);
    let data=await respose.json()
    setMenu(data.meals)
    setLoading(false)
    }
    async function getAllTheCategory(){
  
      let API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
  const respose=await fetch(API_URL);
  let categoryData=await respose.json()
  setMenuCategory(categoryData.categories)
  }
  async function getOnlyOneDish(){
  
    let API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
const respose=await fetch(API_URL);
let singleDishData=await respose.json()
setSingleDish(singleDishData.meals)
}

    useEffect(() => {
      
    getAllTheMenu()
    getAllTheCategory()
    getOnlyOneDish()

    }, [])
  
    
    return(
     <div>
       
       <Header/>
       
       <Hero/>
      
         <AllMenuContext.Provider value={menu}>
         {!loading ?<SpecialDishes /> :<Loader/>}
         {!loading ? <FilteredDishes allMenuCategory={menuCategory} allMenus={menu} singleDish={singleDish} setSingleDish={setSingleDish}/>: null}
      
        </AllMenuContext.Provider>
      
     </div>
    );
}

export default Menus;