import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// This route can be called by Sanity webhooks to trigger revalidation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verify the request is from Sanity (optional - add webhook secret validation)
    // const secret = request.headers.get('sanity-webhook-secret')
    // if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    //   return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    // }

    // Determine which pages to revalidate based on the document type
    const documentType = body._type;

    switch (documentType) {
      case "readingListItem":
        revalidatePath("/reading-list");
        break;
      case "castMember":
        revalidatePath("/cast-and-crew");
        break;
      case "pressQuote":
        revalidatePath("/press");
        break;
      default:
        // Revalidate all pages if document type is unknown
        revalidatePath("/reading-list");
        revalidatePath("/cast-and-crew");
        revalidatePath("/press");
    }

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated pages for ${documentType}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    message: "Revalidation endpoint is working",
    timestamp: new Date().toISOString(),
  });
}
