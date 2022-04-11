import React from 'react'

function Pageination(props) {
    let numberOfPage=[]
    for (let i=1;i<=Math.ceil(props.filteredDishes.length/props.itemsPerPage);i++){
        numberOfPage.push(i)
    }
    function showDishes(event){
props.setCurrentPage(event.target.id)
    }
    let pages=numberOfPage.map((pageNumber)=>{
        return(
            <li id={pageNumber}onClick={showDishes}>{pageNumber}</li>
        )
    })
  return (<section>
    <ul className='pagination flex'>
        <li>{pages}</li>
    </ul></section>
  )
}

export default Pageination