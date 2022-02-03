import React from "react";
import Wish from "./Wish";

const WishList = ({ wishes, setWishes }) => {
    return(
        <div className="wish-container">
            <ul className="wish-list">
                {wishes.map((wish) => (
                    <Wish 
                        wishes={wishes}
                        setWishes={setWishes} 
                        wish={wish}   
                        wish_text={wish.text}
                        wish_key={wish.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default WishList;