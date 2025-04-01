import React, { ReactElement, ReactNode, useState } from 'react';
import { TabButton, TabsContainer } from './styles';

interface TabProps {
    label: string;
    children: ReactNode;
}

interface TabsProps {
    children: ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => {
    return <>{children}</>;
};

const Tabs = ({ children }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <TabsContainer>
                {children.map((tab, index) => (
                    <TabButton
                        key={index}
                        onClick={() => setActiveTab(index)}
                        active={index === activeTab}
                    >
                        {tab.props.label}
                    </TabButton>
                ))}
            </TabsContainer>
            <div>{children[activeTab]}</div>
        </div>
    );
};

export default Tabs;