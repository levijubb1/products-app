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
			</Head>
			<Header />
			<div className="container mx-auto relative p-4">{children}</div>
		</>
	);
};

export default DefaultLayout;
