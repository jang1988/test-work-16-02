import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
    username: string
}

const UserAvatar: NextPage<Props> = ({ username }) => {
    return (
        <div className="flex w-[340px] h-[40px]">
            <div className="flex flex-col items-end">
                <p>{username}</p>
                <p>Client</p>
            </div>
            <Image className="mx-7" src="./avatar.svg" width={40} height={40} alt="avatar" />
            <Image src="./logout.svg" width={40} height={40} alt="logout" />
        </div>
    );
};
export default UserAvatar