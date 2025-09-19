import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return new NextResponse("認証が必要です", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Resume Download"',
      },
    });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  if (
    username !== process.env.RESUME_USERNAME ||
    password !== process.env.RESUME_PASSWORD
  ) {
    return new NextResponse("認証に失敗しました", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Resume Download"',
      },
    });
  }

  if (
    username !== process.env.RESUME_USERNAME ||
    password !== process.env.RESUME_PASSWORD
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const resumePath = "/path/to/your/resume.pdf";
  const resumeBuffer = await fetch(resumePath).then((res) => res.arrayBuffer());

  return new NextResponse(resumeBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="resume.pdf"',
    },
  });
}
