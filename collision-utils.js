function checkCoinCollision(a, b){
    if(a.x + a.size * 0.6 > (b.x + (b.size * 0.4)) &&
        a.x + a.size * 0.4  < b.x + (b.size * 0.6) &&
        a.y < b.y + b.size * 0.5 &&
        a.y + a.size > b.y
        ){
            return true
        } else {
            return false
        }
    }

function checkGoombaCollision(hero, goomba){
    if(hero.x + hero.size * 0.5 > goomba.x &&
        hero.x < goomba.x + goomba.size/2 &&
        hero.y + hero.size > hero.y
        ) {
            return true
        }else {
            return false
        }
}   

function checkHeroWins(hero){
    if(hero.y < hero.startY - 1){
        return true
    } else {
        
    }


}

// function checkCoinCollision(a, b){
//     if(a.x + a.size * 0.7 > b.x &&
//         a.x + a.size * 0.3  < b.x + b.size &&
//         a.y < b.y + b.size * 0.8 &&
//         a.y + a.size > b.y
//         ){
//             return true
//         } else {
//             return false
//         }
//     }

