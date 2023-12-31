import '../App.css';
import { withRouter } from 'react-router-dom';

function Projects() {
  const data = [
    {
      name: 'Spotify Stats Tracker',
      link: 'https://github.com/edolivar/Spotify-MediaPlayer',
      description:
        'Utilized Spotify API endpoints to develop a web application that offered real-time media control and utilized real-time user data to display the listeners top tracks.The website displays the song information (song name, artist, album cover art) along with changing the background color of the site based on the primary colors detected in the album art.Implementation of the following development patterns: CRUD, RESTful API, hooks, and authorization tokens.',
      languages: ['JavaScript', 'Express', 'Render', 'PostgreSQL']
    },
    {
      name: 'WeatherbyZIP',
      link: 'https://github.com/edolivar/weatherApp',
      description:
        'Implemented geolocation functionality to provide real-time weather data to users based on their geographic location. The website seamlessly accommodates both geolocation-based weather updates and manual input of a five-digit zip code, with robust error handling to validate and handle any inaccuracies or invalid zip code entries. This feature ensures a comprehensive and accurate weather experience for all users, enhancing the usability and reliability of the platform.',
      languages: ['JavaScript', 'Express', 'React']
    },
    {
      name: 'First Party Reselling Web Application',
      link: null,
      description:
        'Contributed to a six-week group project, organized into three two-week sprints, following a structured review process. The platform allows users to post and view products, offering sorting, filtering options, and an integrated contact system. Utilized a SQL database with custom hooks for efficient data access. Development driven by user stories and use case diagrams, with the frontend in JavaScript (React) and CSS, and the backend in Flask with MongoDB.',
      languages: ['JavaScript', 'Flask', 'MongoDB']
    }
  ];

  return (
    <>
      <div className="flex justify-center ">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Projects
        </h1>
      </div>
      <div className="flex-wrap md:flex justify-center">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                {/* <img className="w-full" src="" alt="Sunset in the mountains" /> */}
                <div className="px-6 py-1">
                  <a
                    href={elem.link ? elem.link : '/Projects'}
                    className="font-bold hover:underline text-white-200 text-xl"
                  >
                    {elem.name}
                  </a>
                  <p className="text-gray-300 pt-6">{elem.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {elem.languages.map((e, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block bg-gray-950 border border-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                      >
                        {e}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default withRouter(Projects);
