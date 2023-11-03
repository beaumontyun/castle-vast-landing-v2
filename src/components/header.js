import Logo from '../../public/cv-logo-revamp.svg'
import Image from 'next/image';
import { ABeeZee } from "next/font/google"
import Link from 'next/link';

const abeezee = ABeeZee({ subsets: ['latin'], weight: "400" })

export default function header() {
    return (
        <div className='sm:my-10 absolute top-0 w-full sm:px-60'>
            <div className="w-full sm:grid sm:grid-cols-2 sm:h-30 mx-auto">
                <div className='justify-self-start place-self-center'>
                    <Image src={Logo} width={120} height={88} alt='logo' priority />
                </div>
                <div className='sm:flex sm:space-x-10 justify-self-end place-self-center text-base uppercase'>
                    <Link href="#about" className={abeezee.className}>about</Link>
                    <p className={abeezee.className}>portfolio</p>
                </div>
            </div>
        </div>
    );
}