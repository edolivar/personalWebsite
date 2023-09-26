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
              • Led full development of Online Transaction Processing for a tool suite supporting
              multiple classified programs that utilize the RS-232 radar systems with a team of 6
              other engineers using Microsoft SQL Server and .NET framework. All designs had to be
              defended to a board of project directors to ensure the most optimal schema for the
              client&apos;s use.
            </p>
            <p>
              • Leveraged concepts of caches and parallelism to reduce query times of the system by
              up to 70%.
            </p>
            <p>
              • Created in-depth technical document highlighting design choices and potential weak
              points in the system; as well as, PowerPoint overview table design and high-level flow
              of execution.
            </p>
            <p>
              • The project consisted of two-week sprints where user stories were to be completed
              accompanied by daily scrum meetings with the whole team.
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
              • Leveraged resources from other programs to create a Software Test Description and
              Software Test Procedure document for customers. Documents created were revised and
              approved by the subject matter experts of the program to validate all information and
              procedure steps included within the document.
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
              • Utilized Spotify API endpoints to develop a web application that offered real-time
              media control and utilized real-time user data to display the listener’s top tracks.
            </p>
            <p>
              • The website displays the song information and changes the background based on the
              primary colors detected in the album art.
            </p>
            <p>
              • Implementation of the following development patterns: CRUD, RESTful API, hooks, and
              authorization tokens.
            </p>
          </div>
        </div>
        <div className="font-light mt-6 mb-2 mx-6">
          College Quarter Planner Website – JavaScript, React, Node/Express
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left mx-6">
            <p>
              • Leveraged geolocation of clients to give them real-time data about the weather in
              the area.
            </p>
            <p>
              • Website supported a five-digit zip code with zip code validation and intuitive error
              messaging.
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
