'use client';
import React from 'react';
import { Button } from './ui/button';
import Kontakti from './kontakti';
import Pamatatlaides from './pamatatlaides';

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState('Tab1');

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="flex gap-14 mb-8">
                <Button
                    className={
                        activeTab === 'Tab1'
                            ? 'text-[#2B71AF] text-lg hover:text-[#2B71AF]'
                            : 'text-[#777777] text-lg hover:text-[#2B71AF]'
                    }
                    variant="link"
                    onClick={() => handleTabChange('Tab1')}
                >
                    Kontakti
                </Button>
                <Button
                    className={
                        activeTab === 'Tab2'
                            ? 'text-[#2B71AF] text-lg hover:text-[#2B71AF]'
                            : 'text-[#777777] text-lg hover:text-[#2B71AF]'
                    }
                    variant="link"
                    onClick={() => handleTabChange('Tab2')}
                >
                    Pamatatlaides
                </Button>
            </div>
            <div>
                {activeTab === 'Tab1' ? <Kontakti /> : null}
                {activeTab === 'Tab2' ? <Pamatatlaides /> : null}
            </div>
        </div>
    );
};

export default Tabs;
