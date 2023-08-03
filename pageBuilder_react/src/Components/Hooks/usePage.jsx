import React, { useState } from 'react'

export default function usePage(compstates) {
    const [distance, setdistance] = useState(compstates?.distance||null);
    const [margin, setmargin] = useState(compstates?.margin||null);
    const [padding, setpadding] = useState(compstates?.padding||null);

    return {
        states: { distance, margin, padding },
        setters: { setdistance, setmargin, setpadding },
    };
}
