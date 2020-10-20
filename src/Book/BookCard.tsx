import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Endpoints } from '../Components/Endpoints';

const useStyles = (theme: Theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


export interface BookCardProps {
    token: string |null;
    classes: any;
    author: string;
    title: string;
    cover: string;
    date: string;
    id: number;
    onUpdateSubmit: any;
    onLoad: any;
    onUpdate: any;
    cards: any;
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
    cards: any;
    constructor(props: BookCardProps) {
        super(props);
        this.state = {            
        date: "",
        title: "",
        author: "",
        cover: "",
        owner: "",
        booklist: "",
    };
    }

    deleteBook = (id: number) => {
        console.log(this.props.token);
          let bookHeaders = new Headers();
          bookHeaders.append("Content-Type", "application/json");
          bookHeaders.append(
            "Authorization",
            this.props.token != null ? this.props.token : ""
          );
          const requestOptions = { method: "DELETE", headers: bookHeaders };
          fetch(Endpoints.authorization.bookDelete+id, requestOptions)
            .then((res: any) => res.json())
            .then((json) => this.props.onLoad());
        };

    render() { 
        const { classes }: any = this.props;
    return (
      <div>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.cover}
            title="Book Cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => {this.props.onUpdate()}}>
            Update
          </Button>
          {/* <Button size="small" color="primary" onClick={() => {this.deleteBook(book.id)}}>
            Delete
          </Button> */}
        </CardActions>
      </Card>
      </div>
 );
}};

export default withStyles(useStyles)(BookCard);

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