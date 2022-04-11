function AddToCart({addToCartItem}){
    let addToCartResult=addToCartItem.map((item)=>{
        return(
            <div>
              <img src={item.img}/>
            <h5>{item.title}</h5>  
            </div>
        )

    })
    return(<div className="add-to-cart-wraapper">
        <div className="add-to-cart-item">
            <h6>Your Cart</h6>
           {addToCartResult}

        </div></div>
    )
}
export default AddToCart;