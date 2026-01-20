import { Calendar } from "lucide-react";
import { getTodayDate } from "../utils/dataUtils.js";

const DatePicker = ({ selectedDate, onDateChange }) => {
    const today = getTodayDate();
    const minDate = "1995-06-16";

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-stellar-300">
                <Calendar size={16} className="text-orbit-400" />
                <label
                    htmlFor="date-input"
                    className="text-sm font-mono leading-none"
                >
                    Select a date
                </label>
            </div>

            <input
                id="date-input"
                type="date"
                value={selectedDate}
                onChange={(e) => onDateChange(e.target.value)}
                min={minDate}
                max={today}
                className="
                  w-full sm:w-auto
                  rounded-xl bg-space-800/70 border border-white/10
                  px-4 py-3
                  text-stellar-100
                  outline-none backdrop-blur
                  focus:border-orbit-400/60
                  focus:ring-2 focus:ring-orbit-400/20
                  transition
                "
            />
        </div>
    );
};

export default DatePicker;
