import React from "react";
import Button from "@mui/material/Button";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BsBook } from "react-icons/bs";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Landing = () => {
  return (
    <>
      <div className="land">
        <div className="head">
          <h1 className="headText">Welcome to ReadNow</h1>
          <p className="head-para">
            The world's most-loved social storytelling platform ReadNow connects
            a global community of millions readers and writers through the power
            of story.
          </p>

          <div className="btns">
            <Button variant="contained" href='/login'>Start Reading</Button>
            <Button variant="outlined">Publish your Story</Button>
          </div>
        </div>

        <div className="image">
          <img
            src="https://www.macworld.com/wp-content/uploads/2023/01/apple-Search-Ads.jpg?resize=1200%2C675&quality=50&strip=all"
            alt=""
            className="comp"
          />
        </div>
      </div>
      <section>
        <h3 className="sec-head">we make your story...</h3>
        <br />
        <div className="sec">
          <div className="dip">
            <div className="icon">
              <MdOutlinePersonalVideo size="30" />
            </div>
            <div className="text">Get produced to movie or film</div>
          </div>
          <div className="dip">
            <div className="icon">
              <TfiVideoClapper size="30" />
            </div>
            <div className="text">Get adapted to a TV series</div>
          </div>

          <div className="dip">
            <div className="icon">
              <BsBook size="30" />
            </div>
            <div className="text">Get published soon</div>
          </div>
        </div>
      </section>

      <section className="landi">
        <div className="head">
          <h3 className="headText">ReadNow Studios</h3>
          <h3 className="headtext">Your story could be the next hit</h3>
          <p className="head-para">
            Wattpad Studios discovers untapped, unsigned, and talented writers
            on Wattpad and connects them to global multi-media entertainment
            companies. Wattpad Studios works with partners such as:
            <div className="ics">
              <img
                src="https://www.wattpad.com/img//landing/sony.svg"
                alt="/log"
              />
              <img
                src="https://www.wattpad.com/img//landing/hulu.svg"
                alt="/log"
              />
              <img
                src="https://www.wattpad.com/img//landing/syfy.svg"
                alt="/log"
              />
            </div>
          </p>
        </div>

        <div className="image">
          <img
            src="https://www.wattpad.com/img//landing/wattpadStudiosPoster.png"
            alt=""
            className="comp"
          />
        </div>
      </section>
      <br />
      <br />
      <br />
      <a href="/things" className="texts">
        Find out more about what we do for writers →
      </a>
      <section className="landi">
        <div className="head">
          <h3 className="headText">ReadNow Books </h3>
          <h3 className="headText">Your voice belongs on bookshelves</h3>
          <p className="head-para">
            ReadNow Books aspires to recognize and reflect diverse voices by
            taking Wattpad stories to published book and onto bookshelves around
            the world. ReadNow Books works with partners such as:
            <div className="ics">
              <img
                src="https://www.wattpad.com/img//landing/macmillan.png"
                alt="log"
                className="ippy"
              />
              <img
                src="https://www.wattpad.com/img//landing/anvil.png"
                alt="log"
                className="ippy"
              />
              <img
                src="https://www.wattpad.com/img//landing/penguin.png"
                alt="log"
                className="ippy"
              />
            </div>
          </p>
        </div>

        <div className="image">
          <img
            src="https://www.wattpad.com/img//landing/wattpadBooksPoster.png"
            alt=""
            className="compi"
          />
        </div>
      </section>
      <h4 className="text">Browse our wide range of Categories</h4>
      <main className="dlex">
        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://images.unsplash.com/photo-1567263361507-83f755d9fa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9ycm9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Horror
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://images.unsplash.com/photo-1606489129187-1eee19a0a103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Humor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://media.istockphoto.com/id/1325074795/photo/3d-render-illustration-of-fantasy-werewolf-monster-creature.jpg?b=1&s=170667a&w=0&k=20&c=tSxJSqRhLA5LxQAywoJdE-gmJnRoWLboA7rrTmn6Yjw="
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              WereWolf
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://images.unsplash.com/photo-1550155891-1ab2d265d9c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Um9tYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Romance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://images.unsplash.com/photo-1628026552437-59305f353694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2NpJTIwZml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sci-Fi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="grid">
          <CardMedia
            sx={{ height: 240 }}
            image="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGZpY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Teen Fiction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum dolor sot sit amet cosectuer adifisit meliopsis slorem
              ipsum dolor sot sit amet cosectuer adifisit meliopsis
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>

      </main>
      <a href="/things" className="text">
        Discover more →
      </a>
    </>
  );
};

export default Landing;
