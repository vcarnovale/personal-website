import { useState } from "react"

export function Dropmen({ dropbuttons, drophref }) {
    return (
        <div className="lg:hidden absolute bg-black left-0 top-15 w-full">
            <nav className="flex flex-col items-center space-y-3" aria-label="mobile">
                {dropbuttons.map((dbutton) => {
                    return <a key={dbutton} className="cursor-pointer text-white w-full text-center hover:opacity-90">{dbutton}</a>
                })}
            </nav>
        </div>
    )

}

function ShowButtons({ menubuttons, menuhref }) {
    return (
        <div>
            <nav class="hidden lg:block space-x-15 text-lg pr-15 text-white font-semibold" aria-label="main">
                {menubuttons.map((mbutton) => {
                    return <a key={mbutton} className="cursor-pointer">{mbutton}</a>
                })}
            </nav>
        </div>
    )

}




export default function Pageheader({ title, href, buttons }) {
    const [open, setOpen] = useState(false);
    return (

        <div className="bg-black max-w-full w-full mx-auto p-4 flex justify-between items-center fixed ">
            <button className="text-lg pl-5 font-bold font text-white">{title}</button>
            <div>
                {/*We set the button to handle on click if its clicked it opens up our hamburger menu*/}
                <button id="mobile-open-button" className="lg:hidden focus:outline-none text-2xl cursor-pointer text-white" onClick={() => setOpen(!open)}>&#9776;</button>
                {
                    (() => {
                        if (open) {
                            return (<Dropmen dropbuttons={buttons} drophref={href} />)
                        }

                    })()

                }
                <ShowButtons menubuttons={buttons} menuhref={href} />
                


            </div>
        </div>

    )
}

