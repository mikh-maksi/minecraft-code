player.onChat("line", function () {
    agent.setItem(PLANKS_SPRUCE, 1, 1)
    agent.setSlot(1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
player.onItemInteracted(IRON_SHOVEL, function () {
    agent.teleportToPlayer()
})