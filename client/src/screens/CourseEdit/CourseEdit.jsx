import "./CourseEdit.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#3cb1de",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CourseEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    price: null,
    img_url: "",
    topic_id: "",
  });

  const { title, info, price, img_url, topic_id } = formData;
  const { courses, handleUpdate, topics } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const courseItem = courses.find((course) => course.id === Number(id));
      setFormData({
        title: courseItem.title,
        info: courseItem.info,
        price: courseItem.price,
        img_url: courseItem.img_url,
        topic_id: courseItem.topic_id,
      });
    };
    if (courses.length) {
      prefillFormData();
    }
  }, [courses, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Edit Course
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            value={title}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Info"
            label="Info"
            name="info"
            autoComplete="info"
            value={info}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="image"
            label="image"
            name="img_url"
            autoComplete="image"
            value={img_url}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="price"
            label="price"
            name="price"
            autoComplete="price"
            value={price}
            onChange={handleChange}
            autoFocus
          />

          {/* <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </label>
          <label>
            Info:
            <input
              type="text"
              name="info"
              value={info}
              onChange={handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
          </label>
          <label>
            :
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </label>
          <br /> */}

          <select id="select" onChange={handleChange} name="topic_id">
            {topics?.map((topic) => {
              return (
                <option
                  key={topic.id}
                  value={topic.id}
                  selected={topic.id === topic_id}
                >
                  {topic.category}
                </option>
              );
            })}
          </select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
