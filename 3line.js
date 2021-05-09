player.onChat("3line", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    agent.setItem(PLANKS_SPRUCE, 1, 2)
    agent.setItem(PLANKS_BIRCH, 1, 3)
    agent.move(UP, 1)
    for (let індекс = 0; індекс <= 10; індекс++) {
        agent.setSlot(індекс % 3 + 1)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})