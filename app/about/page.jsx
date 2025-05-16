import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-left md:max-w-5xl">
      <div className="flex flex-col space-y-4 py-24 sm:px-28 sm:py-28 md:space-y-0  ">
        <h1 className="text-4xl font-bold text-white md:pb-4 md:text-6xl">
          About Me.
        </h1>
        <div className="flex flex-col space-y-5 sm:items-center sm:justify-center  md:flex-row md:space-y-0 md:space-x-4  ">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/edwin_icon.svg"
              alt=""
              width={350}
              height={350}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div className="text-neutral-100 md:mt-2 md:w-1/2">
            <p className="text-lg leading-7 ">
              <span className="font-bold">Hi, my name is Edwin Olivares!</span>{" "}
              I am a software engineer and developer based in{" "}
              <span className="font-bold">Los Angeles, CA.</span>
            </p>
            <br />
            <p className="text-lg leading-7">
              I have a wide range of hobbies and passions that keep me busy.
              From playing video games, traveling, and spending time outdoors
              with my siblings to playing pickup basketball, I’m always seeking
              new experiences and learning new things. This year was the first
              time I played in a fantasy football league and I came in last
              place (drafted CMC first)! I’m also a huge fan of{" "}
              <span className="italic">The Office</span>.
            </p>
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}
