import { useState, useEffect } from "react";
import { format } from "date-fns";
export default function Schedules({ schedules, setCurrentScheduleId , currentScheduleId}) {
  console.log("currentScheduleId",currentScheduleId)
  const [selectedItem, setSelectedItem] = useState();
  useEffect(()=> setSelectedItem(currentScheduleId))
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentScheduleId(item)
  };
  return (
    <>
    <ul className="scheduleTile">
      {schedules.map((schedule,index) => (
        <li
          key={schedule.id}
          onClick={() => handleItemClick(schedule.id)}
          className={selectedItem === schedule.id ? "selected" : ""}
        >
          <p>{schedule.name}</p>
          
          <p>Description:{schedule.description}</p>
          <p>Start Date: {format(new Date(schedule.startDate), "dd/MM/yyyy")}</p>
          <p>End Date:{format(new Date(schedule.endDate), "dd/MM/yyyy")}</p>
          {schedule.isRetired ? (
            <button>Retire</button>
          ) : (
            <button>UnRetire</button>
          )}
        </li>
      ))}
      </ul>
    </>
  );
}
