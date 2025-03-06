


export default function Section ({ data, colour }) {
    const colours = {
        white: 'bg-[#fbf9ff] text-black',
        gray: 'bg-[#f5f7ff] text-black',
        black: 'bg-black text-white',

    };

    // Gotta use ``` not ''' top left of keybaord tick to allow variables inside of a string
    return (
        <div className={`${colours[colour]} max-w-full flex flex-col min-height pl-[15%] pr-[15%] py-[5%] min-h-[130vh] transition-all`}>
            {data}
        </div>
    )
}