import Image from 'next/image';
import { Navbar } from './navbar';
import { SelectLang } from './selectLang';
import Link from 'next/link';

const Sidebar = () => {

    return (
        <div className="fixed hidden bg-[#1D1D1D] min-w-[270px] h-screen md:flex flex-col justify-between">
            <div className="mx-4 my-11">
                <Link href={'/'}>
                    <Image
                        className="mb-11"
                        src="/Logo.svg"
                        alt="Logo"
                        width={246}
                        height={34}
                    />
                </Link>

                <Navbar />
            </div>

            <div className="md:flex md:items-center md:p-4 md:border-t md:border-gray-800 md:mt-4">
                <SelectLang />
            </div>
        </div>
    );
};

export default Sidebar;
