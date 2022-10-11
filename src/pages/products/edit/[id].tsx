import { useEffect, useState } from 'react';
import { trpc } from '@/utils/trpc';
import { Product } from '@/utils/types';
import { useRouter } from 'next/router';
import DefaultLayout from '@/components/DefaultLayout';
import ProductForm from '@/components/Products/ProductForm';

function EditProduct() {
	const [product, setProduct] = useState<Product>({ name: '', price: 0 });
	const [pid, setPid] = useState('');
	const router = useRouter();

	const setter = trpc.useMutation('product.update');
	const getter = trpc.useQuery(['product.get', { id: pid }]);

	useEffect(() => {
		if (router.isReady) {
			setPid(router.query.id as string);
		}
	}, [router.isReady]);

	useEffect(() => {
		if (getter.data) {
			setProduct(getter.data);
		}
	}, [getter.data]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		product.name &&
			product.price &&
			setter.mutate({
				id: pid,
				...product,
				price: Number(product.price)
			});
		router.back();
	};

	return (
		<DefaultLayout pageDescription="New product" pageName="New product">
			<ProductForm
				product={product}
				handleChange={handleChange}
				onSubmit={handleSubmit}
			>
				<button
					className={`btn btn-primary col-span-2 ${
						setter.isLoading ? 'loading' : ''
					}`}
					disabled={!product.name || !product.price}
					type="submit"
				>
					save {product.name}
				</button>
			</ProductForm>
		</DefaultLayout>
	);
}

EditProduct.auth = true;

export default EditProduct;
