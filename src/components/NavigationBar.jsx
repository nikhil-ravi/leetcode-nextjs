import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { DarkModeButton } from "./DarkModeButton";

const NavigationBar = () => (
  <nav className="flex p-10 mb-4 items-center justify-between text-center">
    <h1 className="flex-grow text-xl md:text-2xl lg:text-3xl font-burtons text-left">
      <Link href="/">scuffedcode</Link>
    </h1>
    <div className="flex-shrink p-0 flex space-x-5 text-center">
      <DarkModeButton />
      <Link href="https://www.linkedin.com/in/nikhil--ravi/">
        <AiFillLinkedin className="cursor-pointer text-xl" />
      </Link>

      <Link href="https://scholar.google.com/citations?user=Ka5q7nIAAAAJ&hl=en">
        <SiGooglescholar className="cursor-pointer text-xl" />
      </Link>

      <Link href="https://github.com/ChrisLawrieNikhilRavi/leetcode-nextjs">
        <AiFillGithub className="cursor-pointer text-xl" />
      </Link>
    </div>
  </nav>
);

export default NavigationBar;
