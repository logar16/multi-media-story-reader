import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

/* 
//Example usage: 
function Example() {
    const [colors, setColors] = useState({red: 50, green: 250, blue: 150});
    const handleChange = (event, newValue) => {
    let id = event.target.id;
    if (id)
        setColors({...colors, [id]: newValue})
    };
    return (
        <div>
            <ColorPicker  colors={colors} onChange={handleChange}/>
            <p  style={{color: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`}}>
                Text to colorize
            </p>
        </div>
    )
}
*/

function ColorPicker({ colors, onChange }) {
  return (
    <Grid container justify='space-around'>
      {Object.keys(colors).map((key) => <ColorSlider name={key} value={colors[key]} onChange={onChange} />
      )}
    </Grid>
  );
}

function ColorSlider({ name, value, onChange }) {
  return (
    <Grid item>
      <Typography>
        {name}
      </Typography>
      <Slider
        id={name}
        value={value}
        onChange={onChange}
        min={0}
        max={255}
        style={{ width: 300 }} />
    </Grid>
  );
}
