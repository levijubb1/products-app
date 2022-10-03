import Image from 'next/image';

import { Product } from '@prisma/client';

const ActionButton: React.FC<{ data: Product }> = (props) => {
	const { name, price, createdAt } = props.data;

	const isNew = createdAt > new Date(Date.now() - 1000 * 60 * 60 * 12);
	return (
		<a className="group">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={`https://source.unsplash.com/random/300x200`}
					alt="An image"
					layout="fill"
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<section className="mt-4 flex justify-between">
				<h3 className=" text-sm ">{name}</h3>
				{isNew && <div className="badge badge-accent badge-outline">New</div>}
			</section>

			<p className="mt-1 text-lg font-medium ">${price}</p>
		</a>
	);
};

export default ActionButton;
