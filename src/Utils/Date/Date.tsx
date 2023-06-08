import { useState }  from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from'../Date/Date.module.css'
import Calendar from '../../assets/Image/calendar.png'

const DatePickerProps = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => 
  {
    setStartDate(date);
  };
  return (
    <div className={classes.Date}>  
      {/* <img src={Calendar}></img> */}
      <DatePicker  
          showIcon
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
      ></DatePicker>
    </div>
  );
};

export default DatePickerProps;