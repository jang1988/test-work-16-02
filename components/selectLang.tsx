'use client';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { langStore } from '@/store/lang';

export function SelectLang() {
    const selectlang = langStore((state: any) => state.selectlang);

    const handleLanguageChange = (lang: string) => {
        selectlang({ lang });
    };
   
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <Image className="mr-7" src="./lang.svg" width={30} height={30} alt="lang" />
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <div className="cursor-pointer" onClick={() => handleLanguageChange('en')}>
                        English
                    </div>
                    <div className="cursor-pointer" onClick={() => handleLanguageChange('lv')}>
                        Latvian
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
