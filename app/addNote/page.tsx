"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const router = useRouter();

  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description } = formState;

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 2000);
      }
    } catch (error) {
      throw new Error("Failed to create a Note");
    }
  };

  return (
    <section className="px-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
          value={formState.title}
        />

        <input
          type="text"
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          value={formState.description}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
