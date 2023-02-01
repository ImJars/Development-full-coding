import React from "react";
import { 
    SiJavascript, 
    SiReact, 
    SiTailwindcss, 
    SiPython, 
    SiSolidity,
    SiVisualstudiocode,
    SiFramer
} from "react-icons/si";
import { HiOutlineDotsVertical } from "react-icons/hi";
import IconHome from "./components/icon-home";

function Home() {
    return (
        <>
        <section
            className="w-full h-screen flex justify-center items-center
                                bg-primary text-white"
        >
            <div className="max-w-display content-between">
                <div className="relative">
                    <div>
                        <h1 className="text-lg text-text-general">Hi!</h1>
                        <h2 className="text-7xl font-bold mb-4">
                            I'm&nbsp;
                        <font className="text-text-purple">Angel</font>
                            &nbsp;Ramirez
                        </h2>
                        <h3 className="text-xl text-text-general">
                            a full-stack web developer
                        </h3>
                    </div>
                    <div className="flex mt-6">
                        <button
                            className="bg-text-purple text-white
                                                            rounded-lg px-8 py-2 font-semibold"
                        >
                            Get in Touch
                        </button>
                        <h1
                            className="flex items-center ml-4 text-text-purple 
                                                        animate-pulse"
                        >
                            ● Available for hire
                        </h1>
                    </div>
                    <div>
                        <h1>
                            current favorite tech stack/tools:
                        </h1>
                        <ul
                            className="flex items-center mt-2 space-x-3"
                        >
                            <IconHome 
                                classNames={'hover:text-js-icon'}
                                icon={ <SiJavascript /> }
                            />
                            <IconHome 
                                classNames={'hover:text-react-icon'}
                                icon={ <SiReact /> }
                            />
                            <IconHome 
                                classNames={'hover:text-tailwind-icon'}
                                icon={ <SiTailwindcss /> }
                            />
                            <IconHome 
                                classNames={'hover:text-python-icon'}
                                icon={ <SiPython /> }
                            />
                            <IconHome 
                                classNames={'hover:text-solidity-icon'}
                                icon={ <SiSolidity /> }
                            />
                            <li
                                className="text-xl text-text-general"
                            >
                                <HiOutlineDotsVertical />
                            </li>
                            <IconHome 
                                classNames={'hover:text-vs-code-icon'}
                                icon={ <SiVisualstudiocode /> }
                            />
                            <IconHome 
                                classNames={'hover:text-framer-icon'}
                                icon={ <SiFramer /> }
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
    }

export default Home;
