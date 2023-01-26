function chooseHero () {
    // change sprite later to agree with Daisy 
    mySprite = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f 8 8 8 8 8 8 f c f . 
        f f 8 b f 8 8 f b 8 f f . 
        . f 8 1 f 8 8 f 1 8 f . . 
        . f f 8 8 8 8 8 8 f f . . 
        . f f f 4 4 4 4 f f f . . 
        5 8 f 8 8 5 5 8 8 f 8 5 . 
        8 5 f c 8 5 5 8 c f 5 8 . 
        e e f c c 8 8 c c f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
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
