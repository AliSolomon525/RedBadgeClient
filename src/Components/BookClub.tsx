import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Oprah from "../assets/Oprah.jpg";
import Emma from "../assets/Emma.jpg";
import Reese from "../assets/Reese.jpg";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export interface BookClubProps {
    classes?: any | null;
    href?: string;
}
 
export interface BookClubState {
    bookClubInfo: any;
}
 
class BookClub extends React.Component<BookClubProps, BookClubState> {
    constructor(props: BookClubProps) {
        super(props);
        this.state = { bookClubInfo:[] };
    }
    render() { 
        // const { classes }: any = this.props;
        return (
            <div>
            <h2 className="about-title">Peruse Popular Book Clubs</h2>
            <div className="carousel">
            <Carousel>
            <div>
                <img src={Oprah} />
            </div>
            <div>
                <img src={Emma} />
            </div>
            <div>
                <img src={Reese} />
            </div>
        </Carousel>

        <div className="about-container">
        <h2 className="RBG-title">Let's Get Reading!</h2>

<div>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Oprah's Book Club</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Date Founded: 1996 <br />
            Website: <a href="http://www.oprah.com/app/books.html" target="blank">Oprah's Book Club</a>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Emma Watson's Book Club: Our Shared Shelf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Date Founded: 2016 <br />
            Website: <a href="https://www.goodreads.com/group/show/179584-our-shared-shelf" target="blank">Our Shared Shelf</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Reese Witherspoon's Book Club: Hello Sunshine</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Date Founded: 2016 <br />
            Website: <a href="https://hello-sunshine.com/book-club" target="blank">Hello Sunshine</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dolly Parton's Imagination Library</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Date Founded: 1995 <br />
            Website: <a href="https://imaginationlibrary.com/usa/book-list/" target="blank">Dolly Parton's Imagination Library</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

        </div>
        </div>

        <div className="about-footer">&copy; BookWyrm BookClub 2020</div>
        </div>
        </div>);
    }
}
 
export default BookClub;