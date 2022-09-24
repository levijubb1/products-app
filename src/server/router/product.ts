import { createRouter } from './context';
import { z } from 'zod';

export const productRouter = createRouter()
	.query('get', {
		input: z
			.object({
				id: z.number()
			})
			.nullish(),
		async resolve({ input, ctx }) {
			if (input?.id) {
				return await ctx.prisma.product.findUnique({
					where: {
						id: input.id
					}
				});
			}
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
