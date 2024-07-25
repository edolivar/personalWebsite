import '../App.css';
import { withRouter } from 'react-router-dom';

function Projects() {
  const data = [
    {
      name: 'BioVizit',
      link: 'https://biovizit.webflow.io/',
      description:
        'At Biovizit, I played a pivotal role in setting up the entire infrastructure for their product. I was responsible for designing and implementing a secure system for capturing user credentials and managing the onboarding process. Additionally, I developed the entire website to showcase and support their product, ensuring a seamless and user-friendly experience for new users.',
      languages: ['JavaScript', 'MemberStack', 'Webflow']
    },
    {
      name: 'Aremes Fermentis',
      link: 'https://aremesfermentis.com/',
      description:
        "A meticulously crafted redesign for a boutique skincare company's retail space. The revitalized aesthetic seamlessly blends elegance with functionality, creating an inviting environment that accentuates the brand's commitment to premium skincare.",
      languages: ['Shopify']
    },
    {
      name: 'Jamify',
      link: 'https://jamify-95p0.onrender.com/',
      description:
        'Introducing Jamify, an innovative app revolutionizing the way you share and discover music with friends. Currently, in beta, Jamify offers a seamless platform for enhancing your music-sharing experience. Stay tuned for forthcoming features and enhancements as we continue to refine your music journey. Since it is on a free instance on render please reload the page after a minute or two !',
      languages: ['JWT', 'React', 'Node', 'Primsa', 'Express']
    },
    {
      name: 'Spotify Media Player',
      link: 'https://spotify-mediaplayer-edolivar.onrender.com/',
      description:
        "Utilized Spotify API endpoints to craft a React application, enabling real-time media control and gathering user data for insightful analysis, such as showcasing top tracks and music genre preferences.\nIncorporated the primary color of the current track’s album art to create a distinct visual presentation for the user interface.\nEstablished a RESTful API to efficiently manage incoming requests and store essential data in a PostgreSQL database, effectively orchestrated with Prisma.\nImplemented a robust security protocol utilizing authentication and refresh tokens, adhering to industry standards. This ensured the utmost safety of users' sensitive data and enforced rate limiting to deter potential malicious usage.",
      languages: ['JWT', 'React', 'Node', 'Primsa', 'Express']
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
