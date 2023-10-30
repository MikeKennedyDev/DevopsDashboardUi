import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
ChartJS.register(Tooltip, Legend, ArcElement, CategoryScale);

const ResourceUtilizationPanel: React.FC = () => {
    const sampleData = {
        labels: ['CPU', 'Memory', 'Network IO'],
        datasets: [
            {
                label: 'Resource Usage',
                data: [53, 35, 40],
                borderColor: 'blue',
                backgroundColor: ['blue', 'green', 'purple']
            }
        ]
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>Resource Utilization</Typography>
                <Doughnut data={sampleData} />
            </CardContent>
        </Card>
    );
}

export default ResourceUtilizationPanel;