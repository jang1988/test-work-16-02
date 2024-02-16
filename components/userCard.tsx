import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function UserCard() {
    return (
        <Card className="overflow-hidden text-opacity-70 mt-[-40px] mb-20 w-full md:w-[35%]">
            <CardHeader>
                <CardTitle>
                    <FormattedMessage id="welcome" defaultMessage="Welcome" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-3 mb-4">
                    <Image src={'/mail.svg'} width={35} height={35} alt="mail" />
                    <div>
                        <p>
                            <FormattedMessage id="emailLabel" defaultMessage="E-pasts uzzinam:" />
                        </p>
                        <p>shop@tireshop.lv</p>
                    </div>
                </div>
                <Separator />
            </CardContent>
            <CardContent>
                <div className="flex gap-3 mb-4">
                    <Image src={'/phone.svg'} width={35} height={35} alt="phone" />
                    <div>
                        <p>
                            <FormattedMessage id="phoneNumberLabel" defaultMessage="Talruna Numurs:" />
                        </p>
                        <p>+371 25737000</p>
                    </div>
                </div>
                <Separator />
            </CardContent>
            <CardContent>
                <p className="text-xs">
                    <FormattedMessage
                        id="contactManager"
                        defaultMessage="Sadarbibas nosacijumu precizesanas val specifisku jautajumu gadijuma, ladzu, sazinaties ar jums piesaistito menedzeri"
                    />
                </p>
            </CardContent>
            <CardHeader>
                <CardTitle>
                    <FormattedMessage id="yourManager" defaultMessage="Jusu menedzeris:" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs">
                    <FormattedMessage
                        id="wholesaleInfo"
                        defaultMessage="Vairumtirdziecibas cenas un atlaides"
                    />
                </p>
            </CardContent>
            <CardContent>
                <div className="flex gap-3 mb-4">
                    <Image src={'/user.svg'} width={35} height={35} alt="user" />
                    <div>
                        <p>
                            <FormattedMessage id="nameLabel" defaultMessage="Vards:" />
                        </p>
                        <p>Uldis Taurins</p>
                    </div>
                </div>
                <Separator />
            </CardContent>
            <CardContent>
                <div className="flex gap-3 mb-4">
                    <Image src={'/mail.svg'} width={35} height={35} alt="mail" />
                    <div>
                        <p>
                            <FormattedMessage id="emailLabel" defaultMessage="E-pasts uzzinam:" />
                        </p>
                        <p>shop@tireshop.lv</p>
                    </div>
                </div>
                <Separator />
            </CardContent>
            <CardContent>
                <div className="flex gap-3 mb-4">
                    <Image src={'/phone.svg'} width={35} height={35} alt="phone" />
                    <div>
                        <p>
                            <FormattedMessage id="phoneNumberLabel" defaultMessage="Talruna Numurs:" />
                        </p>
                        <p>+371 25737000</p>
                    </div>
                </div>
                <Separator />
            </CardContent>
        </Card>
    );
}
