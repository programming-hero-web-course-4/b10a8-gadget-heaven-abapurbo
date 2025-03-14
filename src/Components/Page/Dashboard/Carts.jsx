import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from './Dashboard';
import Cart from './Cart';
import { getAddToLocalStorage, handleRemoveAllLocalData, removeCardToLocalStorage } from '../../../Utility/AddToCardLocalStorage';
import { TbArrowsSort } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { StorageDataContext } from '../../heardAndAddCardContext/AddCardProvider';
import { TbRosetteDiscountCheck } from "react-icons/tb";
const Carts = ({ active }) => {
  let localData = getAddToLocalStorage()
  const storageData = useContext(StorageDataContext)
  const { handleDecrement, disable } = storageData
  const carts = useContext(CardContext)

  const [addCart, setAddCart] = useState([]);

  let addPrice;
  function totalPrice(productData) {
    addPrice = []
    for (const id of productData) {
      const cartPrice = carts.find(cart => cart.product_id === parseInt(id))
      if (cartPrice) {
        addPrice.push(cartPrice.price)
      }
    }

  }
  // call this totalPrice

  totalPrice([...localData])

  let cartTotalPrice = 0;
  for (const price of addPrice) {
    cartTotalPrice += price
  }

  useEffect(() => {
    const localAddItems = getAddToLocalStorage()
    const saveAddItem = []
    for (const id of localAddItems) {

      const remainingCard = carts.find(cart => cart.product_id === parseInt(id))

      if (remainingCard) {

        saveAddItem.push(remainingCard)

      }

    }
    setAddCart(saveAddItem)


  }, [carts])
  //    successful remove your card then toast popup
  const popup = () => toast.success('Your card remove successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const sortPopup = () => toast.success("Sort the products by price in descending order ", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  })
  //  item decending order sorting cart
  const handleDescendingOrderSortCart = (value) => {
    if(value>0){
      sortPopup()
      const sortCart = [...addCart].sort((a, b) => (b.price - a.price));
      setAddCart(sortCart)
    }
    
  }
  const handleRemoveProduct = cartId => {
    popup()
    const favoriteData = addCart.filter(addCartId => addCartId.product_id !== cartId)
    setAddCart(favoriteData)
    removeCardToLocalStorage(cartId)
  }
  const navigate = useNavigate()
  const handleRemoveData = () => {
    handleDecrement(0)
  }
  const handleRedirectHomePage = () => {
    handleRemoveAllLocalData('add-card')
    navigate('/')
  }
  console.log('isative',disable)
  return (

    <div className=' pt-10 pb-28'>

      <div className='px-10  mb-7 flex justify-between  items-center'>
        <div >
          <h1 className='text-3xl font-semibold' >Cart</h1>
        </div>
        <div>
          <div className='space-x-3.5 flex items-center'>
            <span className='text-2xl font-bold mr-6'>Total Price:${cartTotalPrice.toFixed(3)}</span>
            <button onClick={() => handleDescendingOrderSortCart(addCart.length)} className='border-2 border-[#9538E2] text-[#9538E2] btn btn-outline rounded-3xl hover:text-white hover:bg-[#9538E2]  text-xl font-semibold'>Sort By Price <TbArrowsSort /></button>
            <button disabled={disable} className='btn btn-outline rounded-3xl text-[#9538E2] hover:text-white hover:bg-[#9538E2]   text-xl font-semibold' onClick={() => {
              document.getElementById('purchase-modal').showModal();
              handleRemoveData()
            }

            }>Purchase</button>
          </div>
        </div>
      </div>


      <div className='px-10 space-y-3 '>
        {
          addCart.map(cart => <Cart key={cart.product_id} cart={cart} handleRemoveProduct={handleRemoveProduct} active={active}></Cart>)
        }
      </div>


      {/* this is Purchase click and show modal */}
      <dialog id="purchase-modal" className="modal">
        <div className="modal-box ">
          <div className='flex flex-col justify-center items-center '>
            <TbRosetteDiscountCheck className='text-7xl text-green-600' />
            <h1 className='text-3xl font-semibold text-black'>Payment Successfully</h1>
            <div className='text-xl mt-4 text-gray-400 font-semibold text-center'>
              <p>Thanks for purchasing</p>
              <p>Total:${cartTotalPrice.toFixed(3)}</p>
            </div>
          </div>

          <div className="modal-action flex flex-row justify-center  ">
            <form method="dialog" >
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => handleRedirectHomePage()} className="btn w-76 text-xl font-semibold rounded-3xl  bg-gray-300">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>

  );
};

export default Carts;