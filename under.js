player.onChat("under", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    agent.destroy(DOWN)
    agent.place(DOWN)
})