import Image from 'next/image';

import { Product } from '@prisma/client';
import { useState } from 'react';
import { cn } from '@/utils/classes';

const ActionButton = ({ data }: { data: Product }) => {
	const { name, price, createdAt } = data;
	const [isLoading, setIsLoading] = useState(true);

	const isNew = createdAt > new Date(Date.now() - 1000 * 60 * 60 * 12);
	return (
		<a className="group">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={`https://source.unsplash.com/random/300x200`}
					alt="An image"
					layout="fill"
					className={cn(
						'h-full w-full object-cover object-center duration-700 ease-in-out group-hover:opacity-75',
						isLoading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					)}
					onLoadingComplete={() => setIsLoading(false)}
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
