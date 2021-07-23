import './Sidebar.css'
import React, { useState, useEffect } from 'react';
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
import { Class } from '@material-ui/icons';


function Sidebar() {

    // const sidebar_button = document.querySelector('.sidebar_icon')
    // sidebar_button?.addEventListener('click',(e)=>{
    //     console.log('clicked')

    const master_subnav_data = ["Country", "Region", "State", "District", "City", "Area", "Beat", "Product Class", "Product Segment", "Product Group", "Product", "Department", "Sales Person", "Grade", "Holiday", "Warehouse", "Message", "Complaint Nature", "Failed Visit Remark", "DSR Narration", "Project", "Party", "Distributor", "Merge Party", "Activity Template", "Item Price Distributor wise", "ItemPriceList Master"]

    const plan_subnav_data = ["Beat Plan", "Beat Plan Approval", "Leave Request", "Leave Approval", "Leave Reject", "Tour Plan", "Tour Plan App"]

    const sales_subnav_data = ["DSR SR", "DSR ASM", "Daily Working Approval SR", "Daily Working Approval ASM", "Daily Working Approval L3", "Retailer Order Dispatch/Cancel", "Prospect Distributor Approval"]

    const expense_mgmt_data = ["City Type", "Conveyance Type", "Travel/Conveyance Mode", "City Fare Limit", "Expense Type", "Local Conveyance Limit", "Lodging Boarding Limit", "Travel Eligibility", "Expense Approval", "Expense Chart", "Selft Expense Sheet", "Employee Wise Conveyance Limit", "Expense Advance Request", "Travel Conveyance Limit"]

    const sales_target_data = ["Sales Target All Level", "Sales Target HQ", "Sales Target Vs Actual Sales Report"]

    const complaint_data = ["Complain/Suggestion Feedback"]

    const reports_data = ['Daily Working Summary SR', "Daily Working Summary ASM", "Daily Working Summary L3", "Attendance", "Leave", "Distributor Invoice", "Monthly Item Sale", "Best Plan Vs Actual", "Tour Plan Vs Actual", "Complaint", "Suggestion", "DSR-Partywise Analysis", "Top Products", "Top Distributors", "Top Retailers", "Top SalesPersons", "Top Potential Customer", "Product Not Sold"]


    // })

   
    
    useEffect(() => {
        const sidebar_button = document.querySelector('.sidebar_icon')
        const sidebar_list = document.querySelector('.sidebar_list')
        const sidebar_nav = document.querySelectorAll('.sidebar_nav')
        const arrow1 = document.querySelector('.arrow1')
        const arrow1_list = document.querySelector('.arrow1_list')
        const arrow2 = document.querySelector('.arrow2')
        const arrow2_list = document.querySelector('.arrow2_list')
        const arrow3 = document.querySelector('.arrow3')
        const arrow3_list = document.querySelector('.arrow3_list')
        const arrow4 = document.querySelector('.arrow4')
        const arrow4_list = document.querySelector('.arrow4_list')
        const arrow5 = document.querySelector('.arrow5')
        const arrow5_list = document.querySelector('.arrow5_list')
        const arrow6 = document.querySelector('.arrow6')
        const arrow6_list = document.querySelector('.arrow6_list')
        const arrow7 = document.querySelector('.arrow7')
        const arrow7_list = document.querySelector('.arrow7_list')
        const arrow8 = document.querySelector('.arrow8')
        const arrow8_list = document.querySelector('.arrow8_list')
        const arrow9 = document.querySelector('.arrow9')
        const arrow9_list = document.querySelector('.arrow9_list')
        const arrow10 = document.querySelector('.arrow10')
        const arrow10_list = document.querySelector('.arrow10_list')
        const arrow11 = document.querySelector('.arrow11')
        const arrow11_list = document.querySelector('.arrow11_list')
        const arrow12 = document.querySelector('.arrow12')
        const arrow12_list = document.querySelector('.arrow12_list')
        
        arrow1.addEventListener('click',(e)=>{
            console.log('arrow1 clicked')
            arrow1.classList.toggle('active')
            arrow1_list.classList.toggle('expand')
            console.log(arrow1_list.classList)

        })
        
        arrow2.addEventListener('click',(e)=>{
            console.log('arrow2 clicked')
            arrow2.classList.toggle('active')
            arrow2_list.classList.toggle('expand')
            console.log(arrow2_list.classList)

        })
        
        arrow3.addEventListener('click',(e)=>{
            console.log('arrow3 clicked')
            arrow3.classList.toggle('active')
            arrow3_list.classList.toggle('expand')
            console.log(arrow3_list.classList)

        })
        
        arrow4.addEventListener('click',(e)=>{
            console.log('arrow4 clicked')
            arrow4.classList.toggle('active')
            arrow4_list.classList.toggle('expand')
            console.log(arrow4_list.classList)

        })
        
        arrow5.addEventListener('click',(e)=>{
            console.log('arrow5 clicked')
            arrow5.classList.toggle('active')
            arrow5_list.classList.toggle('expand')
            console.log(arrow5_list.classList)

        })
        
        arrow6.addEventListener('click',(e)=>{
            console.log('arrow6 clicked')
            arrow6.classList.toggle('active')
            arrow6_list.classList.toggle('expand')
            console.log(arrow6_list.classList)

        })
        
        arrow7.addEventListener('click',(e)=>{
            console.log('arrow7 clicked')
            arrow7.classList.toggle('active')
            arrow7_list.classList.toggle('expand')
            console.log(arrow7_list.classList)

        })
        
        arrow8.addEventListener('click',(e)=>{
            console.log('arrow8 clicked')
            arrow8.classList.toggle('active')
            arrow8_list.classList.toggle('expand')
            console.log(arrow8_list.classList)

        })
        
        arrow9.addEventListener('click',(e)=>{
            console.log('arrow9 clicked')
            arrow9.classList.toggle('active')
            arrow9_list.classList.toggle('expand')
            console.log(arrow9_list.classList)

        })
        
        arrow10.addEventListener('click',(e)=>{
            console.log('arrow10 clicked')
            arrow10.classList.toggle('active')
            arrow10_list.classList.toggle('expand')
            console.log(arrow10_list.classList)

        })
        
        arrow11.addEventListener('click',(e)=>{
            console.log('arrow11 clicked')
            arrow11.classList.toggle('active')
            arrow11_list.classList.toggle('expand')
            console.log(arrow11_list.classList)

        })
        
        arrow12.addEventListener('click',(e)=>{
            console.log('arrow12 clicked')
            arrow12.classList.toggle('active')
            arrow12_list.classList.toggle('expand')
            console.log(arrow12_list.classList)
            

        })
        


    //     const isHover = e => e.parentElement.querySelector(':hover') === e;    

    // // const myDiv = document.getElementById('mydiv');
    // document.addEventListener('mousemove', function checkHover() {
    //   const hovered = isHover(arrow1);
    //   if (hovered !== checkHover.hovered) {
    //     console.log(hovered ? 'hovered' : 'not hovered');
    //     // checkHover.hovered = hovered;
    //     if(hovered){
    //         arrow1.classList.toggle('active')
    //         arrow1_list.classList.toggle('expand') 
    //     }else{
    //         arrow1.classList.remove('active')
    //         arrow1_list.classList.remove('expand')
    //   }
    //   }
    // });
    
    
    
    
        





        sidebar_button?.addEventListener('click',(e)=>{
        console.log('clicked')
        sidebar_nav.forEach(item => item.classList.toggle('active'))
        console.log(sidebar_list.classList)
        arrow1_list.classList.remove('expand')
        arrow2_list.classList.remove('expand')
        arrow3_list.classList.remove('expand')
        arrow4_list.classList.remove('expand')
        arrow5_list.classList.remove('expand')
        arrow6_list.classList.remove('expand')
        arrow7_list.classList.remove('expand')
        arrow8_list.classList.remove('expand')
        arrow9_list.classList.remove('expand')
        arrow10_list.classList.remove('expand')
        arrow11_list.classList.remove('expand')
        arrow12_list.classList.remove('expand')
        // if(!sidebar_nav.(item => item.classList.contains('active'))){
        //     arrow1.removeEventListener('click',(e)=>console.log('removed the eventlistener'), false)
        // }
        
        
        
    })
    },[])

    
    



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

                    {master_subnav_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>

                <li className="arrow2">
                <span><ListIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Plan</span>
                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow2" className="arrow2_list sidebar_subnav">

                    {plan_subnav_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>



                <li className="arrow3">
                <span><AttachMoneyIcon style={{fontSize : "19px", marginRight : "5px"}} />
                <span className="sidebar_nav">Sales</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow3" className="arrow3_list sidebar_subnav">

{sales_subnav_data.map((item) => {
         return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
    })}


</ul>




                <li className='arrow4'>
                <span><PersonOutlineIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Expense Mgmt</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow4" className="arrow4_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>
                



                <li className="arrow5">
                <span><TrackChangesIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Sales Target</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow5" className="arrow5_list sidebar_subnav">

                    {sales_target_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>


                <li className="arrow6">
                <span><AssignmentTurnedInOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Complaint/Suggestion</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow6" className="arrow6_list sidebar_subnav">

                    {complaint_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>




                <li className="arrow7">
                <span><AssessmentOutlined style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Reports</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow7" className="arrow7_list sidebar_subnav">

                    {reports_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}

                    </ul>



                <li className="arrow8">
                <span><VerifiedUserOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Security</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow8" className="arrow8_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>






                <li className="arrow9">
                <span><SettingsOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Settings</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow9" className="arrow9_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>



                <li className="arrow10">
                <span><SystemUpdateAltOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Import</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow10" className="arrow10_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>




                <li className="arrow11">
                <span><GetAppOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Download</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow11" className="arrow11_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>







                <li className="arrow12">
                <span><LibraryBooksOutlinedIcon style={{fontSize : "19px", marginRight : "5px"}}/>
                <span className="sidebar_nav">Tracker Reports</span>

                    </span>
                    <i className="material-icons-outlined sidebar_nav arrow1">
arrow_back_ios
</i>

                    

                </li>
                <ul id="arrow12" className="arrow12_list sidebar_subnav">

                    {expense_mgmt_data.map((item) => {
                             return (<li><i className="material-icons-outlined">
circle
</i>{item}</li>)
                        })}


                    </ul>
                

            </ul>
        </div>
    )
}

export default Sidebar
