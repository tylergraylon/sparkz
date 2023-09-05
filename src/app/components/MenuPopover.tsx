"use client";
import { Menu, Transition, Disclosure, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { CommunityMenu, ResourcesMenu } from "./Header";

type Props = {
  name: string;
  items: { name: Props["name"]; link: string }[];
};

export default function MenuPopover({ name, items }: Props) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center space-x-2">
        {({ open }) => (
          <>
            <span className={`${open && "text-button_color"}`}>{name}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${open ? "#D7F28B" : "currentColor"}`}
              className={`w-3 h-3 transition duration-200 ease-in-out ${
                open && "transform rotate-180"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </>
        )}
      </Menu.Button>
      <Menu.Items className="absolute flex space-x-4 items-center mt-3 px-7 py-3 -left-4 bg-backgroundcolor_sec">
        {items.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <Link href={item.link} className="py-3 whitespace-nowrap">
                {item.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

type MobilePopoverProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function MobileMenuPopover({ open, setOpen }: MobilePopoverProps) {
  console.log(open);

  return (
    <Transition show={open}>
      <Dialog
        as="div"
        onClose={() => setOpen(false)}
        className="fixed top-0 right-0 md:hidden z-10 w-full"
      >
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
          as="div"
          className=""
        >
          <nav className="md:hidden text-white bg-backgroundcolor_sec space-y-4 text-sm pb-10 divide-y divide-neutral-400">
            <div className="flex items-center justify-between px-5 pt-4">
              <div className="text-lg space-x-2">
                <span className="rounded-full px-4 py-1 bg-white"></span>
                <span>SPARKZ</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setOpen(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="px-6 font-mono pt-4">Connect Wallet</div>

            <div className="divide-y divide-neutral-400 font-mono ">
              <div className="py-4 px-6">
                <Link href="#">Company</Link>
              </div>
              <div className="py-4 px-6">
                <Link href="#">MarketPlace</Link>
              </div>
              <MobileMenuDisclosure {...CommunityMenu} />
              <MobileMenuDisclosure {...ResourcesMenu} />
            </div>
          </nav>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

function MobileMenuDisclosure({ name, items }: Props) {
  return (
    <div className="py-4 px-6">
      <Disclosure>
        {({ open, close }) => (
          <>
            <Disclosure.Button className="flex items-center">
              <span className={`${open && "text-button_color"} mr-2`}>
                {name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`${open ? "#D7F28B" : "currentColor"}`}
                className={`w-3 h-3 transition duration-200 ease-in-out ${
                  open && "transform rotate-180"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Disclosure.Button>

            <Transition>
              <Disclosure.Panel className="mt-3 space-y-5 px-3">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link href={item.link} className="whitespace-nowrap">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
