export interface Enn {}
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		return Response.json({
			massage: 'Hi There',
		});
	},
};
