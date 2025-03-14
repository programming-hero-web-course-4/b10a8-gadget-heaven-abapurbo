import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from './Dashboard';
import { getHeardCardAdd, removeHeardCard } from '../../../Utility/HeartToCard';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';


const Wishlist = ({ active }) => {
   
    const data = useContext(CardContext)
    const [heardCards, setHeardCards] = useState([]);
    useEffect(() => {
        const localHeardData = getHeardCardAdd();
        const saveHeard = []
        for (const heardId of localHeardData) {
            const remainingHeardCard = [...data].find(dataId => dataId.product_id === parseInt(heardId));
            if (remainingHeardCard) {
                saveHeard.push(remainingHeardCard)
            }
        }
        setHeardCards(saveHeard)

    }, [data])
    const heardRemove = () => toast.success('Your card remove successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    const handleHeardRemoveCard = id => {
        heardRemove()
        const removeCard = heardCards.filter(heardCard => heardCard.product_id !== parseInt(id))
        setHeardCards(removeCard)
        removeHeardCard(id)
    }
    return (
        <div className='pt-10 pb-36 '>

            <div className='px-10 space-y-3 '>
                {
                    heardCards.length > 0 ? <h1 className='text-3xl my-6 font-semibold'>Wishlist</h1> :<h1  className='text-4xl font-bold text-center pt-9'>Not Found</h1>
                }
                {
                    heardCards.map(cart => <Cart key={cart.product_id} cart={cart} handleHeardRemoveCard={handleHeardRemoveCard} active={active}></Cart>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Wishlist;