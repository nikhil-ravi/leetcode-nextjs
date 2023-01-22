import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { DarkModeButton } from "./DarkModeButton";

const NavigationBar = () => (
  <div className="w-screen mx-auto mb-2 sm-10">
    <div className="max-w-[1080px] mx-auto py-10">
      <nav className="w-full py-4 mx-auto flex items-center">
        <Link href="/" className="flex-grow text-left">
          <div className="text-2xl md:text-2xl lg:text-3xl font-burtons">
            scuffedcode
          </div>
        </Link>
        <div className="flex-shrink p-0 flex space-x-8">
          <DarkModeButton className="w-[48dp] h-[48dp]" />
          <a
            href="https://www.linkedin.com/in/nikhil--ravi/"
            aria-label="Linkedin"
            aria-labelledby="Linkedin"
          >
            <AiFillLinkedin className="cursor-pointer text-xl w-[48dp] h-[48dp]" />
          </a>

          <a
            href="https://scholar.google.com/citations?user=Ka5q7nIAAAAJ&hl=en"
            aria-label="GoogleScholar"
            aria-labelledby="GoogleScholar"
          >
            <SiGooglescholar className="cursor-pointer text-xl w-[48dp] h-[48dp]" />
          </a>

          <a
            href="https://github.com/ChrisLawrieNikhilRavi/leetcode-nextjs"
            aria-label="GitHub"
            aria-labelledby="GitHub"
          >
            <AiFillGithub className="cursor-pointer text-xl w-[48dp] h-[48dp]" />
          </a>
        </div>
      </nav>
    </div>
  </div>
);

export default NavigationBar;
