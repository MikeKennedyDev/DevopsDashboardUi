import React from 'react';
import { Card, CardContent, Chip, Typography } from '@mui/material';

interface CommitProps {
    author: string;
    timestamp: Date;
    message: string;
    triggeredDeployment: boolean;
    buildStatus?: string;
    stagingStatus?: string;
    productionStatus?: string;
}

const CommitPannel: React.FC<{ commits: CommitProps[] }> = ({ commits }) => {
    return (
        <div className='commit-panel'>
            {commits.map((commit, index) => (
                <Card key = {index} sx={{ mb: 2, bg: commit.triggeredDeployment ? 'triggered' : ''}}>
                    <CardContent>
                        <Typography>Author: {commit.author}</Typography>
                        <Typography>Timestamp: {commit.timestamp.toString()}</Typography>
                        <Typography>Message: {commit.message}</Typography>
                        {commit.buildStatus && (
                            <Chip label={`Build: ${commit.buildStatus}`} color={commit.buildStatus === 'Success' ? 'success' : 'error'} />
                        )}
                        {commit.stagingStatus && (
                            <Chip label={`Staging: ${commit.stagingStatus}`} color={commit.stagingStatus === 'Success' ? 'success' : 'error'} />
                        )}
                        {commit.productionStatus && (
                            <Chip label={`Production Status: ${commit.productionStatus}`} color={commit.productionStatus === 'Success' ? 'success' : 'error'} />
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CommitPannel;