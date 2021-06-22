player.onChat("mobs", function () {
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), world(9, 4, 9))
    }
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(CREEPER), world(9, 4, 9))
    }
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(SKELETON), world(9, 4, 9))
    }
})