player.onItemInteracted(DIAMOND_SWORD, function () {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(-10, 0, 0))
    }
})