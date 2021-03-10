import "./CourseDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneCourse } from "../../services/courses";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#1a2d68",
  },
}));

export default function CourseDetail(props) {
  const classes = useStyles();
  const [courseItem, setCourseItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  console.log("coursecreate props", props);

  useEffect(() => {
    const fetchCourseItem = async () => {
      const courseData = await getOneCourse(id);
      setCourseItem(courseData);
      setLoaded(true);
      console.log("this is courseData", courseData);
    };
    fetchCourseItem();
  }, [id]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="course-detail-container">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {courseItem.topic.category.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={courseItem.topic.category}
          subheader="September 14, 2016"
        />
        <CardMedia className={classes.media} image={courseItem.img_url} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h2">
            {courseItem.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <h3>Additional Info</h3>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <div>
        <div>
          {currentUser && (
            <button onClick={() => handleDelete(courseItem.id)}>delete</button>
          )}
        </div>
      </div>
    </div>
  );
}
