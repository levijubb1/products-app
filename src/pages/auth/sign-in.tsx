import { getProviders, signIn } from 'next-auth/react';
import type { Provider } from 'next-auth/providers';

export default function SignIn({ providers }: { providers: Provider[] }) {
	return (
		<>
			<section className=" h-[100vh] flex items-center justify-center">
				<div className="card glass w-100">
					<div className="card-body">
						<h2 className="card-title">Sign In</h2>
						<p>Choose one of the following providers 🎉</p>
						{Object.values(providers).map((provider) => (
							<div key={provider.name} className='text-center'>
								<button
									className="btn btn-outline inline-flex gap-4"
									onClick={() => signIn(provider.id)}
								>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src="/google.svg" alt="Google Logo" />
									Sign in with {provider.name}
								</button>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers }
	};
}
