import React, { useState } from 'react';

const test1 = () => {
    const [value, setValue] = useState(1);

    return <div>{value}</div>;
};

export default test1;
