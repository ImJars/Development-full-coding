import React from "react";
import Img from  './assets/react.svg'
import styled from "styled-components";
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

const ContentWraped = styled.div`
    .content-wrapped{
        margin-left: auto;
        margin-right: auto;
        max-width: 75rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }
`

function Home() {
    return (
        <>
        <ContentWraped
            className="bg-primary text-white"
        >
            <section
                className="pt-52 pb-28"
            >
                <div className="content-wrapped">
                    <div className="relative">
                        <div
                            className="relative z-10"
                        >
                            <h1 className="text-4xl text-text-general">Hi!</h1>
                            <h2 className="text-7xl leading-none font-bold mb-6">
                                I'm&nbsp;
                            <font className="text-text-purple">Angel</font>
                                &nbsp;Ramirez,
                            </h2>
                            <h3 className="text-2xl text-text-general">
                                a full-stack web developer
                            </h3>
                        </div>
                        <div 
                            className="flex mt-8"
                        >
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
                        <div 
                            className="mt-36"
                        >
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
                        <div
                            className="block absolute -top-10 right-0 z-0 overflow-hidden"
                        >
                            <img 
                                className="w-80" 
                                src={ Img } 
                                alt="" 
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="bg-primary block -mt-16 mb-24"
            >
                <div
                    className="content-wrapped"
                >
                    <div>
                    <div class="border border-text-general border-opacity-25">
                        esto es una pueba
                    </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </ContentWraped>
        </>
    );
    }

export default Home;
