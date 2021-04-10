let список: string[] = []
player.onChat("answer", function (num1) {
    список = ["Ответ 1", "Ответ 2", "Ответ 3"]
    player.say(список[num1 - 1])
})
