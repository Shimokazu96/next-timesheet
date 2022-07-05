import DigitalClock from "@/components/digitalClock";
import { useTime } from "@/hooks/useTime";

const Clocks = () => {
    const time = useTime(1000);
    return (
        <>
        <div>
            <DigitalClock time={time} />
        </div>
        </>
    );
};

export default Clocks;
