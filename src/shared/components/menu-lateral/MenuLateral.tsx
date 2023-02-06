import { ReactElement } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import {Box, width} from '@mui/system';

type Props = {
    children: ReactElement
}

export const MenuLateral = ({children}:Props) => {
  const theme = useTheme();

  return(
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12)}} src="/static/images/avatar/1.jpg" />  
          </Box>

          <Divider/>
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial"/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};