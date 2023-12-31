import '../App.css';
import { withRouter } from 'react-router-dom';

function Resume() {
  return (
    <>
      <div className="flex-wrap md:flex pt-6 justify-center">
        <div className="mx-2 text-center font-extralight ">Los Angeles, CA</div>
        <span className="invisible md:visible">|</span>
        <div className="mx-2 text-center font-extralight ">424.236.0184</div>
        <span className="invisible md:visible">|</span>
        <div className="mx-2 text-center font-extralight ">edwinolivares123@gmail.com</div>
        <div className="mx-2 text-center font-extralight ">
          <a href=" https://www.linkedin.com/in/ejo-3914811a1" className="hover:underline"></a>
        </div>
      </div>
      <div className="flex-col text-center">
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded my-5 md:my-10  dark:bg-gray-600" />
        <div className="font-bold text-xl my-2">Skills</div>
        <div className="font-extralight my-2">Languages: JavaScript, Python</div>
        <div className="font-extralight my-2">
          Technologies: Node, React, Express, Tailwind, Vite, Render, Flask, MongoDB, Prisma, Git,
          Docker, VIM
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded my-5 md:my-10 dark:bg-gray-600" />
        <div className="font-bold text-xl my-2">Education</div>
        <div className="font-extralight my-2 mx-2">
          California State Polytechnic University: San Luis Obispo
        </div>
        <div className="font-extralight my-2 mx-2">Bachelor of Science in Computer Science</div>
        <div className="font-extralight my-2 mx-2">Major GPA: 3.4</div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 mx-6">
            Notable Courses: Data Structures (Python) • Project-Based Object Oriented Programming
            and Design (Java) • Design and Analysis of Algorithms (Java) • Introduction to Data
            Science (Python) • Intro to Privacy • Intro to Distributed Computing • Theory of
            Computation 1
          </div>
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded my-5 md:my-10  dark:bg-gray-600" />
        <div className="font-bold text-xl my-2">Professional Experience</div>
        <div className="font-light my-2 mx-6">Raytheon – Software Engineer 1 </div>
        <div className="font-extralight my-2">Jan 2023 – May 2023</div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Led development of an Online Transaction Processing system for an existing tool
              suite supporting multiple classi ed programs that utilize the RS-232 radar systems with
              a team of 6 other engineers using Microsoft SQL Server and .NET framework. All designs
              had to be defended to a board of project directors to ensure the most optimal schema
              for the client&apos;s use.
            </p>
            <p>
              • Leveraged caches and parallelism leading to a 40% gain in performance. Optimizations
              involved reducing cache misses and designing an optimal schema.
            </p>
            <p>
              • Created an in-depth technical document highlighting design choices and potential
              weak points in the system. Practiced the Scrum methodology and provided regular
              progress updates to senior management.
            </p>
          </div>
        </div>
        <div className="font-light my-2 mx-6">Raytheon – Software Engineer Internship </div>
        <div className="font-extralight my-2">Jun 2022 – Jan 2023</div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Cross-checked program requirements from customer meetings with DOORs to ensure
              accurate requirement identifiers and up-to-date descriptions.
            </p>
            <p>
              • Utilized resources from radar programs to create software test descriptions and
              software test procedure documents for customers. Documents were reviewed and approved
              by the subject matter experts of the program to validate the accuracy of all
              information and procedure steps.
            </p>
          </div>
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded my-5 md:my-10 dark:bg-gray-600" />
        <div className="font-bold text-xl my-2">Projects</div>
        <div className="font-light my-2 mx-6">
          Spotify Media Player – JavaScript, React, Docker, PostgreSQL
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Utilized Spotify API endpoints to develop a React application that offered real-time
              media control and collected user data for data analysis (e.g. displaying user’s top
              tracks or music genre breakdown ).
            </p>
            <p>
              • Use the primary color of the current track’s album art to deliver a unique-looking
              page for the user.
            </p>
            <p>
              • Created a RESTful API to handle all incoming requests and store all vital data in a
              PostgreSQL database managed with Primsa.
            </p>
            <p>
              • Implemented an industry security standard via authentication/refresh tokens to
              ensure the safety of users&apos; sensitive data and to rate limit any malicious users.
            </p>
          </div>
        </div>
        <div className="font-light mt-6 mb-2 mx-6">
          College Quarter Planner Website – JavaScript, React, Node/Express
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Designed a React application allowing students to effectively plan and track their
              academic quarters.
            </p>
            <p>• Mocked UI design using Figma.</p>
            <p>
              • Implemented custom drag-and-drop functionality, used JWTs to manage user sessions,
              and practiced secure application security by using authentication/authorization best
              practices.
            </p>
            <p>
              • Created a custom Flask backend to handle the CRUD operations and manage data
              fetching to the MongoDB database.
            </p>
          </div>
        </div>
        <div className="font-light mt-6 mb-2 mx-6">
          First Party Reselling Web Application – Javascript, Python, MongoDB
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Participated in a six-week group project comprising 3 two-week sprints (with
              reviews).
            </p>
            <p>
              • Functionality of the site allows users to post/view products, sort/filter listings
              by various metrics, and built-in contact system. All necessary data was stored in a
              SQL database with custom hooks to access required resources.
            </p>
            <p>
              • The development of the website was driven by user stories and use case diagrams.
              Frontend was written in Javascript (React) and styled (CSS). The backend consisted of
              a Flask API with a MongoDB database.
            </p>
          </div>
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded my-5 md:my-10 dark:bg-gray-600" />
      </div>
    </>
  );
}
export default withRouter(Resume);
