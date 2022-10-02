import DefaultLayout from '@/components/DefaultLayout';
import Input from '@/components/Input';

function NewProduct() {
	// const [newProduct, setNewProduct] = useState();

	return (
		<DefaultLayout pageDescription="New product" pageName="New product">
			<section className="mt-8 mx-auto grid max-w-xl gap-4 grid-cols-1 md:grid-cols-2 ">
				<Input
					label="Product name"
					placeholder="an awesome product!"
					type="text"
				/>
				<Input label="Product price" placeholder="$69.00" type="currency" />
			</section>
		</DefaultLayout>
	);
}

export default NewProduct;
