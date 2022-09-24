import { createRouter } from './context';
import { z } from 'zod';

export const productRouter = createRouter()
	.query('getAll', {
		async resolve({ ctx }) {
			return await ctx.prisma.product.findMany();
		}
	})
	.mutation('create', {
		input: z.object({
			name: z.string(),
			price: z.number()
		}),
		async resolve({ input, ctx }) {
			return await ctx.prisma.product.create({
				data: {
					name: input.name,
					price: input.price
				}
			});
		}
	});
