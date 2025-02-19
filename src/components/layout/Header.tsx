import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = ["Features", "Technology", "Agents", "Pricing", "Contact"];

export default function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto fixed top-0 inset-x-0 w-full px-8 py-4 bg-gradient-to-r from-violet-950 to-fuchsia-900 flex justify-between items-center z-50 shadow-md shadow-fuchsia-400/20">
      {/* LOGO CONTENT */}
      <Link href="/">
        <div className="flex items-center lg:ml-16">
          <FaRobot className="text-fuchsia-400 text-3xl mr-2 " />
          <h1 className="text-white text-lg font-bold">
            Agentia <span className="text-fuchsia-400">World</span>
          </h1>
        </div>
      </Link>

      {/* LINK MENU for Desktop */}
      <div className="hidden md:flex lg:flex xl:flex items-center space-x-6 text-white text-lg px-20">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="link-hover"
          >
            {item}
          </Link>
        ))}
        {/* Button */}
        <button className="bg-gradient-to-r from-fuchsia-500 to-blue-500 border-2 text-white py-2 px-3 rounded-xl font-semibold transform transition-all duration-300 hover:scale-95">
          Launch Console
        </button>
      </div>

      {/* MENU CONTENT for Mobile */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="text-white w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="bg-gradient-to-r from-violet-950 to-fuchsia-900 text-white">
          {/* LOGO CONTENT */}
          <Link href="/">
            <div className="flex items-center justify-start px-4 py-2">
              <FaRobot className="text-fuchsia-400 text-3xl mr-2 " />
              <h1 className="text-white text-xl font-bold">
                Agentia <span className="text-fuchsia-400">World</span>
              </h1>
            </div>
          </Link>

          <ul className="mt-4 space-y-4 text-lg px-4">
            {navItems.map((item) => (
              <li key={item}>
                <SheetClose asChild>
                  <Link href={`#${item.toLowerCase()}`} className="link-hover">
                    {item}
                  </Link>
                </SheetClose>
              </li>
            ))}
            {/* Button */}
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 border-2 text-white font-semibold py-2 px-3 rounded-xl transform transition-all duration-300 hover:scale-95">
              Launch Console
            </button>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
