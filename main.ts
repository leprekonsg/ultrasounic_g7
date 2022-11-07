let USH = 0
let USL = 0
basic.clearScreen()
radio.setGroup(1)
radio.setFrequencyBand(7)
basic.forever(function () {
    basic.pause(100)
    USL = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    USH = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (USL < 30 && USH > 30) {
        radio.sendValue("USH", USH)
        radio.sendValue("USL", USL)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
