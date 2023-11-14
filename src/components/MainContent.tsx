import React, { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';

// Deployment Pipeline imports
import CommitPanel from './DeploymentPipelineOverview/CommitPanel';
import BuildPanel from './DeploymentPipelineOverview/BuildPanel';
import StagingDeploymentPanel from './DeploymentPipelineOverview/StagingDeploymentPanel';
import ProductionDeploymentPanel from './DeploymentPipelineOverview/ProductionDeploymentPanel';

// Metrics & Monitoring imports
import PerformanceMetricsPanel from './MetricsAndMonitoringOverview/PerformanceMetricsPanel';
import ErrorMetricsPanel from './MetricsAndMonitoringOverview/ErrorMetricsPanel';
import ResourceUtilizationPanel from './MetricsAndMonitoringOverview/ResourceUtilizationPanel';

// Feedback & Quality control imports
import TestResultsPanel, { TestResult } from './FeedbackAndQualityControl/TestResultsPanel';
import RollbackPanel, { RollbackVersion } from './FeedbackAndQualityControl/RollbackPanel';

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
    
    const [isStagingDeployed, setIsStagingDeployed] = useState(false);
    const [isProductionDeployed, setIsProductionDeployed] = useState(false);
    
    const buildStatus = 'in progress';

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

    const sampleTestResults: TestResult[] = [
        { name: 'Unit Test 1', status: 'passed', logLink: 'https://loglink1.com'},
        { name: 'Integration Test 2', status: 'failed', logLink: 'https://loglink2.com' }
    ]

    const handleRollbackVersion = (version: string) => {
        alert(`Rolling back to ${version}`);
    }

    const [rollbackVersions, setRollbackVersions] = useState<RollbackVersion[]>([
        { version: '1.0.0', deployedDate: '2023-10-20' },
        { version: '1.1.0', deployedDate: '2023-10-28' },
        { version: '1.1.2', deployedDate: '2023-10-29' },
    ]);

    return (
        <Container>

            <Grid container spacing={2}>
                {/* Deployment Pipeline */}
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>Deployment Pipeline Overview</Typography>
                    <CommitPanel commits={sampleContent}/>
                    <BuildPanel status={buildStatus} logLink='google.com'/>
                    <StagingDeploymentPanel isDeployed={isStagingDeployed} onDeploy={handleDeploymentStaging} onRollback={handleRollback} />
                    <ProductionDeploymentPanel isDeployed={isProductionDeployed} onDeploy={handleDeploymentProduction} onRollback={handleRollbackProduction} />
                </Grid>

                {/* Metrics and Monitoring */}
                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>Metrics & Monitoring</Typography>
                    <PerformanceMetricsPanel />
                    <ErrorMetricsPanel />
                    <ResourceUtilizationPanel />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant='h6'>Feedback & Quality Control</Typography>
                    <TestResultsPanel testResults={sampleTestResults} />
                    <RollbackPanel versions={rollbackVersions} onRollback={handleRollbackVersion} />
                </Grid> 
            </Grid>
        </Container>
    );
};

export default MainContent;