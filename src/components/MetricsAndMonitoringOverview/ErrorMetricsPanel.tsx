import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ErrorMetricsPanel: React.FC = () => {
    const sampleData = {
        labels: ['Service A', 'Service B', 'Service C'],
        datasets: [
            {
                label: 'Error Rates',
                data: [30, 20, 50],
                backgroundColor: ['red', 'orange', 'yellow']
            }
        ]
    };

    return(
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>Error Metrics</Typography>
                <Bar data={sampleData} />
            </CardContent>
        </Card>
    );
}

export default ErrorMetricsPanel;