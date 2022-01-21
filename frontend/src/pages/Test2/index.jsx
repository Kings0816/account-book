import React, { useState } from 'react';

const test2 = () => {
    const [value, setValue] = useState(2);

    return <div>{value}</div>;
};

export default test2;
