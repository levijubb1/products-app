import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { ReactNode } from 'react';
import Loading from './Loading';

type Props = {
	children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<Loading />
			</div>
		);
	}

	if (status === 'unauthenticated' && !session) {
		Router.push(Router.basePath);
	}

	if (session) {
		return children;
	}
};

export default AuthGuard;
