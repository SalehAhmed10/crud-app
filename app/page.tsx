import Loading from "./components/Loading";
import NoteList from "./components/NoteList";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NoteList />
    </Suspense>
  );
}
