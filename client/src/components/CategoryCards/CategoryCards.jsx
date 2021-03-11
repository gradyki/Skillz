import "./CategoryCards.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import coding from "../../assets/Coding.png";
import cooking from "../../assets/Cooking.jpg";
import dancing from "../../assets/Dance.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 350,
  },
});

export default function CategoryCards() {
  const classes = useStyles();

  return (
    <div className="category-section">
      <div className="category-title">
        <h1>Categories</h1>
      </div>
      <div className="category-cards-container">
        <Link to="/tech">
          <div className="category-tech">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={coding}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Learn Software programming, web development, networking
                    technology, database managment in our many technical
                    courses.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </div>
        </Link>

        <div className="category-cooking">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={cooking}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cooking
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Learn to cook a variety of different foods from cuisines all
                  over the world.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>

        <div className="category-dancing">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={dancing}
                title="Salsa Class"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dancing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Classes for learning different styles and varieties of dances
                  from begginner to expert level
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
