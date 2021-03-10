// import './AllCourses.css'
// import {useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: '#1a2d68',
//   },
// }));

// export default function AllCourses(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);
//   const { courses } = props

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
    
    
    
//     <div className='all-page-container'>
//       <div className='allcourses-title'>
//         <h1>All Courses</h1>
//       </div>
//       <div className='cards-container'>
//       {courses.map(course => <div key={course.id} className='all-page-cards'><Card className={classes.root}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={classes.avatar}>
//               R
//           </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={course.title}
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           className={classes.media}
//           image={`${course.img_url}`}
//           title={course.title}
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             This impressive paella is a perfect party dish and a fun meal to cook together with your
//             guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <h3>Additional Info</h3>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Description</Typography>
//             <Typography paragraph>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//               minutes.
               
//           </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//       </div>)
//         }
//         </div>
//       </div>
//   );
// }
import './AllCourses.css'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 200
  },
  media: {
    height: 170,
  },
});

export default function AllCards(props) {
  const classes = useStyles();
  const { courses } = props
  console.log('this is courses all cards', courses[0].id)
  return (
    <div className='all-page-container'>
      <div className='title-container'>
        <h1>All Categories</h1>
</div>
      <div className='cards-container'>
      {courses.map(course => <div key={course.id} className='all-page-cards'>
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
          <Typography variant="body2" color="textSecondary" component="p">
            {course.info}
          </Typography>
        </CardContent>
      </CardActionArea>
          <CardActions>
            <Link to= {`/courses/${course.id}`}>
        <Button size="small" color="primary">
                Learn More
        </Button>
        </Link>
      </CardActions>
        </Card>
        </div>)
        }
        </div>
      </div>
  );
}