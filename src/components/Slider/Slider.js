import React from "react";
import {  Carousel } from "react-bootstrap";

function Slider() {
  return (
    <>
      <Carousel variant="white" style={{ maxHeihgt: "60px" }} interval={2000}>
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="https://poshpets.in/image/catalog/Home%20Page%20Banner%20/Food.png" alt="products"
          />
          <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5>Où chaque visite est un accueil chaleureux.</h5>
            <p>Entrez en tant qu'étrangers, partez en amis.</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="https://media.istockphoto.com/id/1267466399/photo/happy-puppy-dog-smiling-on-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=gQyrye-xOll2RfmmyYKJTqcp0XdkQwrNlcCKti62NME="
            alt="demonslayer "
          />
          <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5> - Bienvenue dans notre magasin - </h5>
            <p>Où chaque visite est une aventure.</p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "70vh", objectFit: "cover" }}
            src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/happy-cat-smiling-6__880.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <h5>Explorez, achetez et profitez !</h5>
            <p>Découvrez des trésors, trouvez de la joie.</p>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
