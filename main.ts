
input.onButtonPressed(Button.A, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onGesture(Gesture.Shake, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.White))
})
input.onButtonPressed(Button.AB, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Orange))
})
input.onButtonPressed(Button.B, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
})
basic.forever(function () {
	
})
