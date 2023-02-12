/** 商品所处状态 */
export enum GoodState {
	/** 上架 */
	Shelves = 'shelves',
	/** 下架 */
	Takedown = 'takedown',
	/** 删除 */
	Remove = 'remove',
}

/** 商品相关时间 */
export type GoodDates = {
	/** 发布 */
	create: Date;
	/** 更新 */
	update: Date | null;
	/** 下架 */
	down: Date | null;
	/** 删除 */
	remove: Date | null;
};
