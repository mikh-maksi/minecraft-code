let Elements: number[][] = []
player.onItemInteracted(IRON_SHOVEL, function () {
    agent.teleportToPlayer()
})
player.onItemInteracted(STICK, function () {
    Elements = [[1, 2, 1, 2, 1], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2], [1, 2, 1, 2, 1]]
    agent.setItem(GRAY_CONCRETE, 1, 2)
    agent.setItem(RED_CONCRETE, 1, 1)
    for (let value of Elements) {
        for (let v of value) {
            agent.setSlot(v)
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, value.length)
        agent.move(RIGHT, 1)
    }
})
