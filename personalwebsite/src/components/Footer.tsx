import { SocialMediaButton } from './Buttons'


type PageFooterProps = {
    information: string;
}
export default function PageFooter({ information }: PageFooterProps) {
    return (

        <div className="bg-gray-900 w-full p-4 flex items-center">

            <p className='text-white whitespace-nowrap text-center'>{information}</p>
            <div className="w-full  h-auto py-8 flex items-center justify-end align-bottom gap-4 flex-wrap flex-1">
                <SocialMediaButton href="https://github.com/vcarnovale" mediaSite='github' title='GitHub'></SocialMediaButton>
                <SocialMediaButton href="https://www.linkedin.com/in/vitocarnovale/" mediaSite='linkedin' title='Linkedin'></SocialMediaButton>
                <SocialMediaButton href="vitop.carnovale@gmail.com" mediaSite='email' title='Email'></SocialMediaButton>
            </div>
        </div>

    )
}