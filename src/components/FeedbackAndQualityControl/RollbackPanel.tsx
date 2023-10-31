import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Button, Divider, ListItemText, Stack } from '@mui/material';

export interface RollbackVersion {
    version: string;
    deployedDate: string;
};

interface RollbackPanelProps {
    versions: RollbackVersion[];
    onRollback: (version: string) => void;
}

const RollbackPanel: React.FC<RollbackPanelProps> = ({ versions, onRollback }) => {
    return(
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant='h6' gutterBottom>Rollback Options</Typography>
                <Divider />
                <List>
                    {versions.map((version, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <Divider variant='inset' component='li' />}
                            <ListItem
                                secondaryAction={
                                    <Button
                                        onClick={() => onRollback(version.version)}
                                        variant='contained'
                                        color='secondary'
                                        size='small'
                                        >
                                            Rollback
                                        </Button>
                                }
                                alignItems='flex-start'
                                >
                                    <ListItemText
                                        primary={`Version: ${version.version}`}
                                        secondary={`Deployed on ${version.deployedDate}`}
                                        primaryTypographyProps={{ fontWeight: 'medium' }}
                                        />
                                </ListItem>
                        </React.Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

export default RollbackPanel;