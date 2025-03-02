namespace SpriteKind {
    export const Shopkeeper = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim7`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim5`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim8`,
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim6`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setBounceOnWall(true)
tiles.setCurrentTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Shopkeeper)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 6))
