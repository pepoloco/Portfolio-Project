// import { useEffect, useState } from 'react';
// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';

// const ClockComponent = () => {
//     // State to hold the current time
//     const [currentTime, setCurrentTime] = useState(new Date());

//     // Set up an interval to update the current time every second
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000); // Updates every second

//         // Clear the interval when the component is unmounted
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

//     return (
//         <div className='clock-wrap'>
//             <div className='clock-main'>
//                 <Clock
//                     className="clock"
//                     value={currentTime}  // Pass the current time here
//                 />
//             </div>
//         </div>
//     );
// }

// export default ClockComponent;