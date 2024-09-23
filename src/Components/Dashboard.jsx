import '../App.css';
import { withRouter } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Dashboard({ history }) {
  const [navigation, setNav] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '/Projects', current: false },
    { name: 'Resume', href: '/Resume', current: false },
    { name: 'Current Project', href: 'https://youtube.com', current: false }
  ]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  console.log(navigation);

  return (
    <Disclosure as="nav" className="bg-gray-950 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <span className="font-bold cursor-pointer" onClick={() => history.push('/')}>
                edwin olivares
              </span>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          let res = [];
                          navigation.forEach((i) => {
                            if (item.href === i.href) {
                              res.push({ name: i.name, href: i.href, current: true });
                            } else {
                              res.push({ name: i.name, href: i.href, current: false });
                            }
                          });
                          setNav(res);

                          // Check if the link is an external URL
                          if (item.href.startsWith('http')) {
                            window.location.href = item.href; // For external URLs
                          } else {
                            history.push(item.href); // For internal routes
                          }
                        }}
                        className={classNames(
                          item.current
                            ? 'bg-gray-700 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  onClick={() => {
                    let res = [];
                    navigation.forEach((i) => {
                      if (item.href === i.href) {
                        res.push({ name: i.name, href: i.href, current: true });
                      } else {
                        res.push({ name: i.name, href: i.href, current: false });
                      }
                    });
                    setNav(res);
                    history.push(item.href);
                  }}
                  className={classNames(
                    item.current
                      ? 'flex bg-gray-900 text-white w-full '
                      : 'flex w-full text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default withRouter(Dashboard);
