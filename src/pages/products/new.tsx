import DefaultLayout from '@/components/DefaultLayout';
import ProductForm from '@/components/Products/ProductForm';
import { trpc } from '@/utils/trpc';
import { Product } from '@/utils/types';
import { useRouter } from 'next/router';
import { useState } from 'react';

function NewProduct() {
	const router = useRouter();
	const setter = trpc.useMutation('product.create');
	const [newProduct, setNewProduct] = useState<Product>({ name: '', price: 0 });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		newProduct.name &&
			newProduct.price &&
			setter.mutate({ ...newProduct, price: Number(newProduct.price) });
		router.back();
	};

	return (
		<DefaultLayout pageDescription="New product" pageName="New product">
			<ProductForm
				product={newProduct}
				handleChange={handleChange}
				onSubmit={handleSubmit}
			>
				<button
					className={`btn btn-primary col-span-2 ${
						setter.isLoading ? 'loading' : ''
					}`}
					disabled={!newProduct.name || !newProduct.price}
					type="submit"
				>
					Save
				</button>
			</ProductForm>
		</DefaultLayout>
	);
}

NewProduct.auth = true;

export default NewProduct;
