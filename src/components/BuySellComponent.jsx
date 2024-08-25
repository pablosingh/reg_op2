import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

export default function BuySellComponent( { handlerBuy } ) {
    const [checked, setChecked] = useState(true);
    const [ labelSwitch, setLabelSwitch] = useState("Compra");
    const handleChange = (event) => {
        setChecked(event.target.checked);
        event.target.checked ? setLabelSwitch("Compra") : setLabelSwitch("Venta");
        handlerBuy(event.target.checked);
    };
    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        name="switch"
                        color="primary"
                    />
                }
                label={labelSwitch}
            />
        </div>
    );
};
