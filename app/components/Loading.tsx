export default function Loading() {
  const n = 6; // Or something else

  return (
    // map 5 times to show 5 loading notes
    [...Array(n)].map((e, i) => (
      <div className={`animate-pulse h-20`} key={i}>
        <div className="flex justify-between dark:bg-white bg-[#0d1117] shadow-md md:rounded-md p-4 animate-pulse h-[70px]"></div>
      </div>
    ))
  );
}
