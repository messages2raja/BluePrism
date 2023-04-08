import { useMemo } from "react";
import { useTable, useGlobalFilter,useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import "./ScheduleTable.css";
export default function ScheduleTable({ tabledata }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tabledata, [tabledata]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,useSortBy
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows,state,setGlobalFilter, prepareRow } =
    tableInstance;
    const {globalFilter} = state;
  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
  
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}
