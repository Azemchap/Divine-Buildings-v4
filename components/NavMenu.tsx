"use client";

import { Button, Modal, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavMenu() {
    const [openModal, setOpenModal] = useState(false)


    return (
        <Navbar className="bg-primary">
            <Navbar.Brand >
                <Image onClick={() => setOpenModal(true)}
                    alt=" Logo"
                    className="w-9 h-9 cursor-pointer "
                    src="/images/logo.png"
                    width={200}
                    height={200}
                />
                <Modal show={openModal} dismissible onClose={() => setOpenModal(false)}>
                    <Modal.Header></Modal.Header>
                    <Modal.Body>
                        <Image
                            alt=" Logo"
                            className="w-full h-auto block cursor-pointer z-50"
                            src="/images/logo.png"
                            width={1200}
                            height={1200}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='gray' onClick={() => setOpenModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Link href="/" className="self-center ml-2 text-md text-indigo-600 font-bold dark:text-white mr-4">
                    Divine Buildings
                </Link>
            </Navbar.Brand>





            {/* <Navbar.Brand href="/" className="ml-auto flex md:order-3">
        {/* Cart */}
            {/* <Link
            href="/cart"
            className="group -m-2 p-2 text-orange-700 flex items-center"
        >
            <ShoppingCartIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-600"
                aria-hidden="true"
            />
            <span className="ml-2 text-lg font-bold text-gray-500 group-hover:text-gray-600">
                {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
            </span>
        </Link> */}
            {/* </Navbar.Brand> */}

            <div className="ml-auto ">
                <Navbar.Toggle className="text-indigo-600 " />
            </div>
            <Navbar.Collapse className="ml-auto">
                <Navbar.Link className="text-indigo-600 " href="/category/apartments">Apartments</Navbar.Link>
                <Navbar.Link className="text-indigo-600 " href="/category/bungalow">Bungalow</Navbar.Link>
                <Navbar.Link className="text-indigo-600 " href="/category/duplex">Duplex</Navbar.Link>
                <Navbar.Link className="text-indigo-600 " href="/category/ebooks">E-Books</Navbar.Link>
                <Navbar.Link className="text-indigo-600 " href="/about">About</Navbar.Link>
                <Navbar.Link className="text-indigo-600 " href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
