import { Playwrite_DE_Grund } from "next/font/google";

const Playwrite = Playwrite_DE_Grund({ subsets: ["Playwrite_DE_Grund"] });

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time");
  const data = await res.json();
  return data.currentTime;
};

export default function Home() {
  const time = getTime();

  return (
    <div className=" ">
      <h1 className="my-10 text-4xl font-bold text-center">
        Welcome to Hero Next App
      </h1>
      <h1 className="text-2xl font-semibold text-center">Time now</h1>
      <p className={`text-center text-5xl  ${Playwrite.className}`}>{time}</p>
    </div>
  );
}
