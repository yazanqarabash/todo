import { Dialog } from "@mui/material";
import ManageTaskForm from "./ManageTaskForm";
import ManageTaskHeader from "./ManageTaskHeader";

function ManageTaskModal({
  handleClose,
  task,
  handleSubmit,
  handleTask,
  errors,
  open,
}) {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <ManageTaskHeader
        handleClose={handleClose}
        task={task}
        handleSubmit={handleSubmit}
      />

      <ManageTaskForm task={task} handleTask={handleTask} errors={errors} />
    </Dialog>
  );
}

export default ManageTaskModal;
