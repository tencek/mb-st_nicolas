let licht = 0
music.setVolume(200)
let short_break = 200
let long_break = 1500
let tone = 349
basic.forever(function () {
    basic.pause(3000)
    licht = input.lightLevel()
    if (licht <= 0) {
        basic.showIcon(IconNames.Heart)
        // S
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(long_break)
        // E
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(long_break)
        // N
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(long_break)
        // O
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        music.play(music.tonePlayable(tone, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(short_break)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
