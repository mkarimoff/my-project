
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Price</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Price">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>100$-500$</MenuItem>
          <MenuItem value={2}>500$-800$</MenuItem>
          <MenuItem value={3}>800$-1.000$</MenuItem>
          <MenuItem value={4}>All/others</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}