// components
import Header from '@/components/Header';
import Head from 'next/head';

type Props = {
	children: React.ReactNode;
	pageName: string;
	pageDescription: string;
};

const DefaultLayout: React.FC<Props> = ({
	children,
	pageName,
	pageDescription
}) => {
	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name="description" content={pageDescription} />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👕</text></svg>"
				/>
			</Head>
			<Header />
			<div className="container mx-auto relative p-4">{children}</div>
		</>
	);
};

export default DefaultLayout;
