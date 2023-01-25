function chooseHero () {
    // change sprite later to agree with Daisy 
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f e e f f f . . . . 
        . . . f f f e e e e f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e e e e e e e e f f . . 
        . . f e e e e e e e e e e f . . 
        . . f e f 8 8 f f 8 8 f e f . . 
        . f f e 8 b f 8 8 f b 8 e f f . 
        . f e e 8 1 f 8 8 f 1 8 e e f . 
        . . f e 8 8 8 4 4 8 8 8 e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . f 8 f 6 f 5 5 f 6 f 8 f . . 
        . . f f f 6 8 f f 8 6 f f f . . 
        . . 4 4 f 6 8 6 6 8 6 f 4 4 . . 
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
    // change sprite later to agree with Daisy 
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f e e f f f . . . . 
        . . . f f f e e e e f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e e e e e e e e f f . . 
        . . f e e e e e e e e e e f . . 
        . . f e f 8 8 f f 8 8 f e f . . 
        . f f e 8 b f 8 8 f b 8 e f f . 
        . f e e 8 1 f 8 8 f 1 8 e e f . 
        . . f e 8 8 8 4 4 8 8 8 e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . f 8 f 6 f 5 5 f 6 f 8 f . . 
        . . f f f 6 8 f f 8 6 f f f . . 
        . . 4 4 f 6 8 6 6 8 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(10, 59)
    pause(100)
    mySprite2 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
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
