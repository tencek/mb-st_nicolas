let licht = 0
let silent = 30
let loud = 200
let short_break = 200
let long_break = 1500
let period = 3000
let tone = 349
let one_second = 1000
let minutes = 60
let s_per_m = 60
basic.forever(function () {
    basic.pause(period)
    licht = input.lightLevel()
    if (licht == 0) {
        music.setVolume(silent)
        for (let i = 0; i <= minutes - 1; i++) {
            for (let j = 0; j <= s_per_m - 1; j++) {
                basic.pause(one_second)
                music.play(music.tonePlayable(tone + i * s_per_m + j, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
                licht = input.lightLevel()
                if (licht > 0) {
                    j = s_per_m
                    i = minutes
                }
            }
        }
        while (licht == 0) {
            music.setVolume(loud)
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
            basic.pause(period)
            licht = input.lightLevel()
        }
    } else {
        basic.clearScreen()
    }
})
