import { NextPage } from 'next';
import { UserCard } from './userCard';
import { KontaktTable } from './kontaktTable';
import messagesLv from '../lv/messages.json';
import messagesEn from '../en/messages.json';
import { IntlProvider } from 'react-intl';
import { langStore } from '@/store/lang';

import Map from './map';


interface Props {}

const Kontakti: NextPage<Props> = ({}) => {
    const lang = langStore((state: any) => state.lang)
    console.log('langsssss: ', lang)
    const messages = lang === 'en' ? messagesEn : messagesLv;

    return (
        <div>
            <div className="flex flex-wrap gap-4" >
                <div className="w-full md:w-[60%]">
                    <KontaktTable />
                    <Map />
                </div>
                <IntlProvider locale={lang} messages={messages as any}>
                    <UserCard />
                </IntlProvider>
            </div>
        </div>
    );
};

export default Kontakti;
