import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

export function NavMobile() {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden m-3" asChild>
                <Button variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>select you route</SheetDescription>
                </SheetHeader>
                <Link href={'/tires'}>
                    <p>Tires</p>
                </Link>
                <Link href={'/rims'}>
                    <p>Rims</p>
                </Link>
                <Link href={'/batteries'}>
                    <p>Batteries</p>
                </Link>

                <Link href={'/orders'}>
                    <p>My orders</p>
                </Link>
                <Link href={'/add'}>
                    <p>Add</p>
                </Link>
                <Link href={'/discs'}>
                    <p>Discs</p>
                </Link>
                <Link href={'/cart'}>
                    <p>Cart</p>
                </Link>
                <Link href={'/information'}>
                    <p>Information</p>
                </Link>
            </SheetContent>
        </Sheet>
    );
}
