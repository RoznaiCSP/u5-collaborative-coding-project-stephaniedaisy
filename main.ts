function chooseHero () {
    // change sprite later to agree with Daisy 
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(10, 59)
    while (mySprite.x < 75) {
        mySprite.x += 17
        pause(500)
    }
    pause(5000)
    for (let index = 0; index < 8; index++) {
        mySprite.x += 17
        pause(500)
    }
    mySprite2 = sprites.create(img`
        . . . . . . 5 2 2 5 . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f c 5 2 2 5 c f . . . . 
        . . . f c c c c c c c c f . . . 
        . . . f c c f f f f c c f . . . 
        . . . f c f f d d f f c f . . . 
        . . f c f d f d d f d f c f . . 
        . . f c f d 3 d d 3 d f c f . . 
        . . f c c f d d d d f c c f . . 
        . f c c f 8 f f f f 8 f c c f . 
        . . f f 8 8 8 8 8 8 8 8 f f . 3 
        . . f 2 d f 8 8 8 8 f d 2 f . . 
        . . . f f 8 8 8 8 8 8 f f . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . a 2 . . 2 a . . . . . 
        `, SpriteKind.Player)
    mySprite2.setPosition(10, 59)
    while (mySprite2.x < 75) {
        mySprite2.x += 17
        pause(500)
    }
    pause(5000)
    for (let index = 0; index < 8; index++) {
        mySprite2.x += 17
        pause(500)
    }
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.splash("Choose your hero!")
chooseHero()
story.showPlayerChoices("Sprite 1", "Sprite 2")
let heroName = game.askForString("What is the hero's name?")
