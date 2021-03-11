import "./DancingClasses.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 170,
  },
});

export default function TechClasses(props) {
  const { courses } = props;
  const classes = useStyles();
  const dancingCourses = courses.filter(
    (course) => course.topic.category === "Dancing"
  );

  return (
    <div className="all-page-container">
      <div className="title-container">
        <h1>Dancing Categories</h1>
      </div>
      <div className="cards-container">
        {dancingCourses.map((course) => (
          <div key={course.id} className="all-page-cards">
            <Link to={`/courses/${course.id}`}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`${course.img_url}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {course.info}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
