import './Sidebar.css'
import React, { useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListIcon from '@material-ui/icons/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AssessmentOutlined from '@material-ui/icons/AssessmentOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';


function Sidebar() {

    // const sidebar_button = document.querySelector('.sidebar_icon')
    // sidebar_button?.addEventListener('click',(e)=>{
    //     console.log('clicked')
    // })
    
    useEffect(() => {
        const sidebar_button = document.querySelector('.sidebar_icon')
        const sidebar_list = document.querySelector('.sidebar_list')
        const sidebar_nav = document.querySelectorAll('.sidebar_nav')
        const arrow1 = document.querySelector('.arrow1')
        const arrow1_list = document.querySelector('#arrow1')
        arrow1.addEventListener('click',(e)=>{
            console.log('arrow clicked')
            // arrow1.classList.toggle('active')
            arrow1_list.classList.toggle('expand')
            console.log(arrow1_list.classList)

        })
        
        sidebar_button?.addEventListener('click',(e)=>{
        console.log('clicked')
        sidebar_nav.forEach(item => item.classList.toggle('active'))
        console.log(sidebar_list.classList)
    
    })
    })


    



    return (
        <div>
            <ul className='sidebar_list'>
                <li className="arrow1">
                    <span><PersonOutlineIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                    <span className="sidebar_nav">Master</span></span> 
                    <i className="material-icons-outlined sidebar_nav">
arrow_back_ios
</i>
                    {/* <span className="sidebar_nav"><ArrowBackIosIcon className="sidebar_nav_icon" style={{fontSize : "12px"}} className="arrow1"/></span> */}
                    
                    
                </li>
                    <ul id="arrow1" className="arrow1_list sidebar_subnav">
                        <li>
                        <i className="material-icons-outlined">
circle
</i> skljdflksj
                        </li>
                        <li>
                            dhkjsdfsd
                        </li>
                        <li>sldf</li>

                    </ul>

                <li>
                <span><ListIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Plan</span>
                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><AttachMoneyIcon style={{fontSize : "19px", marginRight : "5px"}} />
                <span className="sidebar_nav">Sales</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><PersonOutlineIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Expense Mgmt</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><TrackChangesIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Sales Target</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><AssignmentTurnedInOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Complaint/Suggestion</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><AssessmentOutlined style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Reports</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><VerifiedUserOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Security</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><SettingsOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Settings</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><SystemUpdateAltOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Import</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><GetAppOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Download</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <li>
                <span><LibraryBooksOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Tracker Reports</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                

            </ul>
        </div>
    )
}

export default Sidebar
