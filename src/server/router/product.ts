import { createRouter } from './context';
import { z } from 'zod';

const DEFAULT_PRODUCT = {
	name: z.string(),
	price: z.number()
};

export const productRouter = createRouter()
	.query('getAll', {
		async resolve({ ctx }) {
			return await ctx.prisma.product.findMany();
		}
	})
	.query('get', {
		input: z.object({
			id: z.string()
		}),
		async resolve({ ctx, input }) {
			return await ctx.prisma.product.findUnique({
				where: {
					id: input.id
				}
			});
		}
	})

	.mutation('create', {
		input: z.object(DEFAULT_PRODUCT),
		async resolve({ input, ctx }) {
			return await ctx.prisma.product.create({
				data: {
					name: input.name,
					price: input.price
				}
			});
		}
	})
	.mutation('update', {
		input: z.object({
			id: z.string(),
			...DEFAULT_PRODUCT
		}),
		async resolve({ input, ctx }) {
			return await ctx.prisma.product.update({
				where: {
					id: input.id
				},
				data: {
					name: input.name,
					price: input.price
				}
			});
		}
	});
