import { ReactNode } from 'react';

interface MenuItem {
  icon: ReactNode;
  title: string;
  subItem?: MenuItem;
}

export interface PianoMenuProps {
  items: MenuItem[];
}

export function PianoMenu(props: PianoMenuProps) {
  return (
    <ul
      className="flex flex-col border-black border-4 w-auto mx-6
      lg:w-96 lg:mx-auto mt-16 rounded-3xl"
    >
      {props.items.map((x) => (
        <li
          key={x.title}
          className="relative text-left  border-t-4 first:border-t-0"
        >
          <button className="flex gap-4 text-2xl font-bold p-8">
            <span>{x.icon}</span>
            <span>{x.title}</span>
          </button>
          {x.subItem && (
            <button
              className="absolute pl-4 flex gap-2 w-60 right-0 -bottom-6 bg-black
            text-white rounded-l-xl z-10 p-2 py-3 font-semibold text-left"
            >
              <span>{x.subItem.icon}</span>
              <span>{x.subItem.title}</span>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default PianoMenu;
