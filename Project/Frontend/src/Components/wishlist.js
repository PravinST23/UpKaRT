import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './wishlist.css';
import Navbar from './Navbar';
import { RiCloseCircleFill } from 'react-icons/ri';
import { removeFromWishlist } from './WishlistActions';
import './cart.css';

const Wishlist   = () => {
  const wishlist = useSelector(state => state.wishlist);
  const [quantities, setQuantities] = useState(wishlist.map(item => 1));
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);

    const updatedQuantities = [...quantities];
    updatedQuantities.splice(index, 1);

    setQuantities(updatedQuantities);
    dispatch(removeFromWishlist(wishlist[index].id));
  };

  return (
    <div className="wishlist">
      <Navbar />
      <div className="wishlistPage">
        <h1 className="pageTitle">Wishlist</h1>
        <div className="wishlistItems">
        {wishlist.map((item, index) => (
          <div className="cartItem" key={index}>
            <div className="removeIcon" onClick={() => handleRemoveItem(index)}>
              <RiCloseCircleFill />
            </div>
              <div
                className="wishlistItemImage"
                style={{ backgroundImage: `url(data:image/jpeg;base64,${item.image})` }}
              ></div>
              <div className="wishlistItemDetails">
                <h2 className="wishlistItemName">{item.name}</h2>
                <p className="wishlistItemPrice">₹ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
