import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import Link from 'next/link';

const Home: NextPage = () => {
	const hello = trpc.useQuery(['example.getAll']);
	// const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
				<h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
					Create <span className="text-purple-300">T3</span> App
				</h1>
				<p className="text-2xl text-gray-700">This stack uses:</p>

				<Link href="/products">
					<button className="btn">Hello there</button>
				</Link>

				<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
					{hello.data ? <p>{hello.data[0]?.age}</p> : <p>Loading..</p>}
				</div>
			</main>
		</>
	);
};

export default Home;
