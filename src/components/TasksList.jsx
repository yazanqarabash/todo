import { useEffect, useState } from "react";
import { addTask, deleteTask, editTask, getTasks } from "../api/tasks";
import { Grid, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { validateTask } from "../helpers/validateTask";
import Task from "./Task";
import ViewTask from "./ViewTask";
import ManageTaskModal from "./ManageTaskModal";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [task, setTask] = useState({
    id: null,
    title: "",
    body: "",
    userId: null,
  });
  const [errors, setErrors] = useState([]);

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.length > 0) {
        try {
          const tasks = await getTasks();
          const userTasks = tasks.filter((task) => task.userId === user[0].id);
          setTasks(userTasks);
        } catch (error) {
          setErrors(error.response.data);
          console.error("Failed to GetTasks: ", error);
        } finally {
          setLoading(false);
        }
      } else {
        // Handle the case where user data is not available
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handleTask = (event) => {
    if (user && user.length > 0) {
      const { name, value } = event.target;
      setTask((prevText) => ({
        ...prevText,
        [name]: value,
        userId: user[0].id,
      }));
    } else {
      navigate("/login");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleResetTaskField();
  };

  const handleResetTaskField = () => {
    setTask({ id: null, title: "", body: "" });
    setErrors([]);
  };

  const handleViewClose = () => {
    setViewOpen(false);
  };

  const handleViewTask = (task) => {
    setTask(task);
    setViewOpen(true);
  };

  const handleEditTask = (task) => {
    setTask(task);
    setOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
      .then(() => {
        const remainedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(remainedTasks);
      })
      .catch((error) => {
        setErrors(error.response.data);
        console.error("Failed to deleteTask", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateTask({ ...task });

    if (Object.keys(validationErrors).length === 0) {
      if (task.id !== null) {
        editTask(task)
          .then((editedTask) => {
            const updatedTasks = tasks.map((item) =>
              item.id === editedTask.id ? editedTask : item
            );
            setTasks(updatedTasks);
            handleResetTaskField();
            setOpen(false);
          })
          .catch((error) => {
            setOpen(true);
            setErrors(error.response.data);
            console.error("Failed to editTask:", error);
          });
      } else {
        addTask(task)
          .then((newTask) => {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            handleResetTaskField();
            setOpen(false);
          })
          .catch((error) => {
            setOpen(true);
            setErrors(error.response.data);
            console.error("Failed to addTask:", error);
          });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  if (loading && tasks.length === 0) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="Add Task"
        onClick={handleClickOpen}
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <AddCircleIcon sx={{ fontSize: 60 }} />
      </IconButton>

      <ManageTaskModal
        handleClose={handleClose}
        task={task}
        handleSubmit={handleSubmit}
        handleTask={handleTask}
        errors={errors}
        open={open}
      />

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleViewTask={handleViewTask}
          />
        ))}
      </Grid>

      <ViewTask
        viewOpen={viewOpen}
        task={task}
        handleViewClose={handleViewClose}
      />
    </div>
  );
}

export default TasksList;
