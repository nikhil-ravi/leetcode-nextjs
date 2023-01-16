"use client";
import { Chip } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export default function FourOhFour() {
  return (
    <div className="flex-col w-full mx-auto box-border min-h-[100vh] items-center text-center justify-center">
      <div>
        <div className="px-4 mx-auto">
          <div className="mt-[10em] -mx-4 relative min-h-[1px] px-4">
            <div class="flex min-h-[1px] px-4 justify-center items-center mx-auto mb-4">
              <strong className="font-sedgwick text-9xl">404</strong>
            </div>

            <div class="min-h-[1px] px-4 msg">
              <h2>
                <strong>Page Not Found</strong>
              </h2>
              <p>Sorry, but that question has not yet been developed...</p>
              <br />
              <Link href="/" className="text-center">
                <Chip
                  value="Back to Questions"
                  className="text-primary-800 dark:text-primary-100 bg-inherit border-[#ccc]"
                  icon={
                    <AiFillHome className="text-primary-800 dark:text-primary-100 text-lg" />
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
