import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes=use(marksPromise);
    const marksData=marksDataRes.data;

    const marksCahrtData=marksData.map(studentData=>{
        const student={
            id:studentData.student_id,
            name:studentData.name,
            physics:studentData.physics,
            chemistry:studentData.chemistry
        }
        const avg=(student.physics+student.chemistry)/2;
        student.avg=avg;
        return student;
    })

    return (
        <div>
            <BarChart width={500} height={300} data={marksCahrtData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="chemistry" fill='yellow'></Bar>
                <Bar dataKey="physics" fill='blue'></Bar>
                <Bar dataKey="avg" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;