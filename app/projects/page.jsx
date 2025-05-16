import React from "react";
import Link from "next/link";
import { PiFlowerTulip } from "react-icons/pi";
import { MdOutlineBiotech } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlinePlumbing } from "react-icons/md";

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <h1 className="pb-2 text-4xl font-bold text-white md:text-6xl">
          Work+Projects.
        </h1>
        <p className="pb-4 text-xl text-neutral-100">
          Here are a few side projects I&apos;ve been working on to improve my
          coding skills.
        </p>
        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="https://biovizit.webflow.io/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <MdOutlineBiotech
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className="font-semibold text-neutral-500 dark:text-neutral-300">
                    BioVizit
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="https://aremesfermentis.com/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <PiFlowerTulip
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className=" font-semibold text-neutral-500 dark:text-neutral-300">
                    Aremes Fermintis
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="https://securetechsolutions.biz/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  {" "}
                  <FaLaptopCode
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className=" font-semibold text-neutral-500 dark:text-neutral-300">
                    Secure Tech Solutions
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="https://so-plumbing-inc.vercel.app/" target="_blank">
              <div className="rounded-md bg-neutral-200 p-4 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 ">
                <div className="flex flex-row items-center justify-center space-x-2">
                  {" "}
                  <MdOutlinePlumbing
                    size={30}
                    className="text-neutral-500 dark:text-neutral-300"
                  />
                  <h1 className=" font-semibold text-neutral-500 dark:text-neutral-300">
                    SO Plumbing Inc.
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section></section>
      </div>
    </main>
  );
}
