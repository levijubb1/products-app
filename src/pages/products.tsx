import Header from '@/components/Header';
import Image from 'next/image';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { prisma } from '../server/db/client';
import { AsyncReturnType } from '@/utils/ts-bs';

const getProducts = async () => {
	return await prisma.product.findMany();
	// return await trpc.useQuery(['product.get']);
};

type ProductsQueryResult = AsyncReturnType<typeof getProducts>;

const Products: React.FC<{
	products: ProductsQueryResult;
}> = (props) => {
	return (
		<>
			<Head>
				<title>Products</title>
				<meta name="description" content="Products page" />
			</Head>
			<Header />
			<div className="p-8"></div>
			<div className="container mx-auto">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">Products</h2>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{props.products &&
							props.products.map((product) => (
								<a key={product.id} className="group">
									<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
										<Image
											src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`}
											alt="An image"
											layout="fill"
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<h3 className="mt-4 text-sm ">{product.name}</h3>
									<p className="mt-1 text-lg font-medium ">{product.price}</p>
								</a>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const products = await getProducts();
	const DAY_IN_SECONDS = 60 * 60 * 24;
	// Doing this weird JSON hack to serialize date fields
	return { props: { products: JSON.parse(JSON.stringify(products)) }, revalidate: DAY_IN_SECONDS };
};

export default Products;
