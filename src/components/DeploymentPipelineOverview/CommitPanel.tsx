import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CommitProps {
    author: string;
    timestamp: Date;
    message: string;
    triggeredDeployment: boolean;
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
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CommitPannel;