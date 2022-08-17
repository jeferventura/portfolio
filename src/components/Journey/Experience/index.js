import React from 'react';

//import companys
import  { Solutis } from './Companys/solutis'
import  { Amg } from './Companys/amg'
import  { Continental } from './Companys/continental'
import  { Imes } from  './Companys/imes'
import { Tab } from './tab';

import './assets/css/style.min.css';

const tabContent = [
    {
        title:'Solutis',
        content: <Solutis />
    }, 
    {
        title:'Continental',
        content: <Continental />
    }, 
    {
        title:'IMES Faculdade',
        content: <Imes />
    }, 
    {
        title:'Amg Policlínica',
        content: <Amg />
    }, 
]


export function Experience(){

    return(
        <Tab>
            {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                    {tab.content}
                </Tab.TabPane>
            ))}
        </Tab>
    );
}

