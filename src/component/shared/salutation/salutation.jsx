import { useEffect, useState } from "react";
import "./salutation.scss";

const Salutation = () => {
    const [time, setTime] = useState('');

    const updateTime = () => {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            setTime('morning');
        } else if(hour >= 12 && hour < 18) {
            setTime('afternoon');
        } else if(hour >= 18) {
            setTime('evening');
        } else {
            setTime('day');
        }
    }

    useEffect(() => {updateTime()})

    return (
        <div className="salutation">
            <p className="main salutation__container">Good { time } Mike! Good to see you again</p>
        </div>
    )
}

export default Salutation;