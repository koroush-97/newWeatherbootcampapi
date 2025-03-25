import Weather from "./components/Weather";

export default function Home() {
  return (
    <main className={" container flex justify-center items-center m-auto max-w-[800px] mt-[10%] "}>
      <Weather city={"Tehran"} />
    </main>
  );
}
