


export function Smallcard({ img, title, description, optional }) {

    // HOVER COLOUR #f3f5fd grid-rows-1 grid-cols-3
    return (
        <button className="max-w-full grid grid-rows-1 grid-cols-[1fr_7fr_1fr] auto-rows-max gap-5 h-25 cursor-pointer hover:bg-[#f3f5fd]">
            <img className="h-20 w-20 justify-self-center place-self-center" src={`${img}`}/>
            <div className="w-full justify-self-start flex flex-col text-left text-wrap">
                <h1 className="">{title}</h1>
                <p1>{description}</p1>
            </div>
            <h2 className="w-40">{optional}</h2>
        </button>
    )
}


export function Largecard() {

}