import '../App.css';
import { withRouter } from 'react-router-dom';

function Resume() {
  return (
    <>
      <div className="bg-gray-950 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mt-4">
            <p className="text-xl font-bold">EDWIN OLIVARES</p>
            <p className="text-sm text-gray-600">
              Los Angeles, CA | 424.236.0184 |{' '}
              <a href="http://www.edwinolivares.com" className="text-gray-600 hover:text-gray-300">
                www.edwinolivares.com
              </a>{' '}
              |{' '}
              <a href="mailto:mail@edwinolivares.com" className="text-gray-600 hover:text-gray-300">
                mail@edwinolivares.com
              </a>
            </p>
            <h2 className="pt-10 text-2xl font-bold">Experience</h2>
            <div className="mt-4">
              <p className="font-bold">Secure Tech Solutions</p>
              <p className="text-gray-600">
                Oct. 2023 - Present Full Stack Developer - JavaScript, React, Node
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Spearheaded the development of a phishing training tool, significantly enhancing
                  cybersecurity training for client companies. The suite includes features for
                  simulated phishing campaigns, real-time tracking of employee interactions, and
                  comprehensive analytics to assess training effectiveness.
                </li>
                <li>
                  Enhanced cybersecurity tool suite with user-friendly features, including
                  customizable email templates and efficient email management, to deliver a secure
                  and personalized experience.
                </li>
                <li>
                  Led the tool suite from concept to launch, managing all aspects of development and
                  maintenance. Demonstrated agility in deploying new technologies and rapidly
                  delivering feature updates, directly contributing to the company's revenue growth
                  and client satisfaction.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-bold">Raytheon</p>
              <p className="text-gray-600">
                Jan. 2023 - Jun. 2023 Software Engineer 1 - C#, SQL, .NET
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Led development of an Online Transaction Processing system for an existing tool
                  supporting multiple classified programs that utilize the RS-232 radar system with
                  a team of 6 other engineers using Microsoft SQL Server and .NET framework.
                </li>
                <li>
                  Achieved a 40% increase in system performance through strategic use of caching.
                  Optimizations to queries using user session data reduced the amount of computing
                  resources needed and cache misses.
                </li>
                <li>
                  Authored comprehensive technical documentation highlighting design choices and
                  potential bottlenecks in the system. Practiced the Scrum methodology and provided
                  regular progress updates to senior management.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-bold">Raytheon</p>
              <p className="text-gray-600">
                Jun. 2022 - Jan. 2023 Software Engineer Intern - DOORs
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Cross-checked program requirements from customer meetings with DOORs to ensure
                  accurate requirement identifiers and up-to-date descriptions.
                </li>
                <li>
                  Utilized resources from radar programs to create software test descriptions and
                  software test procedure documents for customers.
                </li>
              </ul>
            </div>
            <h2 className="pt-10 text-2xl font-bold">Personal Projects</h2>
            <div className="mt-4">
              <p className="font-bold">Spotify Media Player</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Developed a React-based music application utilizing the Spotify Developer API,
                  enabling dynamic media control and a customized listening experience.
                </li>
                <li>
                  Created a REST API to handle all incoming requests. Data required to create a
                  user’s listening profile and track leaderboard were stored in a PostgreSQL
                  database managed with Prisma.
                </li>
                <li>
                  Deployed a CI/CD pipeline using GitHub Actions and AWS for quick updates and ease
                  of maintenance.
                </li>
              </ul>
            </div>
            <h2 className="pt-10 text-2xl font-bold">Education</h2>
            <div className="mt-4">
              <p className="font-bold">California State Polytechnic University: San Luis Obispo</p>
              <p className="text-gray-600">June 2022 Bachelor of Science in Computer Science</p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    JavaScript
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    Python
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    SQL
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    PostgreSQL
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    React
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    Node
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    Tailwind
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    Primsa
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    MJML
                  </span>
                </li>
                <li>
                  <span className="bg-gray-950 rounded-lg px-3 py-1 text-sm font-semibold">
                    Git
                  </span>
                </li>
                {/* Add more skills as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(Resume);
