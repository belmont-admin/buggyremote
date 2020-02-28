basic.showArrow(ArrowNames.North)
radio.setGroup(13)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        // 1 = Forward
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.A)) {
        // 2 = Left
        radio.sendNumber(2)
    } else if (input.buttonIsPressed(Button.B)) {
        // 3 = Right
        radio.sendNumber(-2)
    } else {
        // 0=Stop
        radio.sendNumber(0)
    }
})
