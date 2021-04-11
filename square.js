player.onChat("k", function (num1) {
    agent.move(UP, 1)
    agent.setItem(PLANKS_OAK, 1, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < num1; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
    }
})
player.onChat("kor", function () {
    blocks.fill(
    TNT,
    pos(0, 0, 0),
    pos(10, 10, 10),
    FillOperation.Replace
    )
    blocks.place(REDSTONE_TORCH, pos(9, 10, 10))
})
