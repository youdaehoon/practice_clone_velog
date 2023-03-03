import React from "react";
import Calendar from "react-calendar";
import Flatpickr from "react-flatpickr";

import "react-calendar/dist/Calendar.css";
import "flatpickr/dist/themes/material_green.css";

const Write: React.FC = () => {
  const MONTH = new Array(12).fill(0).map((v, i) => i + 1 + "월");
  const date: Date = new Date();

  const makeDate = (date: Date) => {
    return (
      "" +
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate()
    );
  };
  const [sDate, setSDate] = React.useState<Date>(date);
  const nextDay: Date = new Date(date);
  nextDay.setDate(sDate.getDate() + 8);
  const [eDate, setEDate] = React.useState(nextDay);

  const handleChangeStart = (e: any) => {
    const start = new Date(e);

    setSDate(start);
    const end = new Date(start);
    end.setDate(start.getDate() + 1);
    setEDate(end);
  };

  const handleChangeEnd = (e: any) => {
    const end = new Date(e);

    setEDate(end);
  };
  console.log(nextDay.toDateString());
  return (
    <div className="flex" style={{ gap: "20px" }}>
      {/* <div>
        <div>{makeDate(sDate)}</div>
        <Calendar
          allowPartialRange={true}
          calendarType="ISO 8601"
          onChange={handleChangeStart}
        />
      </div>
      <div>
        <div>{makeDate(eDate)}</div>
        <Calendar
          allowPartialRange={true}
          calendarType="ISO 8601"
          onChange={handleChangeEnd}
          defaultValue={eDate}
        />
      </div> */}
      <Flatpickr options={{ mode: "range", static: true }} />
    </div>
  );
};

export default Write;
