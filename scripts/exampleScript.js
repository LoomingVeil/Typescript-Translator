/**
 * @typedef {Object} AbilityConfig
 * @property {number} stealRange
 * @property {string[]} stealableItems
 */

/** @type {{ [abilityName: string]: AbilityConfig }} */
var settings = {
    "Steal": {
        "stealRange": 3,
        "stealableItems": [
            "minecraft:emerald",
            "minecraft:gold_ingot",
            "minecraft:gold_nugget",
            "minecraft:diamond"
        ]
    }
}

/** @param {IAbilityEvent.ExecuteEvent} event */
function abilityExecute(event) {
    var abilityName = event.getAbility().getName()
    if (settings[abilityName] == undefined) return;

    var abilitySettings = settings[abilityName];

    var player = event.getPlayer()
    var lookingAtEntities = player.getLookingAtEntities(abilitySettings["stealRange"], 0, 0.5, true, true, true)
    if (lookingAtEntities.length > 0) {
        var target = lookingAtEntities[0]
        if (target.getType() == EntityType.PLAYER) {
            var targetPlayer = /** @type {IPlayer} */ (target)
            for (var i = 0; i < abilitySettings["stealableItems"].length; i++) {
                var item = API.createItem(abilitySettings["stealableItems"][i], 0, 1)
                if (targetPlayer.inventoryItemCount(item, false, false) > 0) {
                    var sucess = targetPlayer.removeItem(item, 1, false, false)
                    if (sucess) {
                        player.giveItem(item, 1)
                        break
                    }
                } 
            }
        } else if (target.getType() == EntityType.VILLAGER) {
            player.giveItem(API.createItem("minecraft:emerald", 0, 1), 1)
        } else {
            var abilities = player.getData().getAbilityData()
            abilities.completeCurrentAbility()
            abilities.resetCooldown(abilityName)
        }
    } else {
        var abilities = player.getData().getAbilityData()
        abilities.completeCurrentAbility()
        abilities.resetCooldown(abilityName)
    }
}