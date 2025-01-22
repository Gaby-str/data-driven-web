import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/IgualCond.css';

function BetweenCond(){
  return (
  <div className="between-cond">
    <div className='label'>
      <p className='label-text'>
        Valores entre:
      </p>
    </div>

    <div className='botones'>
    <TextField id="outlined-basic" label="Límite inferior" variant="outlined" />
    <p className='label-text'> Y </p>
    <TextField id="outlined-basic" label="Límite superior" variant="outlined" />
    </div>
    {/* algo */}
  </div>
  )
}

export default BetweenCond;