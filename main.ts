function chooseSideKick (mySprite: Sprite) {
    // change sprite later to agree with Daisy 
    sideKick1 = sprites.create(img`
        . . . . . . f f f f f f . . . . 
        . . . . . f 6 6 f 5 f 6 f . . . 
        . . . . f 6 6 6 f f f 6 6 f . . 
        . . . f 6 6 6 6 6 f 6 6 6 6 f . 
        . . . f 6 6 6 f 6 6 6 6 f 6 f . 
        . . . f 6 6 6 6 f 6 6 f 6 6 f . 
        . . . f 5 5 6 6 6 6 6 6 5 5 f . 
        . . f f 6 6 6 f 6 6 6 6 6 f . . 
        . f 6 6 f 6 6 6 f f f f f . . . 
        f 6 f 6 6 f f 6 6 6 6 2 6 f . . 
        f f 6 f 6 6 f f f 6 6 2 6 6 f . 
        . . f 6 f 6 f f f 6 f f f f f f 
        . . f 6 6 f 6 f 6 f 5 5 5 5 5 f 
        . . f f 6 6 f 6 f 5 5 5 5 5 f f 
        . . . f 6 6 6 f 5 5 5 5 5 f f . 
        . . . . f f f f f f f f f f . . 
        `, SpriteKind.Player)
    scaling.scaleByPixels(sideKick1, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sideKick1.setPosition(10, 59)
    while (sideKick1.x < 75) {
        sideKick1.x += 17
        pause(500)
    }
    pause(5000)
    for (let index = 0; index < 8; index++) {
        sideKick1.x += 17
        pause(500)
    }
    sideKick2 = sprites.create(img`
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . 1 9 9 1 . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . f f 1 9 9 1 f f . 
        . . . . . . . . . f 1 1 f . . . 
        . . . . . . . . . 1 4 4 1 . . . 
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . . . 2 2 . . . . 
        . . . . . . . . . 1 2 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . 1 1 b 1 9 . . . . 
        . . . . . . 1 1 b 1 1 1 . . . . 
        . . . 1 1 1 1 b 1 1 9 1 . . . . 
        . . . 1 9 9 1 1 1 9 9 9 . . . . 
        . . . . . . e . . e . . . . . . 
        `, SpriteKind.Player)
    scaling.scaleByPixels(sideKick2, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    sideKick2.setPosition(10, 59)
    while (sideKick2.x < 75) {
        sideKick2.x += 17
        pause(500)
    }
    pause(5000)
    for (let index = 0; index < 8; index++) {
        sideKick2.x += 17
        pause(500)
    }
}
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
        . f 4 8 8 8 8 8 8 4 f . . 
        . f f 4 4 4 4 4 4 f f . . 
        5 8 f 8 8 5 5 8 8 f 8 5 . 
        8 5 f c 8 5 5 8 c f 5 8 . 
        e e f c c 8 8 c c f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Player)
    scaling.scaleByPixels(mySprite, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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
    scaling.scaleByPixels(mySprite2, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
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
let sideKick2: Sprite = null
let sideKick1: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b888886888888588888888888888b8888888888888
    8888888888888888888888888888888888688888888888b88888888888888888888888888888888888888888888888888888888888888888888888b888888688888588888888888888b8888888888888
    888888888888888888888888888888888868888888888888888888888888888888888888888888888888888888b888888888888888888888888888b888888688888588888888888888b8888888888888
    888888888888888888888888888888888868888888888b888888888888888888888888888888888888888888888888888888888888888888888888b888888888888588888888888888b8888888888888
    88888888888888888888888888888888886888888888b8888888888888888888888888888888888888888888888b88888888888888888888888888b888888868888588888888888888b8888888888888
    8888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888888888888888888888888888b888888868888588888888888888b8888888888888
    88888888888888888888888888888888868888888888888888888888888888888888888888888888888888888888b8888888888888888888888888b888888868888588888888888888b8888888888888
    888888888888888888888888888888888688888888b88888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
    88888888888888888888888888888888868888888b888888888888888888888888888888888888888888888888888b888888888888888888888888b888888886888588888888888888b8888888888888
    8888888888888888888888888888888868888888b88888888888888888888888888888888888888888888888888888b88888888888888888888888b888888886888588888888888888b8888888888888
    88888888888888888888888888888888688888bb8888888888888888888888888888888888888888888888888888888b8888888888888888888888b88888888868858888888888888858888888888888
    8888888888888888888888888888888868888bb88888888888888888888888888888888888888888888888888888888b8888888888888888888888b888888888688588888888888888b8888888888888
    888888888888888888888888888888886888bb8888888888888888888888888888888888888888888888888888888888b888888888888888888888b888888888688588888888888888b8888888888888
    88888888888888888888888888888888688b888888888888888888888888888888888888888888888888888888888888bb88888888888888888888b888888888668588888888888888b8888888888888
    8888888888888888888888888888888688b88888888888888888888888888888888888888888888888888888888888888bb8888888888888888888b88888888886858888888888888858888888888888
    88888888888888888888888888888886bb8888888888888888888888888888888888888888888888888888888888888888b8888888888888888888b888888888868b88888888888888b8888888888888
    88888888888888888888888888888886b888888888888888888888888888888888888888888888888888888888888886888b888888888888888888b888888888855b55888888888888b8888888888888
    8888888888888888888888888888886b88888888888888888888888888888888888888888888888888888888888888868888b88888888888888888b88888888555b5b555888888888858888888888888
    8888888888888888888888888888bb68888888888888888888888888888888888888888888888888888888888888888888888b888888888888888858888b88bbbb555bbbbb8b888888b8888888888888
    888888888888888888888888888bb85b8888888888888888888888888888888888888888888888888888888888888888688888b888888888888888b88885555bbb5555bbb55588888858888888888888
    88888888888888888888888888b8865588888888888888888888888888888888888888888888888888888888888888886888888bb8888888888888b8888b555555555555555b88888858888888888888
    888888888888888888888888bb555555b88888888888888888888888888888888888888888888888888888888888888888888888bb888888888888b88888bbb8b86688b88bb888888858888888888888
    88888888888888888888888bb8b55555555b888888888888888888888888888888888888888888888888888888888888868888888bb88888888888588888b5855586855585b888888858888888888888
    888888888888888888888bb88885555555b888888888888888888888888888888888888888888888888888888888888886888888888b8888888888b88888858b5b868b5b858888888858888888888888
    88888888888888888888b888888b55555b88888888888888888888888888888888888888888888888888888888888888886888888888bb88888888b88888858858868858858888888858888888888888
    888888888888888888bb8888888b55555b888888888888888888888888888888888888888888888888888888888888888868888888888bb8888888588888858858866858858888888858888888888888
    8888888888888888bb888888888555b55588888888888888888888888888888888888888888888888888888888888888886888888888888bb88888b88888858858886858858888888858888888888888
    888888888888888bb888888888855888558888888888888888888888888888888888888888888888888888888888888888868888888888888bb888588888858858886858858888888858888888888888
    8888888888888bb8888888888866888888888888888888888888888888888888888888888888888888888888888888888886888888888888888bb8588888858858886658858888888858888888888888
    8888888888bbb88888888888886888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888b5b8888858858886658858888888858888888888888
    888888888b8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888886688888888888888885bbb88858858888658858888888858888888888888
    88888888bb888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888588bbbb58858888658858888888858888888888888
    888888bb88888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888866888888888888888588888b5bb58888658858888888858888888888888
    8888bb8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888886888888888888888588888858b5bbb8658858888888858888888888888
    bbbb8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888885888888588588bbb5b858888888858888888888888
    888888888888888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888858888885b858888856b5bbb8888858888888888888
    8888888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888888588888855b5888885b5588bbbbb858888888888888
    88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888885888888b55555555555b888888885bbbbbbb888888
    88888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888885888888855555555555888888888b88888bbbbbbbb
    8888888888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888888588888888b55bbb55b6888888855b5588888888888
    8888888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888588888888888555888688888555b5b555888888888
    8888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888886688888888588888888888b5b88866b88bbbb555bbbbb8b88888
    8888888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668888888588888888888bbb888665555bbb5555bbb55588888
    888888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888858888888888855588886b555555555555555b88888
    8888888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866688888588888888888b5b888866bbb8b88888b88bb888888
    8888888888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888588888888888858888886b5855588855585b888888
    8888888888888888868888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666888b88888888888858888886658b5b888b5b858888888
    8888888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886655b55888888888858888886658858888858858888888
    888888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555b5b5558888888858888888658858888858858888888
    88888888888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88bbbb555bbbbb8b888858888888658858888858858888888
    888888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555bbb5555bbb555888858888888858858888858858888888
    88888888888886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b555555555555555b888858888888856858888858858888888
    888888888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8b88886b68bb88888b8888888856658888858858888888
    888888888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5855588855565b88888b8888888858658888858858888888
    888888888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858b5b888b5b65688888b8888888858658888858858888888
    88888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885666888b8888888858858888858858888888
    8888888668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588586666888888888858856888858858888888
    8888886688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588886666888888858856688858858888888
    888866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858858888858858888886666888885b858688858b58888888
    8866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888666666855b5866885b558888888
    66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885885888885885888888888886666b55555555555b8888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888865555555555588888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888b55bbb55b888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888555868888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888b5b866888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588588888588588888888888888888888bbb886688888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885b858888858b588888888888888888888555888868888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855b5888885b5588888888888888888888b5b888886688888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55555555555b88888888888888888888858888888668888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888888888888888858888888866888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b55bbb55b8888888888888888888888858888888888668
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888866
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b8888888888888888888888888858888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbb8888888888888888888888888858888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885558888888888888888888888888858888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b5b88888888888888888888888888b8888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888888888888b8888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888888888
    8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866888888888
    8888886668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666668888888
    8888888688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666688888888
    8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
    8888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666688888888
    8888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888885888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888885888888
    8888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888855588888
    8888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855588888
    8888858888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555588
    8888888888888868888888888888888558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555888
    8888888888888858888888888888885555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555558888
    8888888888885555588888888888855555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558558888
    8888888888888555888888888888885555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588858888
    8888888888888585888888888888888585888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
    8888888888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888858888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
    8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888
    8888888888888888888888858888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555888888588888888888888
    8888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555558888888588888888888888
    8888888886888888888888555888888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885555588888885558888888888888
    8888888885888888888555555555888888888888888888888588888888888888888888888888888888888888888888888888888888888888888888888888888888885585588888885558888888888888
    8888888555558888888855555558888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888885888588888855555888888888888
    8888888855588888888885555588888888888888888888885558888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888888
    8888888858588888888885585588888888888888888885555555558888888888888888888888888888888888888888888888888888888888888888888885888888888888888885555555558888888888
    8888888888888858888885888588888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888855588888888888888888855555888888888888
    8888888888888555888888888888888888888888888888855555888888888888888888888888888888888888888888888888888888888888888888888885888888888888888888555855588888888888
    8888888888855555558888888888888888888888888888855855888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888558885588885888888
    8888888888885555588888888888885888888888888888858885888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888588888588855588888
    `)
game.splash("Choose your hero!")
chooseHero()
story.showPlayerChoices("Sprite 1", "Sprite 2")
// asks for hero name
let heroName = game.askForString("What is the hero's name?")
chooseSideKick(mySprite)
story.showPlayerChoices("Sprite 1", "Sprite 2")
// asks for hero name
let sideKick = game.askForString("what is your sidekick's name")
