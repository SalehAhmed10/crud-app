import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

export default function NoteContainer(note: any, animation: string) {
  return (
    <div className={`${animation}`}>
      <div
        className={`flex justify-between dark:bg-white bg-[#0d1117] shadow-md md:rounded-md p-4
      ${animation ? animation : ""}
      
      `}
      >
        <div key={note?._id || ""}>
          <h1 className="text-neutral-100 dark:text-neutral-900 font-bold">
            {note?.title || ""}
          </h1>
          <p className="text-neutral-500 ">{note?.description || ""}</p>
        </div>

        {animation ? null : (
          <div className="flex flex-col justify-between">
            <Link href={`/addNote`}>
              <FaRegEdit className="text-neutral-100 dark:text-neutral-900 cursor-pointer" />
            </Link>

            <FaRegTrashAlt className="text-neutral-100 dark:text-neutral-900 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}
