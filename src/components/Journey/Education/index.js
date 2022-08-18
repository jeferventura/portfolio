import React, { useState } from 'react';

import { Unifacs } from './School/unifacs';
import { Tecnicoti } from './School/ifba';
import { Uxui } from './School/ux-unicornio';
import { Frontend } from './School/dev-media';
import { Dankicode } from './School/danki-code';
import { Wiseup } from './School/wiseup';

import './assets/css/style.min.css';

export function Education(){

    const [itemHiden, setItemHiden] = useState('obj-hiden');
    const [changeItem, setChangeItem] = useState('Exibe mais');

    /**
     * If the item is hidden, show it. If the item is not hidden, hide it.
     */

    function showItem(){
        if(itemHiden === 'obj-hiden'){
            setItemHiden('');
            setChangeItem('Exibe menos');
        }else{
            setItemHiden('obj-hiden');
            setChangeItem('Exibe mais');
        }
    }


    return(
        <div className="journey-educaction">
            <div className="education-box scroll-bar-ajustes">
                <div className="education-box-single">
                    <Unifacs />
                </div>
                <div className="education-box-single">
                    <Tecnicoti />
                </div>
                <div className="education-box-single">
                    <Uxui />
                </div>
                <div className={"education-box-single "+itemHiden+""}>
                    <Frontend />
                </div>
                <div className={"education-box-single "+itemHiden+""}>
                    <Dankicode />
                </div>
                <div className={"education-box-single "+itemHiden+""}>
                    <Wiseup />
                </div>
            </div>
            <div className="buttom-red-More">
                <button className="btn" id="btn-mais" onClick={showItem}> 
                    {changeItem}
                </button>
            </div>
        </div>
    );
}