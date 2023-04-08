const BASEURL = 'http://localhost:3000';

//To get the list of schedules from API
export const getSchedules = async () => {
    try{
        const data = await fetch(`${BASEURL}/schedules`);
        const dataJson = await data.json();
        return dataJson;
    } catch(error){
        console.error(error);
    }
   
  };

//To get the list of schedulesList from API and filter it based on user clicked schedule id
export const getScheduleLogs = async (id) => {
    try{
    const data = await fetch(`${BASEURL}/scheduleLogs`);
    const dataJson = await data.json();
    const filteredData = dataJson.filter(
      (data) => data.scheduleId === id
    );
    return filteredData;
    } catch(error){
        console.error(error);
    }
  };

  export default { getSchedules, getScheduleLogs };

  