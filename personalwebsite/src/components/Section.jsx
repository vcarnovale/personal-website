


export default function Section ({ data, colour }) {
    const colours = {
        white: 'bg-[#fbf9ff] text-black',
        gray: 'bg-[#f5f7ff] text-black',
        black: 'bg-black text-white',

    };

    // Gotta use ``` not ''' top left of keybaord tick to allow variables inside of a string
    return (
        <div className={`${colours[colour]} max-w-full flex flex-col space-y-0.5 pt-[100px] lg:pl-[20%] lg:pr-[20%] not-lg:pr-[5px] not-lg:pl-[5px] py-[5%] min-h-[130vh] transition-all`}>
            {data}
        </div>
    )
}