"use client";
/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isFriday from "date-fns/isFriday";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import isSameDay from "date-fns/isSameDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CollegeCalendarSection = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Example government holidays (you can replace or load from API)
    const governmentHolidays: Event[] = [
      {
        title: "বিজয় দিবস (Victory Day)",
        start: new Date(2025, 11, 16),
        end: new Date(2025, 11, 16),
        allDay: true,
        resource: { isHoliday: true, type: "gov" },
      },
      {
        title: "স্বাধীনতা দিবস (Independence Day)",
        start: new Date(2025, 2, 26),
        end: new Date(2025, 2, 26),
        allDay: true,
        resource: { isHoliday: true, type: "gov" },
      },
    ];

    // Generate Fridays off for May 2025
    const fridayEvents: Event[] = eachDayOfInterval({
      start: startOfMonth(new Date(2025, 4)),
      end: endOfMonth(new Date(2025, 4)),
    })
      .filter((date) => isFriday(date))
      .map((friday) => ({
        title: "শুক্রবার ছুটি (Friday Off)",
        start: friday,
        end: friday,
        allDay: true,
        resource: { isHoliday: true, type: "friday" },
      }));

    // Combine with your custom college events
    const collegeEvents: Event[] = [
      {
        title: "Orientation Program",
        start: new Date(2025, 4, 10, 10, 0),
        end: new Date(2025, 4, 10, 12, 0),
      },
      {
        title: "Semester Final Exam",
        start: new Date(2025, 4, 20),
        end: new Date(2025, 4, 25),
      },
    ];

    setEvents([...collegeEvents, ...fridayEvents, ...governmentHolidays]);
  }, []);

  // Color different holidays differently
  const eventStyleGetter = (event: Event) => {
    if (event.resource?.isHoliday) {
      const color = event.resource.type === "gov" ? "#2563eb" : "#dc2626"; // Blue for gov, red for Friday
      return {
        style: {
          backgroundColor: color,
          borderRadius: "4px",
          color: "white",
          border: "none",
          padding: "4px",
        },
      };
    }
    return {};
  };

  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">কলেজ ক্যালেন্ডার</h2>
      <div className="max-w-5xl mx-auto shadow-lg rounded-lg p-4 bg-white">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          style={{ height: 500 }}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </section>
  );
};

export default CollegeCalendarSection;
