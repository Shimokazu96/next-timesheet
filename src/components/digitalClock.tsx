import { parseISO, format } from "date-fns";
import { ClockNum } from "@/types/ClockNum";

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
    return <>{format(new Date(time), "yyyy年M月d日 HH:mm:ss")}</>;
};

export default DigitalClock;
