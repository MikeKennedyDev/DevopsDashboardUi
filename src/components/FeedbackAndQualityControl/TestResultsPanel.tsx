import React from 'react';

import { Card, CardContent, Typography, Link, List, ListItem, ListItemText } from '@mui/material';

export interface TestResult {
    name: string;
    status: 'passed' | 'failed';
    logLink: string;
};

const TestResultsPanel: React.FC<{ testResults: TestResult[] }> = ({ testResults }) => {
    return(
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6'>Test Results</Typography>
                <List>
                    {testResults.map((test, index) => (
                        <ListItem key={index}>
                            <ListItemText
                            primary={test.name}
                            secondary={test.status === 'failed' ? <Link href={test.logLink} target='_blank'>View Log</Link> : 'Passed'}
                            secondaryTypographyProps={{color: test.status === 'failed' ? 'error' : 'textPrimary'}}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default TestResultsPanel;