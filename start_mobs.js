player.onItemInteracted(STICK, function () {
    player.teleport(world(10, 8, 48))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    gameplay.setDifficulty(EASY)
    player.execute(
    "skelets"
    )
    mobs.spawn(mobs.monster(SKELETON), world(18, 4, 60))
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ARROW,
    64
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIAMOND_SWORD,
    1
    )
})
player.onChat("skelets", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(SKELETON), world(18, 4, 60))
    }
})