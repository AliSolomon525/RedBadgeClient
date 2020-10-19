import * as React from "react";
import Lauren from "../assets/Lauren.jpg";
import Carissa from "../assets/Carissa.jpg";
import Ali from "../assets/Ali.jpeg";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      maxHeight: 450,
    },
  });

export interface AboutProps {
    classes?: any;
}
 
export interface AboutState {
    aboutInfo: any;
}
 
class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);
        this.state = { aboutInfo:[] };
    }
    render() { 
        return (
        <div>
            <div className="about-container">

            <h2 className="about-title">The BookWyrm BookClub Story</h2>
            <p>During a time where many of us are becoming wearily accustomed to seeing the inside of our homes more often than our favorite travel destinations, books continue to bring a sense of escapism and enrichment into our lives as we turn to alternate forms of entertainment. Whether we read for self-improvement, pleasure, or out of pure necessity, there is certainly no shortage of consumable information out there, and it can feel quite overwhelming at times. It was these mutual feelings of anxiety and inspiration that called BookWyrm BookClub founders Lauren, Carissa, and Ali to action during their web development bootcamp at Eleven Fifty Academy.</p>

            <p>As the pandemic dragged on, our founders dove voraciously into different genres of choice to help pass the time (and remain mentally intact) while juggling their personal lives and learning how to code. During a somewhat serendipitous conversation about their favorite books, Ali found it exceptionally challenging to recall all of the titles and authors properly, and Lauren described herself listening to endless streams of audiobooks. Carissa, who worked at a bookstore and went to school full-time, needed a better system for keeping her personal and professional recommendations straight. Together, they discovered a need for more organization and overall connectedness when it came to their literary interests.</p>

            <p>Their fluid idea to create a literary-themed platform evolved into a skeletally structured wireframe, and blossomed into a fully-functioning web application. From wishlists to rereads, the BookWyrm BookClub app allows users to create personal lists of books to fit their interests; and, for more extroverted readers, it offers tips and tricks for starting a book club and includes many resources that spark inspiration and advocate literacy. Thank you for visiting our website!</p><br />
              
            <h2 className="RBG-title">“Reading is the key that opens doors to many good things in life. Reading shaped my dreams, and more reading helped me make my dreams come true.” <br/><p>-Ruth Bader Ginsburg</p></h2>
            
            <Container>
            <div className="container3">
            <div className="card">
              <Card>
                  <CardMedia
                  style={{paddingLeft:"3px"}}
                    component="img"
                    alt="Denali National Park"
                    height="180"
                    image={Ali}
                  />
                  <CardContent style={{backgroundColor:"#F0EFEB", fontFamily: "Lucida Sans Unicode"}}>
                    <Typography>
                      Co-Founder: Ali <br />
                      Favorite Author: Ruth Ware <br/>
                      Favorite Genre: Mystery
                    </Typography>
                  </CardContent>
              </Card>
              </div>

            <br />

            <div className="card">
              <Card>
                  <CardMedia
                    component="img"
                    alt="Arcadia National Park"
                    height="180"
                    image={Carissa}
                  />
                  <CardContent style={{backgroundColor:"#F0EFEB", fontFamily: "Lucida Sans Unicode"}}>
                    <Typography>
                      Co-Founder: Carissa <br />
                      Favorite Author: Brandon Sanderson <br/>
                      Favorite Genre: Science Fiction / Fantasy
                    </Typography>
                  </CardContent>
              </Card>
              </div>

           <br />

            <div className="card">
              <Card>
                  <CardMedia
                    style={{ textDecoration: "none", color: "#ddbea9" }}
                    component="img"
                    alt="Lauren Headshot"
                    height="180"
                    image={Lauren}
                  />
                  <CardContent style={{backgroundColor:"#F0EFEB", fontFamily: "Lucida Sans Unicode"}}>
                    <Typography>
                      Co-Founder: Lauren <br />
                      Favorite Author: UNKNOWN <br/>
                      Favorite Genre: UNKNOWN
                    </Typography>
                  </CardContent>
              </Card>
              </div>
              </div>
              </Container>

              </div>

            <div className="about-footer">&copy; BookWyrm BookClub 2020</div>
            </div>);
    }
}
 
export default About;
