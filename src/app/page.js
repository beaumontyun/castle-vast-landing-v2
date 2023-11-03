import Navbar from "@/components/header"
import FooterNav from '@/components/footer'
import Image from "next/image"
import Boston from '../../public/boston-library.png'
import Rome from '../../public/rome.jpg'
import { ABeeZee } from "next/font/google"
import { Glass_Antiqua } from "next/font/google"
import ScrollToTop from "@/components/scrollbutton"
import Link from "next/link"

const abeezee = ABeeZee({ subsets: ['latin'], weight: "400" })
const glass = Glass_Antiqua({ subsets: ['latin'], weight: "400" })

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="sm:mx-60">
        {/* section 1 */}
        <section className="w-full mx-auto sm:py-52 h-screen">
          <div className="sm:grid sm:grid-cols-2">
            <div className=" w-fit h-fit justify-self-start place-self-center">
              <div className="text-3xl uppercase">
                <div className={glass.className}>
                  <p><span className="text-[#134C84] font-bold">RETHINK</span> the problem</p>
                  <p><span className="text-[#134C84] font-bold">INVEST</span> in the solution</p>
                  <p><span className="text-[#134C84] font-bold">BUILD</span> together</p>
                </div>
              </div>
              <div className="sm:mt-5">
                <div className={abeezee.className}>
                  <Link href="#about">
                    <button className="w-[185px] h-[50px] bg-[#134C84] border-1 border-[#63AAEB] text-white rounded-xl text-sm uppercase">
                      about us</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="justify-self-end w-[70%] h-[70%]">
              <Image src={Boston} alt="boston" width="auto" height="auto" className="rounded-full shadow-lg border-4 border-gray-200 p-1" />
              <div className="text-[10px] text-right float-right">
                <p>Richard Strauss</p>
                <p><span className="italic">Ariadne auf Naxos</span> 1912</p>
                <p>Boston Public Library</p>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section id="about" className="w-full mx-auto sm:my-20">
          <div className="sm:grid sm:grid-cols-2">
            <div className="justify-self-start w-[70%] h-[70%]">
              <Image src={Rome} alt="rome" width="auto" height="auto" className="rounded-full shadow-lg border-4 border-gray-200 p-1" />
              <div className="text-[10px]">
                <p>Gabriella Clare Marino</p>
                <p>Rome</p>
              </div>
            </div>
            <div className=" w-fit h-fit justify-self-end place-self-center">
              <div className="">
                <div className={glass.className}>
                  <p className="text-[#134C84] font-bold text-3xl uppercase">ABOUT US</p>
                </div>
                <div className="sm:text-lg sm:space-y-3 mt-5">
                  <p>We are a small and humble company of investors. Started in 2021, we have invested in a range of technology and retail projects.</p>
                  <p>Our primary focus lies in the cultivation of talent and the nurturing of individuals. We believe that success does not hinge solely upon execution; rather, it hinges upon the meticulous assembly of personalities and characters, propelling projects towards sustainable prosperity.</p>
                  <p>In our minds, this embodies the essence of astute investment.</p>
                </div>
              </div>
              <div className="sm:mt-5">
                <div className={abeezee.className}>
                  <button className="w-[185px] h-[50px] bg-[#134C84] border-1 border-[#63AAEB] text-white rounded-xl text-sm uppercase">our portfolio</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScrollToTop />
        <FooterNav />
      </main>
    </>
  )
}
