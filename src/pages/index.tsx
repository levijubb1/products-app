import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const hello = trpc.useQuery(['example.getAll']);
	// const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	if (session) {
		router.push('/products');
	}

	return (
		<>
			<Head>
				<title>Product App</title>
				<meta name="description" content="Tester app on the t3 stack" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
				<button className="btn btn-circle h-[250px] w-[250px]">Sign in</button>
				<Link href="/products">
					<button className="btn">Product</button>
				</Link>
				<Link href="/auth/sign-in">
					<button className="btn">Sign In</button>
				</Link>

				<div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
					{hello.data ? <p>{hello.data[0]?.age}</p> : <p>Loading..</p>}
				</div>
			</main>
		</>
	);
};

export default Home;
