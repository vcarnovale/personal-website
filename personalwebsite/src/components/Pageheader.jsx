
export default function Pageheader( {title, buttons} ){
    return(
        <div>
            <header className="bg">{title}</header>
            <ul>
                {buttons.map((button) => {
                    return <li key={button}><button className="cursor-pointer ">{button}</button></li>
                })}
            </ul>

        </div>

    )
}