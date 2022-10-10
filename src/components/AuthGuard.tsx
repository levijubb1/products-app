import { signIn, useSession } from 'next-auth/react';
import { useEffect, ReactNode } from 'react';
import Loading from './Loading';

type Props = {
	children: ReactNode;
};

/**
 * @link https://cloudcoders.xyz/blog/create-protected-routes-in-nextjs/
 */
const AuthGuard = ({ children }: Props) => {
	const { data: session, status } = useSession();
	const isUser = !!session?.user;
	useEffect(() => {
		if (status === 'loading') return;
		if (!isUser) signIn();
	}, [isUser, status]);

	if (isUser) {
		return children;
	}

	// Session is being fetched, or no user.
	// If no user, useEffect() will redirect.
	return (
		<div className="flex justify-center items-center h-[100vh]">
			<Loading />
		</div>
	);
};

export default AuthGuard;
