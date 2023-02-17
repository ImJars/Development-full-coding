import React from 'react'
import { BsPinFill } from 'react-icons/bs'
import { MdOutlineBarChart } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'

function PinedCard({ date, title, description }) {
    return (
        <>
            <div>
                <div>
                    <div>
                        <BsPinFill />
                        <h1>
                            Pinned Post
                        </h1>
                    </div>
                    <h1>
                        { date }
                    </h1>
                    <h2>
                        { title }
                    </h2>
                    <h3>
                        { description }
                    </h3>
                    <div>   
                        <div>
                            <MdOutlineBarChart />
                            <h1>
                                1485
                            </h1>
                            <h2>
                                Views
                            </h2>
                        </div>
                        <font>
                            <AiOutlineEllipsis />
                        </font>
                        <div>
                            <h1>
                                27
                            </h1>
                            <h2>
                                Shares
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PinedCard