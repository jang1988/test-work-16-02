import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
    return (
        <Accordion type="single" collapsible className="w-[250px] ml-3">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <Image
                        className="mr-7"
                        src="./search.svg"
                        width={30}
                        height={30}
                        alt="Browser"
                    />
                    Browser
                </AccordionTrigger>
                <Link href={'/tires'}>
                    <AccordionContent>
                        <Image
                            className="mr-7"
                            src="./tires.svg"
                            width={16}
                            height={16}
                            alt="tires"
                        />
                        <p>Tires</p>
                    </AccordionContent>
                </Link>
                <Link href={'/rims'}>
                    <AccordionContent>
                        <Image
                            className="mr-7"
                            src="./rims.svg"
                            width={16}
                            height={16}
                            alt="rims"
                        />
                        <p>Rims</p>
                    </AccordionContent>
                </Link>
                <Link href={'/batteries'}>
                    <AccordionContent>
                        <Image
                            className="mr-7"
                            src="./batteries.svg"
                            width={16}
                            height={16}
                            alt="Batteries"
                        />
                        <p>Batteries</p>
                    </AccordionContent>
                </Link>
            </AccordionItem>

            <AccordionItem value="item-2">
                <Link href={'/orders'}>
                    <AccordionTrigger>
                        <Image
                            className="mr-7"
                            src="./orders.svg"
                            width={30}
                            height={30}
                            alt="orders"
                        />
                        My orders
                    </AccordionTrigger>
                </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
                <Link href={'/add'}>
                    <AccordionTrigger>
                        <Image
                            className="mr-7"
                            src="./add.svg"
                            width={30}
                            height={30}
                            alt="add"
                        />
                        Add
                    </AccordionTrigger>
                </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
                <Link href={'/discs'}>
                    <AccordionTrigger>
                        <Image
                            className="mr-7"
                            src="./discs.svg"
                            width={30}
                            height={30}
                            alt="discs"
                        />
                        Discs
                    </AccordionTrigger>
                </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
                <Link href={'/cart'}>
                    <AccordionTrigger>
                        <Image
                            className="mr-7"
                            src="./cart.svg"
                            width={30}
                            height={30}
                            alt="cart"
                        />
                        Cart
                    </AccordionTrigger>
                </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
                <Link href={'/information'}>
                    <AccordionTrigger>
                        <Image
                            className="mr-7"
                            src="./information.svg"
                            width={30}
                            height={30}
                            alt="information"
                        />
                        Information
                    </AccordionTrigger>
                </Link>
            </AccordionItem>
        </Accordion>
    );
}
