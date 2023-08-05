import React, { useState } from 'react'

export default function usePage(compstates) {
    const [gap, setgap] = useState(compstates?.distance || 5);
    const [margin, setmargin] = useState(compstates?.margin || 0);
    const [padding, setpadding] = useState(compstates?.padding || 0);

    return {
        states: { gap, margin, padding },
        setters: { setgap, setmargin, setpadding },
    };
}
