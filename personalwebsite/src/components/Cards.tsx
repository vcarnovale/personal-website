


type SmallCardProps = {
    img: string;  
    title: string;
    subtitle?: string;
    description: string;
    optional?: string;
    href?: string;
}
export function Smallcard({ img, title, subtitle, description, optional, href }:SmallCardProps) {

    // HOVER COLOUR #f3f5fd grid-rows-1 grid-cols-3
    return (
        <a className="max-w-max min-w-full grid grid-rows-1 grid-cols-[120px_1fr] auto-rows-auto auto-cols-auto gap-5 h-[10%] min-h-[10%] cursor-pointer hover:bg-[#f3f5fd] border-2 border-slate-100 rounded-lg" href={href} target="_blank">
            <img className="h-[60px] w-[60px] justify-self-center place-self-center" src={`${img}`} alt={title} />
            <div className="flex flex-row flex-wrap">
                <div className="w-[75%] justify-self-start place-self-start grid grid-rows-2 grid-cols-1 auto-rows-auto auto-cols-auto">
                    <div className="pb-1.5">
                    <h1 className="text-left text-wrap font-bold">{title}</h1>
                    <h1 className="text-left text-wrap ">{subtitle}</h1>
                    </div>
                    <p className="text-left">{description}</p>
                </div>
                <h2 className="flex-1 md:text-right not-md:text-left whitespace-nowrap justify-self-end place-self-start pr-1">{optional}</h2>
            </div>
        </a>
    )
}


type LargeCardProps = {
    img: string;
    title: string;
    description: string;
    href?: string;
}
export function Largecard({ img, title, description, href } : LargeCardProps) {
    return (
        <a className="max-w-max min-w-full gap-5 mb-5 flex-col place-self-center h-[400px] min-h-[20%] cursor-pointer hover:bg-[#f3f5fd] border-1 border-gray-100 rounded-md" href={href} target="_blank">
            <img className="h-[65%] w-[100%] border-1 border-gray-100 rounded-md" src={`${img}`} alt={title} />
            <div className="flex flex-col h-[35%] w-[100%] pt-3 justify-between">
                <h1 className="text-left place-self-center w-[95%] font-bold">{title}</h1>
                <p className="w-[95%] h-[70%] text-left text-wrap place-self-center">{description}</p>
            </div>
        </a>
    )
}