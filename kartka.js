import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","Christmas.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","muzyyka111.mp3")

add([
    sprite("kartka")
])


const gwiazda = add([
    sprite("gwiazda"),
    pos(0,30)
])


onMouseRelease(()=>play("muzyka"))

let wprawo = true

onUpdate(()=>{
    if(wprawo && gwiazda.pos.x < 550)
         gwiazda.pos.x += 1
    
    else if(!wprawo && gwiazda.pos.x > 50)
        gwiazda.pos.x -= 1

        else wprawo ^=true

})