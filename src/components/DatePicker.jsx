import { getTodayDate } from "../utils/dataUtils.js";

const DatePicker = ({ selectedDate, onDateChange }) => {
    const today = getTodayDate();
    const minDate = '1995-06-16';

    return (
        <div className="flex justify-center items-center gap-4 mb-8">
            <label htmlFor="date-input">Select an date:</label>
            <input
                className="px-2 py-4 rounded-md border border-solid"
                id="date-input"
                type="date"
                value={selectedDate}
                onChange={(e) => onDateChange(e.target.value)}
                min={minDate}
                max={today}
            />
        </div>
    )
};

export default DatePicker;