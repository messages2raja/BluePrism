import { useState, useEffect } from "react";
import { format } from "date-fns";
import './Schedules.css'
export default function Schedules({ setScheduleList,scheduleList, setCurrentScheduleId , currentScheduleId}) {
  const [selectedItem, setSelectedItem] = useState();
  useEffect(()=> setSelectedItem(currentScheduleId))
   // Method to handle each schedule click
  const scheduleClickHandler = (item) => {
    setSelectedItem(item);
    setCurrentScheduleId(item)
  };
  // Method to handle Retire or Unretire button click 
  const retireHandler = (e,schedule) => {
      e.stopPropagation();
      const filterSchedules = scheduleList.filter((sch)=>sch.id === schedule.id);
      filterSchedules[0].isRetired = !filterSchedules[0].isRetired;
      setScheduleList([...scheduleList,...filterSchedules])
  }
  return (
    <>
    <ul className="scheduleTile">
      {scheduleList.map((schedule,index) => (
        <li
          key={index}
          onClick={() => scheduleClickHandler(schedule.id)}
          className={selectedItem === schedule.id ? "selected" : ""}
        >
          <h5>{schedule.name}</h5>
          <p><b>Description:</b> {schedule.description}</p>
          <p><b>Start Date:</b> {format(new Date(schedule.startDate), "dd/MM/yyyy")}</p>
          <p><b>End Date:</b> {format(new Date(schedule.endDate), "dd/MM/yyyy")}</p>
          {schedule.isRetired ? (
            <button onClick={(e)=>retireHandler(e,schedule)} className="retire">Retire</button>
          ) : (
            <button onClick={(e)=>retireHandler(e,schedule)} className="unretire">UnRetire</button>
          )}
        </li>
      ))}
      </ul>
    </>
  );
}
