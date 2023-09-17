import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const {
    newTitle: title,
    newDescription: description,
    newIsDone: isDone,
  } = await request.json();

  await connectMongoDB();

  await Note.findByIdAndUpdate(id, { title, description, isDone });

  return NextResponse.json(
    { message: `Note with id ${id} updated successfully` },
    { status: 200 }
  );
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await connectMongoDB();

  const note = await Note.findOne({ _id: id });

  return NextResponse.json({ note }, { status: 200 });
}
