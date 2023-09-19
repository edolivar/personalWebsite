import '../App.css'
import { withRouter } from 'react-router-dom'

function Resume() {
  return (
    <>
      <div className="flex-wrap md:flex pt-6 justify-center">
        <div className="mx-2 text-center font-extralight ">Los Angeles, CA</div>
        <span className="invisible md:visible">|</span>
        <div className="mx-2 text-center font-extralight ">(424)236-0184</div>
        <span className="invisible md:visible">|</span>
        <div className="mx-2 text-center font-extralight ">edwinolivares123@gmail.com</div>
        <span className="invisible md:visible">|</span>

        <div className="mx-2 text-center font-extralight ">
          <a
            href=" https://www.linkedin.com/in/edwin-jim-olivares-3914811a1"
            className="hover:underline"
          >
            https://www.linkedin.com/in/edwin-jim-olivares-3914811a1
          </a>
        </div>
      </div>
      <div className="flex-col text-center">
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-600 sm:my-8" />
        <div className="font-bold text-xl my-2">Skills</div>
        <div className="font-extralight my-2">
          Languages: JavaScript, Python, C, C++, C#, PostgreSQL, SQL, NoSQL, Bash
        </div>
        <div className="font-extralight my-2">
          Technologies: VIM, Git, React, HTML, CSS, Docker, Prisma, Flask, MongoDB, Node, Express
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-600 sm:my-8" />
        <div className="font-bold text-xl my-2">Education</div>
        <div className="font-extralight my-2">
          California State Polytechnic University: San Luis Obispo
        </div>
        <div className="font-extralight my-2">Bachelor of Science in Computer Science</div>
        <div className="font-extralight my-2">Major GPA: 3.4</div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 ">
            Notable Courses: Data Structures (Python) • Project-Based Object Oriented Programming
            and Design (Java) • Design and Analysis of Algorithms (Java) • Introduction to Data
            Science (Python) • Intro to Privacy • Intro to Distributed Computing • Theory of
            Computation 1
          </div>
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-600 sm:my-8" />
        <div className="font-bold text-xl my-2">Professional Experience</div>
        <div className="font-light my-2">Raytheon – Software Engineer – C#, SQL</div>
        <div className="font-extralight my-2">Jun 2022 – April 2023</div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left">
            <p>
              • Designed and implemented Online Transaction Processing for an existing project
              (RS-232 Analysis Tool Suite).
            </p>
            <p>
              • Prior to implementation design decisions were to be justified to the project manager
              to ensure an efficient (storage and performance) schema.
            </p>
            <p>
              • Design changes could handle several gigabytes of data and optimizations lead to
              performance gains of up to 40%. • Project consisted of two-week sprints where user
              stories were to be completed accompanied by daily scrum meetings with the whole team.
            </p>
          </div>
        </div>
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-600 sm:my-8" />
        <div className="font-bold text-xl my-2">Projects</div>
        <div className="font-light my-2">
          Spotify Media Player – JavaScript, React, Docker, PostgreSQL
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left">
            <p>
              • Utilized Spotify API endpoints to develop a web application that offered real-time
              media control and utilized real-time user data to display the listeners top tracks.
            </p>
            <p>
              • The website displays the song information (song name, artist, album cover art) along
              with changing the background color of the site based on the primary colors detected in
              the album art.
            </p>
            <p>
              • Implementation of the following development patterns: CRUD, RESTful API, hooks, and
              authorization tokens.
            </p>
          </div>
        </div>
        <div className="font-light mt-6 mb-2">
          College Quarter Planner Website – Javascript, Python, MongoDB
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left">
            <p>
              • Designed a website that would allow students to plan their academic quarters. First
              iterations of the website were designed in Figma.
            </p>
            <p>
              • Highlights of the site include drag-and-drop functionality, dynamic pages,
              redirects, and the implementation of cookies. In addition to a database used to store
              user data securely.
            </p>
          </div>
        </div>
        <div className="font-light mt-6 mb-2">
          First Party Reselling Web Application – Javascript, Python, MongoDB
        </div>
        <div className="font-extralight flex justify-center">
          <div className="md:max-w-2xl max-w-sm  my-2 text-left">
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
        <hr className="w-60 h-1 mx-auto bg-gray-100 border-0 rounded md:my-8 dark:bg-gray-600 sm:my-8" />
      </div>
    </>
  )
}
export default withRouter(Resume)
