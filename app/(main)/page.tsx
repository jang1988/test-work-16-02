import Breadcrumbs from '@/components/breadcrumbs';
import { NavMobile } from '@/components/navMobile';
import Tabs from '@/components/tabs';
import UserAvatar from '@/components/userAvatar';

export default function Home() {
    const breadcrumbs = [{ title: 'Home', url: '/' }];
    return (
        <div className="m-6 pt-10 pl-10 rounded-3xl bg-[#FFF]">
            <div className="flex justify-between mb-8">
                <Breadcrumbs crumbs={breadcrumbs} />
                <UserAvatar username="Dāvis MAtrixSoftLabs" />
                <NavMobile />
            </div>
            <Tabs />
        </div>
    );
}
