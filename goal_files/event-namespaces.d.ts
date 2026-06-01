declare namespace IAbilityEvent {
    type StartEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").StartEvent;
    type ExecuteEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").ExecuteEvent;
    type InterruptEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").InterruptEvent;
    type CompleteEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").CompleteEvent;
    type ToggleEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").ToggleEvent;
    type ToggleUpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").ToggleUpdateEvent;
    type HitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").HitEvent;
    type TickEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAbilityEvent").TickEvent;
}

declare namespace IAnimationEvent {
    type Started = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAnimationEvent").Started;
    type Ended = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAnimationEvent").Ended;
    type IFrameEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAnimationEvent").IFrameEvent;
    namespace IFrameEvent {
        type Entered = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAnimationEvent").Entered;
        type Exited = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAnimationEvent").Exited;
    }
}

declare namespace IAuctionEvent {
    type CreateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAuctionEvent").CreateEvent;
    type BidEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAuctionEvent").BidEvent;
    type BuyoutEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAuctionEvent").BuyoutEvent;
    type CancelEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAuctionEvent").CancelEvent;
    type ClaimEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IAuctionEvent").ClaimEvent;
}

declare namespace IBlockEvent {
    type EntityFallenUponEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").EntityFallenUponEvent;
    type InteractEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").InteractEvent;
    type RedstoneEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").RedstoneEvent;
    type BreakEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").BreakEvent;
    type ExplodedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").ExplodedEvent;
    type RainFillEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").RainFillEvent;
    type NeighborChangedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").NeighborChangedEvent;
    type InitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").InitEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").UpdateEvent;
    type ClickedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").ClickedEvent;
    type HarvestedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").HarvestedEvent;
    type CollidedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").CollidedEvent;
    type TimerEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IBlockEvent").TimerEvent;
}

declare namespace IChainEvent {
    type StartEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IChainEvent").StartEvent;
    type NextEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IChainEvent").NextEvent;
    type CompleteEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IChainEvent").CompleteEvent;
    type InterruptEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IChainEvent").InterruptEvent;
}

declare namespace ICustomGuiEvent {
    type ButtonEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").ButtonEvent;
    type UnfocusedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").UnfocusedEvent;
    type CloseEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").CloseEvent;
    type ScrollEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").ScrollEvent;
    type SlotEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").SlotEvent;
    type SlotClickEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomGuiEvent").SlotClickEvent;
}

declare namespace ICustomNPCsEvent {
    type CNPCNaturalSpawnEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomNPCsEvent").CNPCNaturalSpawnEvent;
    type ScriptedCommandEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ICustomNPCsEvent").ScriptedCommandEvent;
}

declare namespace IDialogEvent {
    type DialogOpen = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IDialogEvent").DialogOpen;
    type DialogOption = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IDialogEvent").DialogOption;
    type DialogClosed = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IDialogEvent").DialogClosed;
}

declare namespace IEnergyBarrierEvent {
    type SpawnedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").SpawnedEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").UpdateEvent;
    type HitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").HitEvent;
    type DestroyedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyBarrierEvent").DestroyedEvent;
}

declare namespace IEnergyProjectileEvent {
    type FiredEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").FiredEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").UpdateEvent;
    type EntityImpactEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").EntityImpactEvent;
    type BlockImpactEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").BlockImpactEvent;
    type ExpiredEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IEnergyProjectileEvent").ExpiredEvent;
}

declare namespace IFactionEvent {
    type FactionPoints = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IFactionEvent").FactionPoints;
}

declare namespace IForgeEvent {
    type WorldEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IForgeEvent").WorldEvent;
    type EntityEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IForgeEvent").EntityEvent;
    type InitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IForgeEvent").InitEvent;
}

declare namespace IItemEvent {
    type InitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").InitEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").UpdateEvent;
    type TossedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").TossedEvent;
    type PickedUpEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").PickedUpEvent;
    type SpawnEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").SpawnEvent;
    type InteractEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").InteractEvent;
    type RightClickEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").RightClickEvent;
    type AttackEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").AttackEvent;
    type StartUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").StartUsingItem;
    type UsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").UsingItem;
    type StopUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").StopUsingItem;
    type FinishUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").FinishUsingItem;
    type BreakItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").BreakItem;
    type RepairItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IItemEvent").RepairItem;
}

