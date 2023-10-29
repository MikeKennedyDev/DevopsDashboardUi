import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

interface StagingDeploymentPanelProps {
    isDeployed: boolean,
    onDeploy: () => void,
    onRollback: () => void
}

const StagingDeploymentPanel: React.FC<StagingDeploymentPanelProps> = ({ isDeployed, onDeploy, onRollback }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>Staging Deployment</Typography>
                <Typography>Status: {isDeployed ? 'Deployed' : 'Not Deployed'}</Typography>
                <Button variant="contained" color='primary' onClick={onDeploy} disabled={isDeployed}>Deploy</Button>
                <Button variant="contained" color='primary' onClick={onRollback} disabled={!isDeployed}>Rollback</Button>
            </CardContent>
        </Card>
    );
};

export default StagingDeploymentPanel;