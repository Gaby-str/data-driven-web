import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/IgualCond.css';

function IgualCond(){
    return (
    <div className="igual-cond">
        {/* algo */}
        <p className='campo-label'>Ingrese valor de igualdad:</p>
        <TextField id="outlined-basic" label="Es igual a" variant="outlined" />
    </div>
    )
}

export default IgualCond;