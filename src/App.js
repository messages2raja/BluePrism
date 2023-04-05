import "./App.css";
import Schedules from "./Schedules";
import { useState, useEffect } from "react";
import ReactTable from "./Table/ReactTable";
function App() {
  const [schedules, setSchedules] = useState([]);
  const [currentScheduleId, setCurrentScheduleId] = useState();
  const [currentScheduleLog, setCurrentScheduleLog] = useState([]);

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    getScheduleLogs();
  }, [currentScheduleId]);

  const getSchedules = async () => {
    const data = await fetch("http://localhost:3000/schedules");
    const dataJson = await data.json();
    setSchedules(dataJson);
    setCurrentScheduleId(dataJson[0].id)
    console.log(dataJson);
  };
  const getScheduleLogs = async () => {
    const data = await fetch("http://localhost:3000/scheduleLogs");
    const dataJson = await data.json();
    const filteredData = dataJson.filter(
      (data) => data.scheduleId === currentScheduleId
    );
    console.log(filteredData);
    setCurrentScheduleLog(filteredData);
  };
  return (
    <div>
      <header className="App-header">Header</header>
      <div className="main">
        <div className="content">
          <aside>
            <Schedules
              schedules={schedules}
              setCurrentScheduleId={setCurrentScheduleId}
              currentScheduleId={currentScheduleId}
            />
          </aside>
          <section>
            <ReactTable tabledata={currentScheduleLog} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
