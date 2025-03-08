


export function Smallcard({ img, title, description, optional }) {

    // HOVER COLOUR #f3f5fd grid-rows-1 grid-cols-3
    return (
        <button className="max-w-max min-w-full grid grid-rows-1 grid-cols-[120px_1fr] auto-rows-auto auto-cols-auto gap-5 h-[10%] min-h-[10%] cursor-pointer hover:bg-[#f3f5fd] border-2">
            <img className="h-[60px] w-[60px] justify-self-center place-self-center" src={`${img}`} />
            <div className="flex flex-row flex-wrap">
                <div className="w-[70%] justify-self-start place-self-start grid grid-rows-2 grid-cols-1 auto-rows-auto auto-cols-auto">
                    <h1 className="text-left text-wrap">{title}</h1>
                    <p1 className="text-left">{description}</p1>
                </div>
                <h2 className="flex-1 md:text-right not-md:text-left whitespace-nowrap justify-self-end place-self-start">{optional}</h2>
            </div>
        </button>
    )
}


export function Largecard() {

}