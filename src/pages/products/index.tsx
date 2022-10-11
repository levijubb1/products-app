import NextError from 'next/error';

import { trpc } from '../../utils/trpc';

// components
import DefaultLayout from '@/components/DefaultLayout';
import Loading from '@/components/Loading';
import ActionButton from '@/components/ActionButton';
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard';

const Products = () => {
	const router = useRouter();
	const getQuery = trpc.useQuery(['product.getAll']);

	const handleNewProduct = () => {
		router.push('/products/new');
	};

	if (getQuery.error) {
		return (
			<NextError
				title={getQuery.error.message}
				statusCode={getQuery.error.data?.httpStatus ?? 500}
			/>
		);
	}

	if (getQuery.status !== 'success') {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<Loading />
			</div>
		);
	}

	const { data: products } = getQuery;

	return (
		<DefaultLayout pageName="Products" pageDescription="Products page">
			<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>

				<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products &&
						products.map((p) => (
							<div key={p.id}>
								<ProductCard data={p} />
							</div>
						))}
				</div>
			</div>
			<ActionButton action={handleNewProduct} />
		</DefaultLayout>
	);
};

Products.auth = true;

export default Products;
