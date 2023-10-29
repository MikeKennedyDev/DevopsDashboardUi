import React, { useState } from 'react';
import { Typography, Container, Button, Card, CardContent } from '@mui/material';

import CommitPanel from './DeploymentPipelineOverview/CommitPanel';
import BuildPanel from './DeploymentPipelineOverview/BuildPanel';
import StagingDeploymentPanel from './DeploymentPipelineOverview/StagingDeploymentPanel';
import ProductionDeploymentPanel from './DeploymentPipelineOverview/ProductionDeploymentPanel';

const MainContent: React.FC = () => {
    const sampleContent = [{
            author: 'Mike Kennedy',
            timestamp: new Date(),
            message: 'Initial commit',
            triggeredDeployment: true,
            buildStatus: 'In Progress',
            stagingStatus: 'Success',
            productionStatus: 'Error'
         }];

    const buildStatus = 'in progress';
    const [isStagingDeployed, setIsStagingDeployed] = useState(false);
    const [isProductionDeployed, setIsProductionDeployed] = useState(false);

    const handleDeploymentStaging = () => {
        setIsStagingDeployed(true);
    };

    const handleRollback = () => {
        setIsStagingDeployed(false);
    };

    const handleDeploymentProduction = () => {
        setIsProductionDeployed(true);
    }

    const handleRollbackProduction = () => {
        setIsProductionDeployed(false);
    }

    return (
        <Container>
            <Typography variant='h4'>Deployment Pipeline Overview</Typography>

            <CommitPanel commits={sampleContent}/>
            <BuildPanel status={buildStatus} logLink='google.com'/>
            <StagingDeploymentPanel isDeployed={isStagingDeployed} onDeploy={handleDeploymentStaging} onRollback={handleRollback} />
            <ProductionDeploymentPanel isDeployed={isProductionDeployed} onDeploy={handleDeploymentProduction} onRollback={handleRollbackProduction} />

        </Container>
    );
};

export default MainContent;