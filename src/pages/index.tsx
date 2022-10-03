import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	const { data: session } = useSession();

	if (session) {
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
				<button onClick={() => router.push('/auth/sign-in')} className="btn absolute z-10 btn-circle h-[250px] w-[250px]">
					Sign in
					{/* <svg
						className="absolute transform translate-x-[11px] "
						viewBox="0 0 300 300"
						style={{
							height: '350px',
							width: '350px'
						}}
					>
						<path
							id="curve"
							fill="none"
							stroke="none"
							d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
						/>
						<text
							fontSize="25"
							fill="#ffffff"
							letterSpacing="2"
							fontFamily="sans-serif"
							fontWeight="bold"
						>
							<textPath xlinkHref="#curve" startOffset="5">
								A totally groovy product CRUD app == By LJ == 
							</textPath>
						</text>
					</svg> */}
				</button>
			</main>
		</>
	);
};

export default Home;
