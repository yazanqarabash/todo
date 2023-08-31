import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ViewTask({ viewOpen, handleViewClose, task }) {
  return (
    <Dialog
      onClose={handleViewClose}
      aria-label="view task dialog"
      open={viewOpen}
      fullWidth
    >
      <DialogTitle>{task.title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleViewClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <TextField
          fullWidth
          id="taskBody"
          name="body"
          multiline
          minRows={10}
          maxRows={25}
          value={task.body}
          aria-readonly
          InputProps={{
            readOnly: true,
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ViewTask;
