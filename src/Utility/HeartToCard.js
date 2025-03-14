const getHeardCardAdd=()=>{
    const addHeardCard=localStorage.getItem('add-heard');
    if(addHeardCard){
        return JSON.parse(addHeardCard)
    }
    return []
}

// save heardCard
const saveHeardCard=card=>{
    const heardCardSave=JSON.stringify(card);
    localStorage.setItem('add-heard',heardCardSave)
};

// add card heard
const storageAddCard=cardId=>{
    const card=getHeardCardAdd();
    card.push(cardId);
    saveHeardCard(card)
}
// remove heard card
const removeHeardCard=Id=>{
    const removeHeard=getHeardCardAdd();
    const storageRemoveCard=removeHeard.filter(heard=>heard!==parseInt(Id));
    saveHeardCard(storageRemoveCard)
}
export { getHeardCardAdd,storageAddCard,removeHeardCard}