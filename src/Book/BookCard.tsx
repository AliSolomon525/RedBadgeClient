import React from 'react';
import BookEdit from './BookEdit';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Endpoints } from '../Components/Endpoints';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


export interface BookCardProps {
    token: string;
}
 
export interface BookCardState {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}
 
class BookCard extends React.Component<BookCardProps, BookCardState> {
    constructor(props: BookCardProps) {
        super(props);
        this.state = {            
        date: "",
        title: "",
        author: "",
        cover: "",
        owner: "",
        booklist: "" };
    }

    onSubmit() {
        const body: RequestBodyBook = {
          book: {
            date: this.state.date,
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            owner: this.state.owner,
            booklist: this.state.booklist
          },
        };
        let bookHeaders = new Headers();
        bookHeaders.append("Content-Type", "application/json");
        bookHeaders.append(
          "Authorization",
          this.props.token != null ? this.props.token : ""
        );
        const requestOptions = { method: "GET", headers: bookHeaders };
        fetch(Endpoints.authorization.getBookById)
          .then((res: any) => res.json())
          .then((json: ResponseBook) => console.log(json));
      }


    render() { 
    const classes = useStyles();
    return ( 
        <div>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.state.cover}
            title="Book Cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.state.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Update
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
      <BookEdit token={this.props.token}/>
      </div>
 );
}
};

export default BookCard;

export interface RequestBodyBook {
    book: Book;
  }

export interface Book {
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number | string;
    booklist: number | string;
}

export interface ResponseBook {
    id: number;
    date: string;
    title: string;
    author: string;
    cover: string;
    owner: number;
    booklist: number;
    updatedAt: Date;
    createdAt: Date;
}