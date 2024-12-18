import { useEffect, useState } from "react";
import "./BookingPage.css";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useLoaderData } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

const BookingPage = () => {
  const loadedData = useLoaderData();
  const { _id, fee, country, availability, unavailableDates } = loadedData;

  const [value, setValue] = useState(dayjs());
  const [disabledDates, setDisabledDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [activeSlot, setActiveSlot] = useState(null);

  const handleActiveSlot = (i) => {
    setActiveSlot(i);
  };

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

  const generateTimeSlots = (start, end) => {
    const slots = [];
    let currentTime = dayjs(start, "HH:mm");
    const endTime = dayjs(end, "HH:mm");

    while (currentTime.isBefore(endTime)) {
      slots.push(currentTime.format("HH:mm")); // Add start time to slots
      currentTime = currentTime.add(30, "minute"); // Increment by 30 minutes
    }

    return slots;
  };

  useEffect(() => {
    if (availability.length > 0) {
      const start = availability[0].timeSlots[0].startTime;
      const end = availability[0].timeSlots[0].endTime;

      const slots = generateTimeSlots(start, end);

      // Filter out past slots for the selected day
      const today = dayjs();
      const selectedDay = dayjs(value).startOf("day");
      const currentTime = today.isSame(selectedDay, "day") ? today : null;

      const filteredSlots = currentTime
        ? slots.filter((slot) =>
            dayjs(`${value.format("YYYY-MM-DD")}T${slot}`).isAfter(currentTime)
          )
        : slots;

      setAvailableSlots(filteredSlots);
    }
  }, [availability, value]);

  // Function to convert time
  const convertTo12HourFormat = (t) => {
    const [hour, minute] = t.split(":");
    const hour12 = ((+hour + 11) % 12) + 1; // Converts 24hr to 12hr
    const ampm = +hour >= 12 ? "pm" : "am";
    return `${hour12}:${minute} ${ampm}`;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-5 rounded border shadow border-slate-200">
        <div className="">
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
        <div className="flex flex-col items-center justify-center mb-5">
          <h3 className="text-lg font-bold text-slate-600 mb-5">
            Available Time Slots
          </h3>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 px-4">
            {availableSlots?.map((slot, i) => (
              <p
                key={i}
                onClick={() => handleActiveSlot(i)}
                className={`flex items-center hover:bg-green-600 hover:text-white font-semibold text-sm px-4 py-[6px] gap-x-1 rounded-sm cursor-pointer transition-all duration-200 ease-in-out ${
                  activeSlot === i
                    ? "bg-green-600 text-white"
                    : "bg-slate-200 text-slate-700"
                } `}
              >
                <span className="flex items-center justify-center">
                  <IoMdTime className="text-lg"></IoMdTime>
                </span>
                <span className="flex items-center leading-none">
                  {convertTo12HourFormat(slot)}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
