
const loadCoinImages = (objectsImg) => {
    const coinImages = Array.from({ length: 2}, (el, i) => {
        if(i < 4){
            return objectsImg.get(i * 70, 0, 70, 70)
        } else {
            return objectsImg.get(0 * 70, 0, 70, 70)
        }
        
    })  
    return coinImages 
}

const loadMarioImages = (marioImg) => {
    
    const runImages = Array.from({length: 15}, (el, i) => {
        return marioImg.get(i * 70, 0, 70, 70)
    })
    

    return runImages
}

const loadGoombaImages = ( goombaImg ) => {
    
    const goombaImages = Array.from({ length: 2 }, (el, i) => {
        return goombaImg.get( i * 300, 0, 300, 300)
    })
    return goombaImages
}


