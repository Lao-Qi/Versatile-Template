export class Progress {
	/** 异步的记录服务器进展 */
	static async push(message: string) {
		const date = new Date();
		console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${message}`);
	}

	/** 异步的记录服务器日志 */
	static async log(message: string, status: string, push: boolean) {
		console.log(`${new Date().toLocaleDateString()} [${status.toLocaleUpperCase()}] ${message}`);
	}

	static async run(callback: () => string) {
		console.log(await callback());
	}
}
