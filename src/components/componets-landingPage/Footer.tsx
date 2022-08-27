import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <section className="box-border pt-5 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid pb-7">
      <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl">
        <div className="relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
          <a href="#_" className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-start md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">Henrique Batista<span className="text-indigo-600">.</span></span>
          </a>
          <ul className="box-border flex mx-auto my-6 space-x-6">
            <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
              <a href="#home" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"><Logo /></a>
            </li>
          </ul>
          <div className="box-border right-0 flex justify-center w-full mt-4 space-x-3 border-solid md:w-auto md:justify-end md:absolute md:mt-0">
            <a href="https://www.linkedin.com/in/wellington-henrique-batista-55a83556/" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://github.com/henbatista" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700">
              <GithubLogo size={32} />
            </a>

            <a href="https://www.instagram.com/henriquebatista418/" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-blue-700 focus-within:text-blue-700">
              <InstagramLogo size={32} />
            </a>
          </div>
        </div>
        <div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 md:mt-5 md:pt-5 md:mt-6 md:pt-6">
          <p
            className="box-border mt-0 text-sm border-0 border-solid">
            &copy; 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>

  )
}