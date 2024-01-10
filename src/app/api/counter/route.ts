import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
	return NextResponse.json({
		method: request.method,
		url: request.url,
		count: 100,
	});
}
