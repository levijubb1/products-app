import DefaultLayout from '@/components/DefaultLayout';
import Input from '@/components/Input';
import { useState } from 'react';

function NewProduct() {
	interface Product {
		name: '';
		price: 0;
	}

	const [newProduct, setNewProduct] = useState<Product>({ name: '', price: 0 });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewProduct({ ...newProduct, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ newProduct });
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
						placeholder="69.00"
						type="number"
						styles="col-span-2 sm:col-span-1"
						value={newProduct.price}
						onChange={handleChange}
					/>
					<button className="btn btn-primary col-span-2" type="submit">
						Add Product!
					</button>
				</section>
			</form>
		</DefaultLayout>
	);
}

export default NewProduct;
