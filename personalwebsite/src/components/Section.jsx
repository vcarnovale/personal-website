


export default function Section ({ data, colour }) {
    const colours = {
        white: 'bg-[#fbf9ff] text-black',
        gray: 'bg-[#f5f7ff] text-black',
        black: 'bg-black text-white',

    };

    // Gotta use ``` not ''' top left of keybaord tick to allow variables inside of a string
    return (
        <div className={`${colours[colour]} max-w-full flex flex-col space-y-0.5 pt-[100px] xl:pl-[20%] xl:pr-[20%] not-xl:pr-[5px] not-xl:pl-[5px] py-[5%] min-h-[80vh] transition-all`}>
            {data}
        </div>
    )
}