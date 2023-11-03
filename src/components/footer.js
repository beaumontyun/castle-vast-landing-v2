import Logo from '../../public/cv-logo-revamp.svg'
import Image from 'next/image';
import { ABeeZee } from "next/font/google"

const abeezee = ABeeZee({ subsets: ['latin'], weight: "400" })
const copyrightDate = new Date().getFullYear()

export default function footer() {
    return (
        <div className='py-10 w-full'>
            <div className="w-full sm:grid sm:grid-cols-2 sm:h-30 mx-auto text-[10px] sm:text-xs border-t-[0.5px] border-gray-500 sm:border-t-0">
                <div className='flex flex-col sm:flex sm:flex-row sm:w-full pt-5 sm:pt-0'>
                    <div className='sm:h-fit pt-3'>
                        <p>Castle Vast Limited &copy;{copyrightDate}, Hong Kong SAR.</p>
                        <p>All rights reserved.</p>
                        <div className='sm:hidden'>
                            <a href="mailto:corporate@castle-vast.com">corporate@castle-vast.com</a>
                        </div>
                    </div>
                </div>
                <div className='sm:justify-self-end sm:place-self-end w-fit h-fit hidden sm:block'>
                    <a href="mailto:corporate@castle-vast.com">corporate@castle-vast.com</a>
                </div>
            </div>
        </div>
    );
}