import "./portfolio.css";
import IMG1 from "../../assets/coffee.png";
import IMG2 from "../../assets/hachi.png";
import IMG3 from "../../assets/robofriends.png";
import IMG4 from "../../assets/smartbrain.png";
import IMG5 from "../../assets/designstudio.png";
import IMG6 from "../../assets/sitoreklam.png";
import IMG7 from "../../assets/realestate.png";
import IMG8 from "../../assets/DraganaPortfolio.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "All About Coffee",
    github: "https://github.com/darkohedgehog/all-about-coffee",
    demo: "https://darkohedgehog.github.io/all-about-coffee"
  },
  {
    id: 2,
    image: IMG2,
    title: "Hachi The Spoiled Dog",
    github: "https://github.com/darkohedgehog/hachi",
    demo: "https://hachi-the-spoiled-dog.netlify.app/"

  },
  {
    id: 3,
    image: IMG3,
    title: "Robofriends",
    github: "https://github.com/darkohedgehog/Robofriends",
    demo: "https://darkohedgehog.github.io/Robofriends"
  },
  {
    id: 4,
    image: IMG4,
    title: "Smart-Brain",
    github: "https://github.com/darkohedgehog/smart-brain",
    demo: "https://hedgehog-smart-brain.onrender.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "Design Studio",
    github: "https://github.com/darkohedgehog/reklame-dizajn",
    demo: "https://darkohedgehog.github.io/reklame-dizajn/index.html"
  },
  {
    id: 6,
    image: IMG6,
    title: "Sitoreklam",
    github: "https://github.com/darkohedgehog/sitoreklam",
    demo: "https://sitoreklam.vercel.app"
  },
  {
    id: 7,
    image: IMG7,
    title: "Real Estate",
    github: "https://github.com/darkohedgehog/realestate-locofy",
    demo: "https://realestate-locofy-three.vercel.app"
  },
  {
    id: 8,
    image: IMG8,
    title: "Dragana Portfolio",
    github: "https://github.com/darkohedgehog/Dragana-portfolio",
    demo: "https://dragana-portfolio.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>     

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>

            )
          })
        }
        
        </div>  

    </section>
  )
}

export default Portfolio;