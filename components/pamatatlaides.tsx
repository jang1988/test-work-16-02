import { NextPage } from 'next';
import Image from 'next/image';
import { CarTable } from './carTable';
import { UserCard } from './userCard';
import { useState } from 'react';
import messagesLv from '../lv/messages.json';
import messagesEn from '../en/messages.json';
import { IntlProvider } from 'react-intl';

interface Props {}

const Pamatatlaides: NextPage<Props> = ({}) => {
    const [locale, setLocale] = useState<string>('en');

    const messages = locale === 'lv' ? messagesEn : messagesLv;
    return (
        <div>
            <p className="mb-4 font-semibold">Pielietojums</p>
            <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-[60%]">
                    <div className="w-full h-[40px] bg-[#2B71AF] flex justify-between items-center text-white p-3 rounded-sm">
                        <p>CAR</p>
                        <Image src={'/arrow-down.svg'} width={12} height={6} alt="car" />
                    </div>
                    <CarTable />
                </div>
                <IntlProvider locale={locale} messages={messages as any}>
                <UserCard />
                </IntlProvider>
            </div>
        </div>
    );
};

export default Pamatatlaides;
