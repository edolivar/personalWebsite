import React from "react";

export default function ResourcesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl">
      <div className="py-24 sm:px-28 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-gray-800 font-bold pb-6">
            EDWIN OLIVARES
          </h1>
          <p className="text-sm text-neutral-300">
            Los Angeles, CA | 424.236.0184 |{" "}
            <a
              href="http://www.edwinolivares.com"
              className="text-neutral-300 hover:underline"
            >
              www.edwinolivares.com
            </a>{" "}
            |{" "}
            <a
              href="mailto:mail@edwinolivares.com"
              className="text-neutral-300 hover:underline"
            >
              mail@edwinolivares.com
            </a>
          </p>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-800">Experience</h2>
            <div className="mt-6">
              <h3 className="font-bold text-gray-800">Secure Tech Solutions</h3>
              <p className="text-neutral-300">
                Oct. 2023 - Present Full Stack Developer - Ruby on Rails,
                PostgreSQL
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-300">
                <li>
                  Spearheaded the development of a phishing training tool,
                  significantly enhancing cybersecurity training for client
                  companies. The suite includes features for simulated phishing
                  campaigns, real-time tracking of employee interactions, and
                  comprehensive analytics to assess training effectiveness.
                </li>
                <li>
                  Enhanced cybersecurity tool suite with user-friendly features,
                  including customizable email templates and efficient email
                  management, to deliver a secure and personalized experience.
                </li>
                <li>
                  Led the tool suite from concept to launch, managing all
                  aspects of development and maintenance. Demonstrated agility
                  in deploying new technologies and rapidly delivering feature
                  updates, directly contributing to the company&apos;s revenue
                  growth and client satisfaction.
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-bold text-gray-800">Secure Tech Solutions</p>
              <p className="text-neutral-300">
                Jun. 2024 - Jul. 2024 System Integration Engineer - Docker,
                MySQL
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-300">
                <li>
                  Oversaw and led the deployment of an asset management and
                  customer support ticket system. Managed the configuration and
                  setup of Snipe-IT for asset management and osTicket for
                  customer support, optimizing workflows for efficiency.
                </li>
                <li>
                  Responsibilities included configuring the infrastructure,
                  setting up databases, and ensuring secure data handling.
                  Provided training and support to the team, facilitating a
                  smooth transition and enhancing overall operational
                  effectiveness.
                </li>
              </ul>
            </div>
            <div className="mt-2">
              <p className="font-bold text-gray-800">Raytheon</p>
              <p className="text-neutral-300">
                Jan. 2023 - Jun. 2023 Software Engineer 1 - C#, SQL, .NET
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-300">
                <li>
                  Led development of an Online Transaction Processing system for
                  an existing tool supporting multiple classified programs that
                  utilize the RS-232 radar system with a team of 6 other
                  engineers using Microsoft SQL Server and .NET framework.
                </li>
                <li>
                  Achieved a 40% increase in system performance through
                  strategic use of caching. Optimizations to queries using user
                  session data reduced the amount of computing resources needed
                  and cache misses.
                </li>
                <li>
                  Authored comprehensive technical documentation highlighting
                  design choices and potential bottlenecks in the system.
                  Practiced the Scrum methodology and provided regular progress
                  updates to senior management.
                </li>
              </ul>
            </div>
            {/* Add other experiences in the same format */}
          </section>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-800">Projects</h2>
            <div className="mt-2">
              <p className="font-bold text-gray-800">Spotify Media Player</p>
              <ul className="list-disc list-inside ml-4 text-neutral-300">
                <li>
                  Developed a React-based music application utilizing the
                  Spotify Developer API, enabling dynamic media control and a
                  customized listening experience. Innovatively used the
                  dominant colors from album artwork to dynamically adjust the
                  user interface, enhancing user engagement.
                </li>
                <li>
                  Created a REST API to handle all incoming requests. Data
                  required to create a user’s listening profile and track
                  leaderboard were stored in a PostgreSQL database managed with
                  Prisma.
                </li>
                <li>
                  Deployed a CI/CD pipeline using GitHub Actions and AWS for
                  quick updates and ease of maintenance.
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-800">Education</h2>
            <div className="mt-6">
              <p className="font-bold text-gray-800">
                California State Polytechnic University: San Luis Obispo
              </p>
              <p className="text-neutral-300">
                June 2022 Bachelor of Science in Computer Science
              </p>
            </div>
          </section>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-800">Skills</h2>
            <ul className="grid grid-cols-3 gap-2 text-neutral-300">
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  JavaScript
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Python
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  SQL
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Node
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  React
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Ruby on Rails
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Express
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Tailwind
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Prisma
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Next.js
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  Git
                </span>
              </li>
              <li>
                <span className="bg-gray-800 text-neutral-300 rounded-lg px-3 py-1 text-sm font-semibold">
                  PostgreSQL
                </span>
              </li>
              {/* Add more skills as needed */}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
