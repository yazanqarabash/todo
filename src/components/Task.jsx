import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

function Task({ task, handleDeleteTask, handleEditTask, handleViewTask }) {
  return (

        <Grid key={task.id} item xs={12} sm={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                {task.title}
              </Typography>
              <Typography variant="body2" component="p">
                {task.body.substring(0, 65)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => handleViewTask(task)} aria-label="view">
                View
              </Button>
              <Button onClick={() => handleEditTask(task)} aria-label="edit">
                Edit
              </Button>
              <Button
                onClick={() => handleDeleteTask(task.id)}
                aria-label="delete"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>

  );
}

export default Task;
