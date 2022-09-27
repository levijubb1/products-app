import Image from 'next/image';
import Head from 'next/head';
import NextError from 'next/error';

import { trpc } from '../utils/trpc';

// components
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { FaPlus } from 'react-icons/fa';

const Products = () => {
	const postQuery = trpc.useQuery(['product.getAll']);

	if (postQuery.error) {
		return (
			<NextError
				title={postQuery.error.message}
				statusCode={postQuery.error.data?.httpStatus ?? 500}
			/>
		);
	}

	if (postQuery.status !== 'success') {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<Loading />
			</div>
		);
	}

	const { data: products } = postQuery;

	return (
		<>
			<Head>
				<title>Products</title>
				<meta name="description" content="Products page" />
			</Head>
			<Header />
			<div className="container mx-auto relative ">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">Products</h2>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{products &&
							products.map((p) => (
								<a key={p.id} className="group">
									<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
										<Image
											src={`https://source.unsplash.com/random/300x200`}
											alt="An image"
											layout="fill"
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<h3 className="mt-4 text-sm ">{p.name}</h3>
									<p className="mt-1 text-lg font-medium ">${p.price}</p>
								</a>
							))}
					</div>
				</div>
				<button
					// onClick={}
					aira-label="Create new product"
					className="btn-primary btn btn-circle fixed bottom-10 right-10"
				>
					<FaPlus />
				</button>
			</div>
		</>
	);
};

// export const getStaticProps = async () => {
// 	const products = await getProducts();
// 	const DAY_IN_SECONDS = 60 * 60 * 24;
// 	// Doing this weird JSON hack to serialize date fields
// 	return {
// 		props: { products: JSON.parse(JSON.stringify(products)) },
// 		revalidate: DAY_IN_SECONDS
// 	};
// };

export default Products;
