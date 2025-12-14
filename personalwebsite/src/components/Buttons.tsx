import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export function Navbutton(){
    return(
        /*In the middle is hamburger display*/
        <>
        <button id="mobile-open-button" className="sm:hidden focus:outline-none text-2xl">&#9776;</button>
        </>

    )

}

type SocialMediaButtonProps = {
    href: string;
    mediaSite: 'github'|'linkedin'|'email';
    title?: string;
}
export function SocialMediaButton({href, mediaSite, title}: SocialMediaButtonProps){
    const sites = {
        github: faGithub,
        linkedin: faLinkedinIn,
        email: faEnvelope,
    };
    return(
        <>
            <a className="w-10 h-10 flex items-center justify-center relative bg-white overflow-hidden rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-110" rel="noopener noreferrer" href={href} target="_blank" title={title}>
                <FontAwesomeIcon className="relative z-10 text-gray-900 bg-white transform transition duration-300 ease-in-out hover:scale-110 text-3xl" icon={sites[mediaSite]} />
            </a>
        </>
    )
}