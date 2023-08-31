import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ManageTaskHeader({ handleClose, task, handleSubmit }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" sx={{ ml: 4 }}>
          {task.id !== null ? "Edit task" : "Create a new task"}
        </Typography>

        <Button
          autoFocus
          color="inherit"
          onClick={handleSubmit}
          aria-label={task.id !== null ? "save" : "submit"}
          sx={{ position: "absolute", right: 15 }}
        >
          {task.id !== null ? "Save" : "Submit"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ManageTaskHeader;
