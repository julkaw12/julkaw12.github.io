import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","Christmas.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","muzyyka111.mp3")

add([
    sprite("kartka")
])


add([
    sprite("gwiazda")
])


add([
    play("muzyka")
])