import React from 'react';
import { Card, CardContent, Chip, Typography, Stack, Box, CardHeader } from '@mui/material';

interface CommitProps {
    author: string;
    timestamp: Date;
    message: string;
    triggeredDeployment: boolean;
    buildStatus?: string;
    stagingStatus?: string;
    productionStatus?: string;
}

const CommitPanel: React.FC<{ commits: CommitProps[] }> = ({ commits }) => {
    return (
        <Box className='commit-panel' sx={{ overflow: 'auto', maxHeight: 'calc(100vh - 100px)', px: 2 }}>
            {commits.map((commit, index) => (
                <Card key={index} sx={{ mb: 2, bgcolor: commit.triggeredDeployment ? 'action.selected' : 'background.paper' }}>
                    <CardHeader
                        title={commit.message}
                        subheader={`${commit.author}, ${commit.timestamp.toLocaleString()}`}
                        titleTypographyProps={{ variant: 'subtitle1' }}
                        subheaderTypographyProps={{ variant: 'body2' }}
                    />
                    <CardContent>
                        <Stack direction="column" spacing={1}>
                            {commit.buildStatus && (
                                <Chip label={`Build: ${commit.buildStatus}`} color={commit.buildStatus === 'Success' ? 'success' : 'error'} />
                            )}
                            {commit.stagingStatus && (
                                <Chip label={`Staging: ${commit.stagingStatus}`} color={commit.stagingStatus === 'Success' ? 'success' : 'error'} />
                            )}
                            {commit.productionStatus && (
                                <Chip label={`Production: ${commit.productionStatus}`} color={commit.productionStatus === 'Success' ? 'success' : 'error'} />
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CommitPanel;
