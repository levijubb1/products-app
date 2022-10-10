import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';

const Home: NextPage = () => {
	const router = useRouter();
	const { data: session, status } = useSession();

	if (session) {
		console.log('pushing to products')
		router.push('/products');
	}

	return (
		<>
			<Head>
				<title>Product App</title>
				<meta name="description" content="Tester app on the t3 stack" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔒</text></svg>"
				/>
			</Head>

			<main
				style={{ backgroundImage: "url('/landing-bg.png')" }}
				className="bg-no-repeat bg-cover mx-auto flex flex-col  items-center justify-center min-h-screen p-4"
			>
				{status === 'loading' && (
					<div className="flex justify-center items-center h-[100vh]">
						<Loading />
					</div>
				)}

				{/* If no session is detected show login option */}
				{session === null && (
					<Link href="auth/sign-in">
						<button className="btn absolute z-10 btn-circle h-[250px] w-[250px]">
							Sign in
						</button>
					</Link>
				)}
			</main>
		</>
	);
};

export default Home;
