import React, { createContext, useEffect, useState } from 'react';
import { getAddToLocalStorage } from '../../Utility/AddToCardLocalStorage';
import { getHeardCardAdd } from '../../Utility/HeartToCard';
// import { addShoppingCard } from '../../Utility/Shoppingcard';



export const StorageDataContext = createContext(null)
const AddCardProvider = ({ children }) => {





    // shopping and heard icon add Product length
    const localData = getAddToLocalStorage()
    const [shoppingCard, setShoppingCard] = useState(localData.length < 1 ? null : localData.length)
    // card disable useState 
    const [disable, setDisable] = useState(true)
  

    useEffect(() => {
        if (shoppingCard ==null) {
            setDisable(true)
        }
        else if(localData==[]){
           setDisable(true)
        }
        else if(shoppingCard==0){
            setDisable(true)
        }
        else {

            setDisable(false)
        }
    }, [shoppingCard,localData])
    
    const handleIncrement = (id) => {
        const addCard = [...localData, id]
        setShoppingCard(addCard.length)
    }
    const handleDecrement = (id) => {
        const delate = [...localData]
        if (id == 0) {
            setShoppingCard(0)
        }
        else {
            const remainingDelate = delate.filter(delateId => delateId !== parseInt(id))
            setShoppingCard(remainingDelate.length)
        }


    }

    // heard card data add
    const localHeardCard = getHeardCardAdd()
    const [heard, setHeard] = useState(localHeardCard.length < 1 ? null : localHeardCard.length)

    const handleHeardIconIncrement = (id) => {
        const addHeardCard = [...localHeardCard, id];
        setHeard(addHeardCard.length)
    }
    const handleHeardIconDecrement = (id) => {
        const previousHeardData = [...localHeardCard];
        const removeHeardData = previousHeardData.filter(heardId => heardId !== id);
        setHeard(removeHeardData.length)
    }

    return (
        <div>
            <StorageDataContext.Provider value={{ shoppingCard, heard, disable, handleIncrement, handleDecrement, handleHeardIconIncrement, handleHeardIconDecrement }}>
                {children}
            </StorageDataContext.Provider>
        </div>
    );
};

export default AddCardProvider;