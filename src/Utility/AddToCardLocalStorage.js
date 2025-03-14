

const getAddToLocalStorage=()=>{
    const addToLocalCard=localStorage.getItem('add-card');
    if(addToLocalCard){
        return JSON.parse(addToLocalCard)
    }
    return []
}
const saveCardLocalStorage=card=>{
    const saveCard=JSON.stringify(card)
    localStorage.setItem('add-card',saveCard)
}
const addCardLocalStorage=id=>{
    const card=getAddToLocalStorage()
    card.push(id)
    saveCardLocalStorage(card)

}
const removeCardToLocalStorage=id=>{
    const  card=getAddToLocalStorage();
    const removeCard=card.filter(cardId=>cardId!==id)
    saveCardLocalStorage(removeCard)
}
const handleRemoveAllLocalData=(name)=>{
 localStorage.removeItem(name)
}
export{addCardLocalStorage,getAddToLocalStorage,removeCardToLocalStorage,handleRemoveAllLocalData}