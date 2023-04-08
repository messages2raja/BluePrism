import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScheduleTable from './ScheduleTable';
const currentScheduleLog=[
    {
        "id": 7702228,
        "startTime": "2021-03-27T07:06:37.380Z",
        "endTime": "2021-06-25T18:04:54.379Z",
        "status": "Terminated",
        "serverName": "aliquip aliqua dolor consectetur",
        "scheduleId": 87250901
    },
    {
        "id": 83285938,
        "startTime": "2021-09-19T06:38:41.678Z",
        "endTime": "2021-06-19T12:39:02.390Z",
        "status": "Terminated",
        "serverName": "minim amet",
        "scheduleId": 87250901
    },
    
];

describe('Schedule table test',()=>{
    test('Should render the table',()=>{
render(<ScheduleTable tabledata={currentScheduleLog} />)
  // Act
  const table = screen.getByRole('table');
  const rows = screen.getAllByRole('row');
  const headerCells = rows[0].querySelectorAll('th');
  const bodyCells = rows[1].querySelectorAll('td');

  // Assert
  expect(table).toBeInTheDocument();
  expect(rows).toHaveLength(3); 
  expect(headerCells).toHaveLength(6);
  expect(headerCells[0]).toHaveTextContent('Id');
  expect(headerCells[1]).toHaveTextContent('Server Name');
  expect(headerCells[2]).toHaveTextContent('Start Time');
  expect(headerCells[3]).toHaveTextContent('End Time');
  expect(headerCells[4]).toHaveTextContent('Schedule Id');
  expect(headerCells[5]).toHaveTextContent('Status');
  expect(bodyCells).toHaveLength(6);
  expect(bodyCells[0]).toHaveTextContent('7702228');
  expect(bodyCells[1]).toHaveTextContent('aliquip aliqua dolor consectetur');
  expect(bodyCells[2]).toHaveTextContent('27/03/2021');
  expect(bodyCells[3]).toHaveTextContent('25/06/2021');
  expect(bodyCells[4]).toHaveTextContent('87250901');
  expect(bodyCells[5]).toHaveTextContent('Terminated');
    })
    test('Search input with existing column value',()=>{
        render(<ScheduleTable tabledata={currentScheduleLog} />)
        const searchInput = screen.getByRole('searchbox');
        userEvent.type(searchInput, 'aliquip');
        
        const nameCells = screen.getAllByText(/aliquip/);
        expect(nameCells.length).toBe(1);
        })
})

