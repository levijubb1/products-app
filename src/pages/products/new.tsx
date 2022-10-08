import DefaultLayout from '@/components/DefaultLayout';
import Input from '@/components/Input';
import { trpc } from '@/utils/trpc';
import Router from 'next/router';
import { useState } from 'react';

function NewProduct() {
	interface Product {
		name: '';
		price: 0;
	}

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
		Router.back();
	};

	return (
		<DefaultLayout pageDescription="New product" pageName="New product">
			<form onSubmit={handleSubmit}>
				<section className="mx-auto grid max-w-xl gap-4 grid-cols-2">
					<Input
						name="name"
						label="Product name"
						placeholder="an awesome product!"
						type="text"
						styles="col-span-2 sm:col-span-1"
						value={newProduct.name}
						onChange={handleChange}
					/>
					<Input
						name="price"
						label="Product price"
						placeholder="69"
						type="number"
						styles="col-span-2 sm:col-span-1"
						value={newProduct.price}
						onChange={handleChange}
					/>
					<button
						className={`btn btn-primary col-span-2 ${
							setter.isLoading ? 'loading' : ''
						}`}
						disabled={!newProduct.name || !newProduct.price}
						type="submit"
					>
						Save
					</button>
				</section>
			</form>
		</DefaultLayout>
	);
}

export default NewProduct;
