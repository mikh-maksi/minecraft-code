player.onItemInteracted(DIAMOND, function () {
    agent.move(BACK, 1)
})
player.onItemInteracted(APPLE, function () {
    agent.move(FORWARD, 1)
})
player.onItemInteracted(IRON_PICKAXE, function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("Лабіринт", function () {
    blocks.fill(
    GLASS,
    pos(2, 0, 2),
    pos(30, 12, 30),
    FillOperation.Hollow
    )
    blocks.fill(
    AIR,
    pos(2, 12, 2),
    pos(30, 12, 30),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(4, 1, 4),
    pos(5, 2, 4),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(6, 1, 4),
    pos(6, 2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(6, 1, 10),
    pos(15, 2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(15, 1, 10),
    pos(15, 2, 21),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(15, 1, 21),
    pos(19, 2, 21),
    FillOperation.Replace
    )
    blocks.fill(
    GLOWSTONE,
    pos(19, 1, 21),
    pos(19, 2, 29),
    FillOperation.Replace
    )
    blocks.place(AIR, pos(2, 1, 27))
    blocks.place(BEACON, pos(1, 0, 27))
    agent.teleport(pos(29, 1, 29), WEST)
    player.teleport(pos(30, 15, 30))
})
player.onItemInteracted(CLOWNFISH, function () {
    agent.turn(LEFT_TURN)
})
