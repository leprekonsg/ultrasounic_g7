USH = 0
USL = 0
basic.clear_screen()
radio.set_group(1)
radio.set_frequency_band(7)

def on_forever():
    global USL, USH
    basic.pause(100)
    USL = sonar.ping(DigitalPin.P1, DigitalPin.P1, PingUnit.CENTIMETERS)
    USH = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.CENTIMETERS)
    if USL < 30 and USH > 30:
        radio.send_value("USH", USH)
        radio.send_value("USL", USL)
    else:
        basic.show_icon(IconNames.YES)
basic.forever(on_forever)
