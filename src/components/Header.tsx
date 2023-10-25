import React from 'react';
import { Project, User, HeaderProps } from './types';
import { AppBar, Toolbar, Button, Typography, Select, MenuItem } from '@mui/material';

const Header: React.FC<HeaderProps> = ({ projects, user, notificationsCount }) => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{flexGrow: 1 }}>
                    Project:
                </Typography>
                <Select defaultValue={projects[0]?.id}>
                    {projects.map((project: Project) => (
                        <MenuItem key={project.id} value={project.id}>
                            {project.name}
                        </MenuItem>
                    ))}
                </Select>

                <Typography variant='body1' component="div" sx={{ ml: 3 }}>
                    {notificationsCount > 0 && `Notifications: ${notificationsCount}`}
                </Typography>

                <Typography variant='body1' component="div" sx={{ ml: 3}}>
                    User: {user.name}
                </Typography>

                <Button color='inherit'>Settings</Button>
                <Button color='inherit'>Help</Button>
                <Button color='inherit'>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;