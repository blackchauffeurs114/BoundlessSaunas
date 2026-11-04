import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("[Quote Request Received]", data);

    const refId = `BS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      id: refId,
      message: "Quote request recorded successfully",
    });
  } catch (error) {
    console.error("[Quote API Error]", error);
    return NextResponse.json(
      { success: false, error: "Failed to process quote" },
      { status: 500 }
    );
  }
}
