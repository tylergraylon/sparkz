"use client";
import { Menu, Transition, Disclosure, Dialog } from "@headlessui/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState, memo } from "react";
import { CommunityMenu, ResourcesMenu } from "./Header";
import { ButtonConnect } from ".";

type Props = {
  name: string;
  items: { name: Props["name"]; link: string }[];
  col?: boolean;
  onClose?: Dispatch<SetStateAction<boolean>>;
};

export default function MenuPopover({ name, items, col }: Props) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className={`flex items-center space-x-2`}>
        {({ open }) => (
          <>
            <span className={`${open && "text-button_color"}`}>{name}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${open ? "#D7F28B" : "currentColor"}`}
              className={`w-3 h-3  transition duration-200 ease-in-out ${
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
      <Menu.Items
        className={`absolute space-x-4 px-7
         flex items-center mt-3  py-3 z-20 -left-4 bg-backgroundcolor_sec`}
      >
        {items.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <Link
                href={item.link}
                className="py-3 whitespace-nowrap cursor-pointer"
              >
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
        className="fixed top-0 right-0 lg:hidden z-10 w-full"
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
          <nav className="lg:hidden text-white bg-backgroundcolor_sec space-y-4 text-sm pb-10">
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

            <ButtonConnect className="px-6 font-mono pt-6" />

            <div className="divide-y divide-neutral-400 font-mono ">
              <div className="py-6 px-6">
                <Link href="/marketplace" onClick={() => setOpen(false)}>
                  MarketPlace
                </Link>
              </div>
              <div className="py-6 px-6">
                <Link href="#" onClick={() => setOpen(false)}>
                  Raffle To Win
                </Link>
              </div>
              <div className="py-6 px-6">
                <Link href="/about" onClick={() => setOpen(false)}>
                  Company
                </Link>
              </div>

              <MobileMenuDisclosure onClose={setOpen} {...CommunityMenu} />
              <MobileMenuDisclosure onClose={setOpen} {...ResourcesMenu} />
            </div>
          </nav>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

function MobileMenuDisclosure({ name, items, onClose: setOpen }: Props) {
  return (
    <div className="py-6 px-6">
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
              <Disclosure.Panel className="mt-4 space-y-6 px-3">
                {items.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => setOpen && setOpen(false)}
                  >
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

export const SelectPopover = memo(function SelectPopoverComponent({
  items,
}: Pick<Props, "items">) {
  const [currentItem, setCurrentItem] = useState("All");

  const selectItem = (item: string) => {
    setCurrentItem(item);
  };
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full">
        {({ open }) => (
          <div className={`flex items-center justify-between w-full px-2`}>
            <span className={`${open && "text-button_color"}`}>
              {currentItem}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${open ? "#D7F28B" : "currentColor"}`}
              className={`w-3 h-3  transition duration-200 ease-in-out ${
                open && "transform rotate-180"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        )}
      </Menu.Button>
      <Menu.Items
        className={`absolute space-y-3 px-3
         flex flex-col -left-3 mt-6  py-3 z-20 bg-backgroundcolor_sec`}
      >
        {items.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <Link
                href={item.link}
                onClick={() => selectItem(item.name)}
                className="py-3 whitespace-nowrap cursor-pointer"
              >
                {item.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
});
