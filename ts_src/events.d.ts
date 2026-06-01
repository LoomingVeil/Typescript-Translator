declare namespace IAbilityEvent {
	type CompleteEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").CompleteEvent;
	type ExecuteEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").ExecuteEvent;
	type HitEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").HitEvent;
	type InterruptEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").InterruptEvent;
	type StartEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").StartEvent;
	type TickEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").TickEvent;
	type ToggleEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").ToggleEvent;
	type ToggleUpdateEvent = import("../ts_src/noppes/npcs/api/event/IAbilityEvent").ToggleUpdateEvent;
}

declare namespace IAnimationEvent {
	type Ended = import("../ts_src/noppes/npcs/api/event/IAnimationEvent").Ended;
	type IFrameEvent = import("../ts_src/noppes/npcs/api/event/IAnimationEvent").IFrameEvent;
	namespace IFrameEvent {
		type Entered = import("../ts_src/noppes/npcs/api/event/IAnimationEvent").Entered;
		type Exited = import("../ts_src/noppes/npcs/api/event/IAnimationEvent").Exited;
	}
	type Started = import("../ts_src/noppes/npcs/api/event/IAnimationEvent").Started;
}

type IArmorChangedEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/IArmorChangedEvent").IArmorChangedEvent;
type IArmorDamagedEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/IArmorDamagedEvent").IArmorDamagedEvent;
type IAttributeRecalculateEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/IAttributeRecalculateEvent").IAttributeRecalculateEvent;
declare namespace IAuctionEvent {
	type BidEvent = import("../ts_src/noppes/npcs/api/event/IAuctionEvent").BidEvent;
	type BuyoutEvent = import("../ts_src/noppes/npcs/api/event/IAuctionEvent").BuyoutEvent;
	type CancelEvent = import("../ts_src/noppes/npcs/api/event/IAuctionEvent").CancelEvent;
	type ClaimEvent = import("../ts_src/noppes/npcs/api/event/IAuctionEvent").ClaimEvent;
	type CreateEvent = import("../ts_src/noppes/npcs/api/event/IAuctionEvent").CreateEvent;
}

declare namespace IBlockEvent {
	type BreakEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").BreakEvent;
	type ClickedEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").ClickedEvent;
	type CollidedEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").CollidedEvent;
	type EntityFallenUponEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").EntityFallenUponEvent;
	type ExplodedEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").ExplodedEvent;
	type HarvestedEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").HarvestedEvent;
	type InitEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").InitEvent;
	type InteractEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").InteractEvent;
	type NeighborChangedEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").NeighborChangedEvent;
	type RainFillEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").RainFillEvent;
	type RedstoneEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").RedstoneEvent;
	type TimerEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").TimerEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IBlockEvent").UpdateEvent;
}

declare namespace IChainEvent {
	type CompleteEvent = import("../ts_src/noppes/npcs/api/event/IChainEvent").CompleteEvent;
	type InterruptEvent = import("../ts_src/noppes/npcs/api/event/IChainEvent").InterruptEvent;
	type NextEvent = import("../ts_src/noppes/npcs/api/event/IChainEvent").NextEvent;
	type StartEvent = import("../ts_src/noppes/npcs/api/event/IChainEvent").StartEvent;
}

declare namespace ICustomGuiEvent {
	type ButtonEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").ButtonEvent;
	type CloseEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").CloseEvent;
	type ScrollEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").ScrollEvent;
	type SlotClickEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").SlotClickEvent;
	type SlotEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").SlotEvent;
	type UnfocusedEvent = import("../ts_src/noppes/npcs/api/event/ICustomGuiEvent").UnfocusedEvent;
}

declare namespace ICustomNPCsEvent {
	type CNPCNaturalSpawnEvent = import("../ts_src/noppes/npcs/api/event/ICustomNPCsEvent").CNPCNaturalSpawnEvent;
	type ScriptedCommandEvent = import("../ts_src/noppes/npcs/api/event/ICustomNPCsEvent").ScriptedCommandEvent;
}

type ICustomProjectileImpactEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/ICustomProjectileImpactEvent").ICustomProjectileImpactEvent;
type ICustomProjectileTickEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/ICustomProjectileTickEvent").ICustomProjectileTickEvent;
declare namespace IDialogEvent {
	type DialogClosed = import("../ts_src/noppes/npcs/api/event/IDialogEvent").DialogClosed;
	type DialogOpen = import("../ts_src/noppes/npcs/api/event/IDialogEvent").DialogOpen;
	type DialogOption = import("../ts_src/noppes/npcs/api/event/IDialogEvent").DialogOption;
}

declare namespace IEnergyBarrierEvent {
	type DestroyedEvent = import("../ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").DestroyedEvent;
	type HitEvent = import("../ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").HitEvent;
	type SpawnedEvent = import("../ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").SpawnedEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").UpdateEvent;
}

declare namespace IEnergyProjectileEvent {
	type BlockImpactEvent = import("../ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").BlockImpactEvent;
	type EntityImpactEvent = import("../ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").EntityImpactEvent;
	type ExpiredEvent = import("../ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").ExpiredEvent;
	type FiredEvent = import("../ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").FiredEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").UpdateEvent;
}

declare namespace IFactionEvent {
	type FactionPoints = import("../ts_src/noppes/npcs/api/event/IFactionEvent").FactionPoints;
}

declare namespace IForgeEvent {
	type EntityEvent = import("../ts_src/noppes/npcs/api/event/IForgeEvent").EntityEvent;
	type InitEvent = import("../ts_src/noppes/npcs/api/event/IForgeEvent").InitEvent;
	type WorldEvent = import("../ts_src/noppes/npcs/api/event/IForgeEvent").WorldEvent;
}

type IHotbarSlotChangedEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/IHotbarSlotChangedEvent").IHotbarSlotChangedEvent;
declare namespace IItemEvent {
	type AttackEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").AttackEvent;
	type BreakItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").BreakItem;
	type FinishUsingItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").FinishUsingItem;
	type InitEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").InitEvent;
	type InteractEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").InteractEvent;
	type PickedUpEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").PickedUpEvent;
	type RepairItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").RepairItem;
	type RightClickEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").RightClickEvent;
	type SpawnEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").SpawnEvent;
	type StartUsingItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").StartUsingItem;
	type StopUsingItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").StopUsingItem;
	type TossedEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").TossedEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IItemEvent").UpdateEvent;
	type UsingItem = import("../ts_src/noppes/npcs/api/event/IItemEvent").UsingItem;
}

declare namespace ILinkedItemEvent {
	type BuildEvent = import("../ts_src/noppes/npcs/api/event/ILinkedItemEvent").BuildEvent;
	type VersionChangeEvent = import("../ts_src/noppes/npcs/api/event/ILinkedItemEvent").VersionChangeEvent;
}

declare namespace INpcEvent {
	type CollideEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").CollideEvent;
	type DamagedEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").DamagedEvent;
	type DialogClosedEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").DialogClosedEvent;
	type DialogEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").DialogEvent;
	type DiedEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").DiedEvent;
	type InitEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").InitEvent;
	type InteractEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").InteractEvent;
	type KilledEntityEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").KilledEntityEvent;
	type MeleeAttackEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").MeleeAttackEvent;
	type RangedLaunchedEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").RangedLaunchedEvent;
	type SwingEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").SwingEvent;
	type TargetEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").TargetEvent;
	type TargetLostEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").TargetLostEvent;
	type TimerEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").TimerEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/INpcEvent").UpdateEvent;
}

declare namespace IPartyEvent {
	type PartyDisbandEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyDisbandEvent;
	type PartyInviteEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyInviteEvent;
	type PartyKickEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyKickEvent;
	type PartyLeaveEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyLeaveEvent;
	type PartyQuestCompletedEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestCompletedEvent;
	type PartyQuestSetEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestSetEvent;
	type PartyQuestTurnedInEvent = import("../ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestTurnedInEvent;
}

declare namespace IPlayerEvent {
	type AchievementEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").AchievementEvent;
	type AttackEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").AttackEvent;
	type AttackedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").AttackedEvent;
	type BonemealEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").BonemealEvent;
	type BreakEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").BreakEvent;
	type ChangedDimension = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").ChangedDimension;
	type ChatEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").ChatEvent;
	type ContainerClosed = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").ContainerClosed;
	type ContainerOpen = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").ContainerOpen;
	type DamagedEntityEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").DamagedEntityEvent;
	type DamagedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").DamagedEvent;
	type DiedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").DiedEvent;
	type DropEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").DropEvent;
	type EffectEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").EffectEvent;
	namespace EffectEvent {
		type Added = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Added;
		type Removed = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Removed;
		type Ticked = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Ticked;
	}
	type FallEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").FallEvent;
	type FillBucketEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").FillBucketEvent;
	type FinishUsingItem = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").FinishUsingItem;
	type InitEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").InitEvent;
	type InteractEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").InteractEvent;
	type JumpEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").JumpEvent;
	type KeyPressedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").KeyPressedEvent;
	type KilledEntityEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").KilledEntityEvent;
	type LevelUpEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").LevelUpEvent;
	type LightningEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").LightningEvent;
	type LoginEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").LoginEvent;
	type LogoutEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").LogoutEvent;
	type MouseClickedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").MouseClickedEvent;
	type PickUpEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").PickUpEvent;
	type PickupXPEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").PickupXPEvent;
	type ProfileEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").ProfileEvent;
	namespace ProfileEvent {
		type Changed = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Changed;
		type Create = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Create;
		type Removed = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").Removed;
	}
	type RangedChargeEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").RangedChargeEvent;
	type RangedLaunchedEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").RangedLaunchedEvent;
	type RespawnEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").RespawnEvent;
	type RightClickEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").RightClickEvent;
	type SleepEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").SleepEvent;
	type SoundEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").SoundEvent;
	type StartUsingItem = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").StartUsingItem;
	type StopUsingItem = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").StopUsingItem;
	type TimerEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").TimerEvent;
	type TossEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").TossEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").UpdateEvent;
	type UseHoeEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").UseHoeEvent;
	type UsingItem = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").UsingItem;
	type WakeUpEvent = import("../ts_src/noppes/npcs/api/event/IPlayerEvent").WakeUpEvent;
}

declare namespace IProjectileEvent {
	type ImpactEvent = import("../ts_src/noppes/npcs/api/event/IProjectileEvent").ImpactEvent;
	type UpdateEvent = import("../ts_src/noppes/npcs/api/event/IProjectileEvent").UpdateEvent;
}

declare namespace IQuestEvent {
	type QuestCompletedEvent = import("../ts_src/noppes/npcs/api/event/IQuestEvent").QuestCompletedEvent;
	type QuestStartEvent = import("../ts_src/noppes/npcs/api/event/IQuestEvent").QuestStartEvent;
	type QuestTurnedInEvent = import("../ts_src/noppes/npcs/api/event/IQuestEvent").QuestTurnedInEvent;
}

declare namespace IRecipeEvent {
	type Post = import("../ts_src/noppes/npcs/api/event/IRecipeEvent").Post;
	type Pre = import("../ts_src/noppes/npcs/api/event/IRecipeEvent").Pre;
}

type IResolutionChangedEvent = import("../ts_src/com/veil/extendedscripts/extendedapi/event/IResolutionChangedEvent").IResolutionChangedEvent;

