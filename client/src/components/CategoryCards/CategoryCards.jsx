import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import coding from '../../assets/Coding.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CategoryCards() {
  const classes = useStyles();

  return (
    <div className='category-cards-container'>
    <h1>Categories</h1>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={coding}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Technology Classes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn Software programming, web development, networking technology, database managment in our many technical courses.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
      </Card>
      </div>
  );
}