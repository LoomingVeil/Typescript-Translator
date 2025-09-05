
/**
 * Represents a monster entity.
 * This interface does not add new methods, but allows type checking
 * against the EntityType.MONSTER.
 * 
 * @param <T> The underlying Minecraft EntityMob type.
 */
export interface IMonster extends IEntityLiving {
}
}
