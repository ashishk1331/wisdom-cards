import Image from "next/image";

export default function Home() {
  const data = {
    id: "5a6ce86f2af929789500e821",
    author: "Fred Brooks",
    en: 'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.',
  };
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="h-full w-full flex items-center justify-around">
        <img
          src={`/api?en=${data["en"]}&author=${data["author"]}&index=${45}`}
          alt="card"
          className="shadow-xl h-[500px]"
        />
        <p>card</p>
      </div>
    </main>
  );
}
