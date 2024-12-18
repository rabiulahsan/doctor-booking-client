import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLoaderData } from "react-router-dom";

const BookingPage = () => {
  const loadedData = useLoaderData();

  const { _id, fee, country, availability, unavailableDates } = loadedData;
  console.log(unavailableDates[0]);

  const [value, setValue] = useState(dayjs());
  const [disabledDates, setDisabledDates] = useState([]);

  // Function to generate all dates between start and end dates (inclusive)
  const getDatesInRange = (start, end) => {
    const dates = [];
    let currentDate = dayjs(start);
    const endDate = dayjs(end);

    while (
      currentDate.isBefore(endDate, "day") ||
      currentDate.isSame(endDate, "day")
    ) {
      dates.push(currentDate);
      currentDate = currentDate.add(1, "day");
    }
    return dates;
  };

  // Populate disabledDates based on unavailableDates
  useEffect(() => {
    const allDisabledDates = [];

    unavailableDates.forEach((range) => {
      const { start, end } = range;
      const datesInRange = getDatesInRange(start, end);
      allDisabledDates.push(...datesInRange);
    });

    setDisabledDates(allDisabledDates);
  }, [unavailableDates]);

  // Function to disable specific dates
  const shouldDisableDate = (date) => {
    return disabledDates.some((disabledDate) =>
      date.isSame(disabledDate, "day")
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-5 rounded border border-slate-200">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            disablePast={true} // Disable past dates
            shouldDisableDate={shouldDisableDate} // Disable specific dates
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              "& .MuiPickersDay-root": {
                fontWeight: "600", // Make all dates bold
                color: "#475569", // Slate-600 color
              },
              "& .Mui-selected": {
                backgroundColor: "#16a34a !important", // Green-600 for selected date
                color: "#ffffff !important", // White text for selected date
              },
              "& .Mui-selected:hover": {
                backgroundColor: "#15803d !important", // Darker green-700 on hover
              },
              "& .MuiPickersDay-root:hover": {
                backgroundColor: "#e2e8f0", // Slate-200 hover background
              },
              "& .Mui-disabled": {
                color: "#94a3b8 !important", // Slate-400 for disabled dates
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default BookingPage;
