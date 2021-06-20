player.onChat("start", function () {
    player.teleport(world(100, 4, 110))
    player.runChatCommand("about")
})

player.onChat("about", function () {
    gameplay.title(mobs.target(LOCAL_PLAYER), "Умный воин", "Тебе нужно ответить на вопрос и победить мобов, чтобы получить 10+ очков!")
})