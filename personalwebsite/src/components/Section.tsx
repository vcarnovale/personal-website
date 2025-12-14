import { ReactNode } from "react";


type SectionProps = {
    data: ReactNode;
    colour: string;
    idname: string;
}
export default function Section ({ data, colour, idname }:SectionProps) {
    const colours = {
        white: 'bg-[#fbf9ff] text-black',
        gray: 'bg-[#f5f7ff] text-black',
        grayish: 'bg-[#ECEFFF] text-black',
        black: 'bg-black text-white',

    };

    // Gotta use ``` not ''' top left of keybaord tick to allow variables inside of a string#f5f7ff
    return (
        <div className={`${colours[colour]} max-w-full flex flex-col space-y-0.5 pt-[100px] xl:pl-[28%] xl:pr-[28%] not-xl:pr-[5px] not-xl:pl-[5px] pb-[3%] min-h-[30vh] transition-all`} id={idname}>
            {data}
        </div>
    )
}