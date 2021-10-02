import React from 'react';
import Image from "next/image";
import {
    SearchIcon,
    MenuIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className={'sticky top-0 z-50'}>
            <div className={'flex items-center bg-amazon_blue p-1 flex-grow py-2'}>
                <div className={'mt-2 flex items-center flex-grow sm:flex-grow-0'}>
                    <Image
                        src={'https://links.papareact.com/f90'}
                        width={150}
                        height={40}
                        objectFit={'contain'}
                        className={'cursor-pointer'}
                    />
                </div>
                <div className={'hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'}>
                    <input type="text" className={'flex-grow p-2 h-full w-6 flex-shrink rounded-l-md focus:outline-none px-4'}/>
                    <SearchIcon className={'h-12 p-4'} />
                </div>
                <div className={'text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'}>
                    <div className={'link'}>
                        <p>Hello Edris Malya</p>
                        <p className={'font-extrabold md:text-sm'}>Account & lists</p>
                    </div>
                    <div className={'link'}>
                        <p>Returns</p>
                        <p className={'font-extrabold md:text-sm'}>& Orders</p>
                    </div>
                    <div className={'link flex items-center relative'}>
                        <span className={'absolute top-0 right-0 sm:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold'}>
                            0
                        </span>
                        <ShoppingCartIcon className={'h-10'} />
                        <p className={'font-extrabold md:text-sm hidden sm:inline mt-2'}>
                            Basket
                        </p>
                    </div>
                </div>
            </div>
            <div className={'flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'}>
                <p className={'link flex items-center'}>
                    <MenuIcon className={'h-6 mr-1'} />
                    All
                </p>
                <p className={'link'}>Prime Video</p>
                <p className={'link'}>Amazon Business</p>
                <p className={'link'}>Today's Deals</p>
                <p className={'link hidden lg:inline-flex'}>Electronics</p>
                <p className={'link hidden lg:inline-flex'}>Food & Grocery</p>
                <p className={'link hidden lg:inline-flex'}>Prime</p>
                <p className={'link hidden lg:inline-flex'}>Buy Again</p>
                <p className={'link hidden lg:inline-flex'}>Shopper Toolkit</p>
                <p className={'link hidden lg:inline-flex'}>Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;