import Input from '@/components/Input';
import { ReactNode } from 'react';

interface FormProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	product: { name: string; price: number };
	children?: ReactNode;
}

export default function ProductForm({
	product,
	handleChange,
	onSubmit,
	children
}: FormProps) {
	return (
		<form onSubmit={onSubmit}>
			<section className="mx-auto grid max-w-xl gap-4 grid-cols-2">
				<Input
					name="name"
					label="Product name"
					placeholder="an awesome product!"
					type="text"
					styles="col-span-2 sm:col-span-1"
					value={product.name}
					onChange={handleChange}
				/>
				<Input
					name="price"
					label="Product price"
					placeholder="69"
					type="number"
					styles="col-span-2 sm:col-span-1"
					value={product.price}
					onChange={handleChange}
				/>
				{children}
			</section>
		</form>
	);
}
