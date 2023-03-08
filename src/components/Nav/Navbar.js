import Logo from "./Logo";

const navigation = [
  { name: "front", to: "/front", current: true },
  { name: "Plumbing", to: "/plumbing", current:  true }, 
  { name: "Home Cleaning Services", to: "/cleaning", current: true },
  { name: "Gardening Services", to: "/gardening", current: true },
  { name: "Handyman", to: "/handyman", current: true },
  { name: "Car Repair", to: "/car", current: true },
];

// How to make the thing you click on be "active/curent" how can I make this work?
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// How to make the thing you click on be "active/curent" how can I make this work?
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  // console.log(resolvedPath)
  const isCurrent = useMatch({ path: resolvedPath.pathname, end: true })
  console.log(isCurrent)
  const className = classNames(
    isCurrent
      ? "bg-grey-400 text-white font-bold"
      : "text-white hover:bg-grey-600 hover:text-white hover:font-semibold",
    "px-3 py-2 rounded-md text-sm font-medium"
  )

  return (
    <li className={isCurrent ? "current" : ""}>
      <Link to={to} {...props} current={!isCurrent} className={className}>
        {children}
      </Link>
    </li>
  )
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-black-500">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-10x12 px-12 sm:px-0 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-grey-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center bg:items-stretch bg:justify-center bg-black">

                {/* LOGO ON NAVBAR */}
                <Logo />

                {/* Adds links for various "pages onto the Nav menu" */}
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-5">
                    {navigation.map((item) => (
                      <CustomLink
                        key={item.name}
                        to={item.to}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </CustomLink>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-3 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? "bg-grey-400 text-white font-bold"
                      : "text-white hover:bg-grey-600",
                    "block px-5 py-4 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
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