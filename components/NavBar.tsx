/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

import Link from "next/link";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { ModeToggle } from "./modeToggle";
import NavMenu from "./NavMenu";

export default function NavBar() {
    return (
        <div className="bg-indigo-700 shadow-md sticky top-0 inset-0 w-full z-50 ">
            <header className="container mx-auto p-1 flex gap-4 items-center text-xs font-medium text-gray-50 px-4 ">
                <p className="hidden lg:block text-sm">
                    ARCHITECTURAL HOUSE PLANS, we design and build for the present.
                </p>

                {/* Change the phone number here  */}
                <Link href="tel:+237651327377" className="ml-auto">
                    {" "}
                    <span className="underline flex gap-2 font-semibold lg:text-md items-center uppercase">
                        {" "}
                        <FaPhone /> call us
                    </span>
                </Link>

                {/* Change the whatsapp number here  */}
                <Link href="https://wa.me/+237651327377 ">
                    {" "}
                    <span className="underline flex gap-1 font-semibold lg:text-md items-center uppercase">
                        <FaWhatsapp /> Whatsapp{" "}
                    </span>
                </Link>

                {/* Change the email here  */}
                <Link href="mailto:divineconstruction@gmail.com">
                    <span className="underline flex gap-1 font-semibold lg:text-md items-center uppercase">
                        <FaEnvelope /> Email
                    </span>
                </Link>

                <div className="m-1 ">
                    <ModeToggle />
                </div>
            </header>

            <div className="relative bg-white">
                <NavMenu />
            </div>
        </div>
    );
}
