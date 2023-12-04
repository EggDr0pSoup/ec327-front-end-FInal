import { apiType } from "~/api/converts";
import dayjs from "dayjs";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
    end: todayStr + "T14:30:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

type WeekdayChar = "M" | "T" | "W" | "R" | "F";

function getWeekdayDate(weekdayChar: WeekdayChar, time: string): string {
  const today = dayjs();
  const todayDayOfWeek = today.day();
  const daysOfWeek = { M: 1, T: 2, W: 3, R: 4, F: 5 };
  const targetDayOfWeek = daysOfWeek[weekdayChar];
  const dateOffset = targetDayOfWeek - todayDayOfWeek;

  return today.add(dateOffset, "day").format("YYYY-MM-DD") + "T" + time;
}

type Schedule = {
  date: WeekdayChar;
  startTime: string;
  endTime: string;
};

function parseTime(time: string): string {
  console.log(time);
  const [hourPart, minuteWithPeriodPart] = time.split(":");
  let hour = hourPart;
  console.log(hour, minuteWithPeriodPart);
  let [minutePart, period] = minuteWithPeriodPart.split(/(am|pm)/i);
  console.log(minutePart, period);
  const minute = minutePart.substring(0, 2);

  hour =
    period.toLowerCase() === "pm" && hour !== "12"
      ? String(Number(hour) + 12)
      : hour;
  hour = period.toLowerCase() === "am" && hour === "12" ? "00" : hour;

  return `${hour.padStart(2, "0")}:${minute}:00`;
}

function parseSchedule(schedule: string): Schedule[] {
  schedule = schedule.replace(/(\d)(?:\s+)(am|pm)/gi, "$1$2");
  const [days, timeRange] = schedule.split(" ");
  const [startTime, endTime] = timeRange.split("-").map(parseTime);

  return days.split("").map((day) => {
    return {
      date: day as WeekdayChar,
      startTime: startTime,
      endTime: endTime,
    };
  });
}

export function createEventsFromCourses(
  courses: apiType["CourseRead"][]
): any[] {
  return courses.flatMap((course) => {
    const schedules = parseSchedule(course.schedule as string);
    return schedules.map((schedule) => ({
      id: createEventId(),
      title: `${course.name} with ${course.instructor}`,
      start: getWeekdayDate(schedule.date, schedule.startTime),
      end: getWeekdayDate(schedule.date, schedule.endTime),
    }));
  });
}
