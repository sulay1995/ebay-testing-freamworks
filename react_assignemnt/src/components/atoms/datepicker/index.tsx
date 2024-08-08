import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import moment from 'moment';

interface DatePickerInterface {
  label: string;
  value: string;
  handleChange: VoidFunction;
}

const DatePicketComponent: React.FC<DatePickerInterface> = (
  props: DatePickerInterface
) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDatePicker
      label={props.label}
      inputFormat="DD/MM/YYYY"
      value={props.value}
      onChange={props.handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

DatePicketComponent.defaultProps = {
  label: '',
  value: moment().format('DD/MM/YYYY'),
};

export default DatePicketComponent;
