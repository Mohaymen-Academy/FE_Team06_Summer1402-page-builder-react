import React, { useState } from 'react'

export default function usePage() {
    const [distance, setdistance] = useState(null);
    const [margin, setmargin] = useState(null);
    const [padding, setpadding] = useState(null);

    return {
        states: { distance, margin, padding },
        setters: { setdistance, setmargin, setpadding },
    };
}
