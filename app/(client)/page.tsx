// import { video } from "../../../src/utils/video";
// import Hero from "../../components/Hero";
// import { video } from "../../utils/video";
import Plans from "@/components/Plans";
import Title from "@/components/Title";
// import Showcase from "../../components/Showcase";
// import VideoItem from "../../components/VideoItem";

export default function Home() {
  // const { videos } = video;

  

  return (
    <main className="">
      <section className="container mx-auto p-4">
        {/* <Hero />
      <Showcase />
      <div className="container p-4 m-auto my-24">
      <h2 className="text-3xl mb-16 font-extrabold text-gray-800 text-center">Recent Renderings</h2>
      <div className="my-6 grid lg:grid-cols-2 2xl:grid-cols-3  gap-4">
      {videos.slice(-3).map((video, index) => (
        <VideoItem key={index} video={video} />
        ))}
        </div>
        </div> */}
        <Title title="Top plans" />
        <Plans />
      </section>
    </main>
  );
}
