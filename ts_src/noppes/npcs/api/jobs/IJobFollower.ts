import { ICustomNpc } from "./../entity/ICustomNpc";


export interface IJobFollower extends IJob {
	getFollowingName(): string;

	setFollowingName(name: string): void;

	getFollowingNpc(): ICustomNpc;

	isFollowing(): boolean;

}
}
