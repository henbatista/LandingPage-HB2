import { LogoBig } from "./LogoBig"
import styles from '../componets-landingPage/Avatar.module.css'

export function Avatar({ hasBorder = true, }) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src="https://avatars.githubusercontent.com/u/85231417?v=4" />
  );
}

export function Titles() {
  return (

    <><section className="pt-24 bg-gradient-to-b from-white to-gray-50 lg:pb-20 xl:px-0 px-10">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex lg:flex-row flex-col-reverse items-center">
          <div className="w-full max-w-md mt-24 transform translate-y-10 lg:mt-0 px-4 mb-12 lg:mb-0 relative">
            <Avatar />
          </div>
          <div className="w-full px-4">
            <div className="relative lg:max-w-none max-w-md mx-auto -mt-10">
              <svg className="w-16 h-16 mb-5 text-purple-900 fill-current" viewBox="0 0 504 372" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="nonzero">
                  <path d="M143.92 141.2c0 34.16 70.559 39.199 70.559 123.2 0 61.602-44.238 107.52-105.84 107.52-65.52-.559-108.64-59.359-108.64-121.52C-.001 142.88 100.799.64 163.519.64c15.68 0 44.238 11.199 44.238 30.238.004 19.047-63.836 52.086-63.836 110.32l-.001.002ZM433.44 141.2c0 34.16 70.559 39.199 70.559 123.2 0 61.602-44.238 107.52-105.84 107.52-66.078 0-109.2-58.801-109.2-120.96 0-107.52 100.8-249.76 163.52-249.76 15.68 0 44.238 11.199 44.238 30.238 0 19.047-63.277 51.527-63.277 109.77v-.008Z" className=""></path>
                </g>
              </svg>
              <LogoBig />
              <p className="text-2xl font-bold">Henrique Batista</p>
              <p className="text-lg text-gray-500">Estudante de Engenharia de Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
    </>
  )
}