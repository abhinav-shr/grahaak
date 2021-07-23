import React, {useEffect} from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';



export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  },[]);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second : 'numeric' });

  return {
    date,
    time,
    wish,
  };
}





function Header() {

    
    // const [date, setDate] = useState('')
    // useEffect(() => {
    //     setDate(new Date())
    // }, [date])
    const {date, time, wish} = useDate()
    // document.querySelector('')
    
    
    

    return (
        <>
        <div className="header">
            <div className="header_part1">
                <div className="logo">
                    {/* <img className='logo_img' src="http://testmergefield.aspwork.co.in/LoginAssets/images/logo_hr.png" alt="graahak_logo" height='35px' width="161px"/> */}
                    <p>Graahak</p>
                </div>
                <div className="sidebar_icon">
                    <MenuIcon style={{fontSize : '17px' }}/>
                </div>
            </div>
            
            
            
            <div className="header_part2">
                <div className="notification_icon">
                    <NotificationsIcon style={{fontSize : '17px' }}/>

                </div>

                <div className="greetings">
                    <p>Good {wish}! SUPER ADMIN <br />
                    {date},{time}</p>
                </div>
            </div>


        </div>
        <Sidebar />
        </>
    )
}

export default Header
