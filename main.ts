/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program makes a sprite go around the perimeter.
*/

// Variables.
let countX: number
let countY: number
let sprite: game.LedSprite = null

// Cleanup.
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Loop clockwise on A button pressed.
input.onButtonPressed(Button.A, function() {
    countX = 0
    countY = 0
    sprite = game.createSprite(0, 0)

    // Move sprite to top right.
    while (countY == 0) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countX = countX + 1
        if (countX == 4) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countY = countY + 1
            basic.pause(200)
        }
    }

    // Move sprite to bottom right.
    while (countX == 4) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countY = countY + 1
        if (countY == 4) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countX = countX - 1
            basic.pause(200)
        }
    }

    // Move sprite to bottom left
    while (countY == 4) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countX = countX - 1
        if (countX == 0) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countY = countY - 1
            basic.pause(200)
        }
    }

    // Move sprite to top left.
    while (countX == 0) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countY = countY - 1
        if (countY == 0) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countX = countX + 1
            basic.pause(200)
        }
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// Loop counter-clockwise on B button pressed.
input.onButtonPressed(Button.B, function () {
    countX = 0
    countY = 0
    sprite = game.createSprite(0, 0)

    // Move sprite to bottom left.
    while (countX == 0) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countY = countY + 1
        if (countY == 4) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countX = countX + 1
            basic.pause(200)
        }
    }

    // Move sprite to bottom right.
    while (countY == 4) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countX = countX + 1
        if (countX == 4) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countY = countY - 1
            basic.pause(200)
        }
    }

    // Move sprite to bottom left
    while (countX == 4) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countY = countY - 1
        if (countY == 0) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countX = countX - 1
            basic.pause(200)
        }
    }

    // Move sprite to top left.
    while (countY == 0) {
        sprite.set(LedSpriteProperty.X, countX)
        sprite.set(LedSpriteProperty.Y, countY)
        basic.pause(200)
        countX = countX - 1
        if (countX == 0) {
            sprite.set(LedSpriteProperty.X, countX)
            sprite.set(LedSpriteProperty.Y, countY)
            countY = countY + 1
            basic.pause(200)
        }
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
