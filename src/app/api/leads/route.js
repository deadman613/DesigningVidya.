import { NextResponse } from "next/server";

const isNonEmptyString = (value) => typeof value === "string" && value.trim().length > 0;

export async function POST(request) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const center = typeof body?.center === "string" ? body.center.trim() : "";
    const pageUrl = typeof body?.pageUrl === "string" ? body.pageUrl.trim() : "";

    if (!isNonEmptyString(name) || !isNonEmptyString(phone) || !isNonEmptyString(email) || !isNonEmptyString(center)) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const googleSheetsWebAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    const googleSheetsToken = process.env.GOOGLE_SHEETS_TOKEN;

    if (!googleSheetsWebAppUrl) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Lead collection is not configured (missing GOOGLE_SHEETS_WEBAPP_URL).",
        },
        { status: 500 }
      );
    }

    const upstreamResponse = await fetch(googleSheetsWebAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: googleSheetsToken || "",
        name,
        phone,
        email,
        center,
        pageUrl,
        source: "apply-now",
        createdAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    const text = await upstreamResponse.text();
    let upstreamJson = null;
    try {
      upstreamJson = JSON.parse(text);
    } catch {
      // ignore
    }

    if (!upstreamResponse.ok || upstreamJson?.ok === false) {
      return NextResponse.json(
        {
          ok: false,
          error: upstreamJson?.error || "Failed to save lead.",
          upstreamStatus: upstreamResponse.status,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
