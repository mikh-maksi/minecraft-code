player.onItemInteracted(IRON_SHOVEL, function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 40, 10)
})
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    Points += 4
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    Points += 2
    player.say(Points)
    if (Points % 4 == 0) {
        mobs.spawn(LIGHTNING_BOLT, pos(5, 0, 0))
        gameplay.title(mobs.target(LOCAL_PLAYER), "Checkpoint", "zombie")
    }
})
player.onItemInteracted(DIAMOND_SWORD, function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    gameplay.setDifficulty(EASY)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), pos(10, 0, 0))
    }
})
let Points = 0
Points = 0
