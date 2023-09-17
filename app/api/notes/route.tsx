import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, isDone } = await request.json();

  await connectMongoDB();

  await Note.create({
    title,
    description,
    isDone,
  });

  return NextResponse.json(
    { message: "Note created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();

  const notes = await Note.find();

  return NextResponse.json(notes, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  await Note.findByIdAndDelete(id);

  return NextResponse.json(
    { message: `Note with id ${id} deleted successfully` },
    { status: 200 }
  );
}
