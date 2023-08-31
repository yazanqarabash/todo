import { Grid, TextField } from "@mui/material";

function ManageTaskForm({ errors, handleTask, task }) {
  return (
    <form noValidate className="mx-3 mt-6">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            aria-required="true"
            fullWidth
            id="taskTitle"
            label="Task Title"
            aria-label="title"
            name="title"
            autoComplete="taskTitle"
            helperText={errors.title || errors.error}
            error={errors.title || errors.error ? true : false}
            onChange={handleTask}
            value={task.title}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            aria-required="true"
            fullWidth
            id="taskBody"
            label="Task Body"
            aria-label="body"
            name="body"
            autoComplete="taskBody"
            multiline
            aria-multiline="true"
            minRows={25}
            maxRows={25}
            helperText={errors.body || errors.error}
            error={errors.body || errors.error ? true : false}
            onChange={handleTask}
            value={task.body}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default ManageTaskForm;
