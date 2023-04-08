import { render, screen , fireEvent} from '@testing-library/react';

import Schedules from './Schedules';
const scheduleList=
    [
        {
            "id": 87250901,
            "name": "Random Schedule Name (0.26406638383446235)",
            "description": "test description1",
            "isRetired": true,
            "tasksCount": 5,
            "startPoint": "2021-11-12T09:25:18.859Z",
            "endPoint": "2021-09-04T14:03:42.283Z",
            "dayOfWeek": 6,
            "dayOfMonth": 3,
            "startDate": "2021-03-22T07:36:27.191Z",
            "endDate": "2021-10-10T03:05:53.424Z"
        },
        {
            "id": 59897647,
            "name": "Random Schedule Name (0.7224852592166111)",
            "description": "test description2",
            "isRetired": false,
            "tasksCount": 2,
            "startPoint": "2021-03-29T23:09:35.913Z",
            "endPoint": "2021-06-20T21:11:51.906Z",
            "dayOfWeek": 2,
            "dayOfMonth": 14,
            "startDate": "2021-03-01T07:15:20.485Z",
            "endDate": "2021-05-20T01:09:47.552Z",
            "intervalType": "Second",
            "timePeriod": 21
        }
    ];
    const currentScheduleId=87250901;
   
describe('schedule component test',()=>{
    test('should render schedules',()=>{
        render(<Schedules scheduleList={scheduleList}/>);
        const tile = screen.getByRole('list');
        const tileDescription = screen.getByText(/test description1/i);
        expect(tileDescription).toBeInTheDocument();
        expect(tile).toBeInTheDocument();
    })
    
    test('should render two schedules',()=>{
        render(<Schedules scheduleList={scheduleList}/>);
        const scheduleHeader = screen.getAllByRole('listitem');
        expect(scheduleHeader.length).toBe(2);
    })

    test('should add class select the schedule list as per the current selected id',()=>{
        render(<Schedules scheduleList={scheduleList} currentScheduleId={currentScheduleId}/>);
        const list = screen.getAllByRole('listitem');
        expect(list[0]).toHaveClass('selected');
    })
    test('should render the retire/unretire button',()=>{
        render(<Schedules scheduleList={scheduleList} currentScheduleId={currentScheduleId}/>);
        const retirebutton = screen.getByRole('button',{name:'Retire'});
        expect(retirebutton).toBeInTheDocument();
        const unretirebutton = screen.getByRole('button',{name:'UnRetire'});
        expect(unretirebutton).toBeInTheDocument()
    })
    // test('should call the function on retire/unretire button click',()=>{
    //     const retireHandler = jest.fn();
    //     render(<Schedules scheduleList={scheduleList} currentScheduleId={currentScheduleId}/>);
    //     const retirebutton = screen.getByRole('button',{name:'Retire'});
    //     fireEvent.click(retirebutton);
    //     expect(retireHandler).toHaveBeenCalled()
    // })

})