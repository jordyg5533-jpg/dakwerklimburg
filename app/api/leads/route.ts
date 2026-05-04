import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.naam || !body.telefoon || !body.email || !body.type || !body.gdpr) {
      return NextResponse.json(
        { error: 'Verplichte velden ontbreken' },
        { status: 400 }
      );
    }

    console.log('NEW LEAD:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
