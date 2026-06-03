import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultData=[
  {
    "student_id": "STU001",
    "name": "Liam",
    "physics": 85,
    "chemistry": 92
  },
  {
    "student_id": "STU002",
    "name": "Olivia",
    "physics": 78,
    "chemistry": 81
  },
  {
    "student_id": "STU003",
    "name": "Noah",
    "physics": 95,
    "chemistry": 89
  },
  {
    "student_id": "STU004",
    "name": "Emma",
    "physics": 64,
    "chemistry": 70
  },
  {
    "student_id": "STU005",
    "name": "Oliver",
    "physics": 88,
    "chemistry": 84
  },
  {
    "student_id": "STU006",
    "name": "Ava",
    "physics": 91,
    "chemistry": 95
  },
  {
    "student_id": "STU007",
    "name": "Elijah",
    "physics": 73,
    "chemistry": 76
  },
  {
    "student_id": "STU008",
    "name": "Sophia",
    "physics": 82,
    "chemistry": 85
  },
  {
    "student_id": "STU009",
    "name": "James",
    "physics": 59,
    "chemistry": 65
  },
  {
    "student_id": "STU010",
    "name": "Isabella",
    "physics": 97,
    "chemistry": 94
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={ResultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="physics"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;