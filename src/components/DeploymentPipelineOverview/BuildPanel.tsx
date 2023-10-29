import React from 'react';
import { Card, CardContent, Link, Typography } from '@mui/material';

interface BuildPanelProps {
    status: 'in progress' | 'success' | 'failed';
    logLink: string;
}

const BuildPanel: React.FC<BuildPanelProps> = ({ status, logLink }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>CI Build Status</Typography>
                <Typography>Status: {status}</Typography>
                <Link href={logLink} target="_blank">View Logs</Link>
            </CardContent>
        </Card>
    );
};

export default BuildPanel;