import { CloudMoon, CloudSun, MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";
function Clock() {
  const [time, setTime] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      const formattedHours = String(hours % 12 || 12).padStart(2, "0");
      const currentTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

      setTime(currentTime);

      if (hours >= 6 && hours < 12) {
        setIcon(<CloudSun size={48} />);
      } else if (hours >= 12 && hours < 18) {
        // setIcon(<i className="fas fa-sun"></i>);
        setIcon(<Sun size={48} />);
      } else if (hours >= 18 && hours < 21) {
        // setIcon(<i className="fa-solid fa-cloud-moon"></i>);
        setIcon(<CloudMoon size={48} />);
      } else {
        // setIcon(<i className="fas fa-moon"></i>);
        setIcon(<MoonStar size={48} />);
      }
    };

    // Update the clock and icon every second
    const intervalId = setInterval(updateClock, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 text-text">
      <div className="">{icon}</div>
      <div className="font-bold text-2xl font-poppins">{time}</div>
    </div>
  );
}

export default Clock;
