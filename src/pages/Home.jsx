import NotesIcon from "@mui/icons-material/Notes";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import TasksList from "../components/TasksList";

const drawerWidth = 240;

function Home({ mobileOpen, handleDrawerToggle }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <List>
            <ListItemButton key="Todo">
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItemButton>
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Divider />
          <List>
            <ListItemButton key="Todo">
              <ListItemIcon>
                <NotesIcon />
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItemButton>
          </List>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <TasksList />
      </Box>
    </Box>
  );
}

export default Home;
