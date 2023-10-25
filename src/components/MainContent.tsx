import React from 'react';
import { Typography, Container } from '@mui/material';
import CommitPanel from './DeploymentPipelineOverview/CommitPanel';

const MainContent :React.FC = () => {
    const sampleContent = [
        {
            author: 'Mike Kennedy',
            timestamp: new Date(),
            message: 'Initial commit',
            triggeredDeployment: true
        }
    ];

    return (
        <Container>
            <Typography variant='h4'>Deployment Pipeline Overview</Typography>
            <CommitPanel commits={sampleContent}/>
        </Container>
    );
};

export default MainContent;