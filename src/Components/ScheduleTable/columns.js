import { format } from "date-fns";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Server Name",
    accessor: "serverName",
  },
  {
    Header: "Start Time",
    accessor: "startTime",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "End Time",
    accessor: "endTime",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Schedule Id",
    accessor: "scheduleId",
  },
  {
    Header: "Status",
    accessor: "status",
    
  },
];
