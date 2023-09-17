import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import NoteContainer from "./NoteContainer";

interface NoteType {
  _id: string;
  title: string;
  description: string;
}

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    if (res.ok) {
      return { data };
    }
  } catch (error) {
    console.log("Error loading note:", error);
  }
};

export default async function NoteList() {
  // const { data } = (await getTopic()) as { data: NoteType[] };

  const { data } = (await getTopic()) as { data: NoteType[] };

  return (
    <div className="flex flex-col gap-4">
      {data?.map((note) => (
        <NoteContainer
          key={note._id}
          title={note.title}
          description={note.description}
        />
        // <div className="flex justify-between dark:bg-white bg-[#0d1117] shadow-md md:rounded-md p-4">
        //   <div key={note._id}>
        //     <h1 className="text-neutral-100 dark:text-neutral-900 font-bold">
        //       {note.title}
        //     </h1>
        //     <p className="text-neutral-500 ">{note.description}</p>
        //   </div>

        //   <div className="flex flex-col justify-between">
        //     <Link href={`/addNote`}>
        //       <FaRegEdit className="text-neutral-100 dark:text-neutral-900 cursor-pointer" />
        //     </Link>

        //     <FaRegTrashAlt className="text-neutral-100 dark:text-neutral-900 cursor-pointer" />
        //   </div>
        // </div>
      ))}
    </div>
  );
}
