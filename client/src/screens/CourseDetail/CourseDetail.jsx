import "./CourseDetail.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneCourse } from "../../services/courses";
import { makeStyles } from "@material-ui/core/styles";
import { dateConverter } from "../../services/helpers";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
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
    paddingTop: "56.25%",
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CourseDetail(props) {
  const classes = useStyles();
  const [courseItem, setCourseItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const fetchCourseItem = async () => {
      const courseData = await getOneCourse(id);
      setCourseItem(courseData);
      setLoaded(true);
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
      <div className="card-container">
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
            subheader={`$${courseItem.price}`}
          />
          <CardMedia className={classes.media} image={courseItem.img_url} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <span id="title">{courseItem.title}</span>
              <br />
              {`${courseItem.info}`}
            </Typography>
          </CardContent>
          {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${courseItem.info}`}
          </Typography>
        </CardContent> */}
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
              <Typography paragraph>
                Created On: {dateConverter(courseItem.created_at)}
              </Typography>
              <Typography paragraph>
                Updated On: {dateConverter(courseItem.updated_at)}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {currentUser && (
          <div className="buttons-container">
            <div className="edit">
              <Link to={`/courses/${courseItem.id}/edit`}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Edit
                </Button>
              </Link>
            </div>
            <div className="delete">
              <Button
                onClick={() => handleDelete(courseItem.id)}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
