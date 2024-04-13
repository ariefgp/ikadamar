import { useEffect, useState } from "react";

const Countdown = () => {
    const [countdownDate, setCountdownDate] = useState(
      new Date("2024-04-14T09:00:00").getTime()
    );
    const [state, setState] = useState({
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0"
    });

    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days: string | number = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours: string | number = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes: string | number = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds: string | number = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours as string, minutes: minutes as string, seconds: seconds as string });
      }
    };

    return (
      <div className="flex flex-row justify-center gap-5">
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
            <div className='font-bold'>{state.days || "0"}</div>
            <div className="text-xs">Hari</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
            <div className='font-bold'>{state.hours || "00"}</div>
            <div className="text-xs">Jam</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
            <div className='font-bold'>{state.minutes || "00"}</div>
            <div className="text-xs">Menit</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
            <div className='font-bold'>{state.seconds || "00"}</div>
            <div className="text-xs">Detik</div>
        </div>
      </div>
    );
  };

export default Countdown;