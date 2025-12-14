import { useState } from "react"


type DropmenProps = {
    dropbuttons: string[];
    drophref?: string[];
}
export function Dropmen({ dropbuttons, drophref }:DropmenProps) {
    return (
        <div className="xl:hidden absolute bg-black left-0 top-15 w-full">
            <nav className="flex flex-col items-center space-y-3" aria-label="mobile">
                {dropbuttons.map((dbutton, index) => {
                    return <a key={dbutton} href={drophref?.[index]} className="cursor-pointer text-white w-full text-center hover:opacity-90">{dbutton}</a>
                })}
            </nav>
        </div>
    )

}

type ShowButtonsProps = {
    menubuttons: string[];
    menuhref: string[];
}
function ShowButtons({ menubuttons, menuhref }: ShowButtonsProps) {
    return (
        <div>
            <nav className="hidden xl:block space-x-15 text-xl pr-15 text-white font-semibold" aria-label="main">
                {menubuttons.map((mbutton, index) => {
                    return <a key={mbutton} href= {menuhref?.[index]} className="cursor-pointer">{mbutton}</a>
                })}
            </nav>
        </div>
    )

}



type PageheaderProps = {
    title: string;
    href?: string[];
    buttons?: string[];
}
export default function Pageheader({ title, href, buttons }: PageheaderProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (

        <div className=" max-w-full w-full mx-auto p-4 flex justify-between items-center border-b-2 border-gray-100 sticky bg-gray-900">
            <button className="text-xl pl-5 font-bold font text-white">{title}</button>
            <div>
                {/*We set the button to handle on click if its clicked it opens up our hamburger menu*/}
                <button id="mobile-open-button" className="xl:hidden focus:outline-none text-2xl cursor-pointer text-white" onClick={() => setOpen(!open)}>&#9776;</button>
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

