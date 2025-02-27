import React from "react";
function CartItem()
{
    return(<>
    <div className="cartItem">
        <img src="cartItem_Image"></img>
        <div className="cartItem_Name"></div>
        <div className="cartItem_Quantity"></div>
        <p className="cartItem_Price"/>
        <button className="cartItem_Close">Close</button>
    </div>
    </>);
}