declare namespace ILinkedItemEvent {
    type VersionChangeEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ILinkedItemEvent").VersionChangeEvent;
    type BuildEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/ILinkedItemEvent").BuildEvent;
}

declare namespace INpcEvent {
    type TimerEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").TimerEvent;
    type CollideEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").CollideEvent;
    type DamagedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").DamagedEvent;
    type RangedLaunchedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").RangedLaunchedEvent;
    type MeleeAttackEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").MeleeAttackEvent;
    type SwingEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").SwingEvent;
    type KilledEntityEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").KilledEntityEvent;
    type DiedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").DiedEvent;
    type InteractEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").InteractEvent;
    type DialogEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").DialogEvent;
    type DialogClosedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").DialogClosedEvent;
    type TargetLostEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").TargetLostEvent;
    type TargetEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").TargetEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").UpdateEvent;
    type InitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/INpcEvent").InitEvent;
}

declare namespace IPartyEvent {
    type PartyQuestCompletedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestCompletedEvent;
    type PartyQuestSetEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestSetEvent;
    type PartyQuestTurnedInEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyQuestTurnedInEvent;
    type PartyInviteEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyInviteEvent;
    type PartyKickEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyKickEvent;
    type PartyLeaveEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyLeaveEvent;
    type PartyDisbandEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPartyEvent").PartyDisbandEvent;
}

declare namespace IPlayerEvent {
    type ChatEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").ChatEvent;
    type KeyPressedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").KeyPressedEvent;
    type MouseClickedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").MouseClickedEvent;
    type PickupXPEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").PickupXPEvent;
    type LevelUpEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").LevelUpEvent;
    type LogoutEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").LogoutEvent;
    type LoginEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").LoginEvent;
    type RespawnEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").RespawnEvent;
    type ChangedDimension = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").ChangedDimension;
    type TimerEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").TimerEvent;
    type AttackedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").AttackedEvent;
    type DamagedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").DamagedEvent;
    type LightningEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").LightningEvent;
    type SoundEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").SoundEvent;
    type FallEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").FallEvent;
    type JumpEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").JumpEvent;
    type KilledEntityEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").KilledEntityEvent;
    type DiedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").DiedEvent;
    type RangedLaunchedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").RangedLaunchedEvent;
    type AttackEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").AttackEvent;
    type DamagedEntityEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").DamagedEntityEvent;
    type ContainerClosed = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").ContainerClosed;
    type ContainerOpen = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").ContainerOpen;
    type PickUpEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").PickUpEvent;
    type DropEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").DropEvent;
    type TossEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").TossEvent;
    type InteractEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").InteractEvent;
    type RightClickEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").RightClickEvent;
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").UpdateEvent;
    type InitEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").InitEvent;
    type StartUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").StartUsingItem;
    type UsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").UsingItem;
    type StopUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").StopUsingItem;
    type FinishUsingItem = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").FinishUsingItem;
    type BreakEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").BreakEvent;
    type UseHoeEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").UseHoeEvent;
    type WakeUpEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").WakeUpEvent;
    type SleepEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").SleepEvent;
    type AchievementEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").AchievementEvent;
    type FillBucketEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").FillBucketEvent;
    type BonemealEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").BonemealEvent;
    type RangedChargeEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").RangedChargeEvent;
    type EffectEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").EffectEvent;
    namespace EffectEvent {
        type Added = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Added;
        type Ticked = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Ticked;
        type Removed = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Removed;
    }
    type ProfileEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").ProfileEvent;
    namespace ProfileEvent {
        type Changed = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Changed;
        type Create = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Create;
        type Removed = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IPlayerEvent").Removed;
    }
}

declare namespace IProjectileEvent {
    type UpdateEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IProjectileEvent").UpdateEvent;
    type ImpactEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IProjectileEvent").ImpactEvent;
}

declare namespace IQuestEvent {
    type QuestCompletedEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IQuestEvent").QuestCompletedEvent;
    type QuestStartEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IQuestEvent").QuestStartEvent;
    type QuestTurnedInEvent = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IQuestEvent").QuestTurnedInEvent;
}

declare namespace IRecipeEvent {
    type Pre = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IRecipeEvent").Pre;
    type Post = import("../Typescript Translator/ts_src/noppes/npcs/api/event/IRecipeEvent").Post;
}
