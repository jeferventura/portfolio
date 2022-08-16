import React, { useEffect, useState } from "react";
import './assets/css/style.min.css';

export const Tab = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, (element) => {
        if (!React.isValidElement(element)) return;

            const {
                props: { tab, children },
            } = element;
            data.push({ tab, children });
        });

        setTabsData(data);
    }, [children]);

    return (
        <div className="journey-experience">
            <div className="journey-experience-box">
                <div className="experience-menu">
                    <div className="menu-single"> 
                        <ul>
                            {tabsData.map(({ tab }, idx) => (
                                <li className="nav-item">
                                    <button className={`button-show ${idx === activeTab ? "selected" : ""}`} onClick={() => setActiveTab(idx)}>
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    {tabsData[activeTab] && tabsData[activeTab].children}
                </div>
            </div>
        </div>
    );
};

const TabPane = ({ children }) => {
    return { children };
};

Tab.TabPane = TabPane;
