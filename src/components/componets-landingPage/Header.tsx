import { Logo } from "../componets-landingPage/Logo"

export function Header() {

    return (
        <>
            <section className="w-full bg-white">
                <div className="mx-auto flex max-w-7xl items-center h-16 py-1 box-content justify-between">
                    <div className="flex items-center space-x-2 p-4">
                        <button className="flex appearance-none p-1 text-gray-500 md:hidden">
                            <div className="flex w-5 h-5 relative justify-center items-start space-y-1 flex-col">
                                <span id="bar1" className="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
                                <span id="bar2" className="w-5/6 h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
                                <span id="bar3" className="w-full h-0.5 transition-all duration-300 rounded-full bg-gray-500"></span>
                            </div>
                        </button>
                        <a href="#_" className="text-gray-900 font-extrabold uppercase text-sm flex items-center ">
                            <a href="#home"> <Logo /> </a>
                        </a>
                    </div>
                    <nav id="navr" className="md:relative md:w-auto w-full md:mt-0 mt-16 translate-y-2 md:translate-y-0 top-0 md:pb-0 pb-3 bg-white md:bg-transparent absolute items-center md:space-x-2 text-sm font-medium text-gray-500 md:flex hidden">
                        <a href="#_" className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full">Home</a>
                        <a href="#_" className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full">Projects</a>
                        <a href="#_" className="md:rounded bg-white md:px-3 px-5 md:py-2 py-3 transition hover:bg-gray-100 md:inline block md:w-auto w-full">About</a>

                    </nav>
                    <div className="flex items-center space-x-2 text-sm pr-4 font-medium text-gray-800">

                    </div>
                </div>
            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script>
        </>
    )
}