import { CheckCheck } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex mt-4'><CheckCheck className='mr-2'></CheckCheck>{feature}</p>
        </div>
    );
};

export default Feature;