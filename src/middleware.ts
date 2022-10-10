
// import { unstable_getServerSession } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server';
export async function middleware(req: NextRequest) {
  // console.log(req)
// 	if (req.nextUrl.pathname.includes('/products')) {
// 		// const session = await getSession({ req });
// 		const session = await unstable_getServerSession(req, res, authOptions)
// 		if (!session) return NextResponse.redirect(new URL('/', req.url));
// 	}

	return NextResponse.next();
}

// export { default } from 'next-auth/middleware';

// export const config = { matcher: ['/products', '/products/new'] };
