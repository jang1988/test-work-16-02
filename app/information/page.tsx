import { NextPage } from 'next';
import Breadcrumbs from '@/components/breadcrumbs';

interface Props {}

const Page: NextPage<Props> = ({}) => {
    const breadcrumbs = [
        { title: 'Home', url: '/' },
        { title: 'Information', url: '/category/information' },
    ];
    return (
        <div>
            <Breadcrumbs crumbs={breadcrumbs} />
        </div>
    );
};

export default Page;
