import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceMetricsPanel: React.FC = () => {

    const sampleData = {
        labels: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
        datasets: [
            {
                label: 'Response Time (ms)',
                data: [20, 22, 18, 25, 20],
                fill: false,
                borderColor: 'blue',
                backgroundColor: 'rgb(0, 0, 255, 0.1)',
                tension: 0.1
            }
        ]
    };

    return(
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>Performance Metrics</Typography>
                <Line data={sampleData} />
            </CardContent>
        </Card>
    );
}

export default PerformanceMetricsPanel;