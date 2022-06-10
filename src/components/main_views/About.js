import '../../index.scss';
import './About.css';

function About() {
  return(
    <div className="About">
      <h1 className="About-title">My Story</h1>
        <div className="About-unit">
          <h3 className="About-topic">
            In a Nutshell . . .
          </h3>       
          <p className="About-text">
            I'm new web developer with years of business success under my belt, making me an experienced and effective collaborator. I'm eager to put my coding skills to work, and prove how valuable I can be. I meet every challenge with an analytical mindset, finding the patterns, and tracing them to uncover solutions. I love problem-solving, whether structuring a new project or chasing down an erascible bug, I'm on the case.
          </p>
        </div>
        <div className="About-unit">
          <h3 className="About-topic">
            A New Career . . .
          </h3>       
          <p className="About-text">
            When my career in market research sales was interrupted by the pandemic, I realized it was an opportunity to shift into a more fulfilling career.
          </p>
        </div>
        <div className="About-unit">
          <h3 className="About-topic">
            How I learned . . .
          </h3>       
          <p className="About-text">
            I learned through a self-guided, open source curriculum called The Odin Project (TOP). Created and maintained by a group of web devs to give newbies the knowledge they wish they'd had when they started, TOP prepared ,me with the experience I need to hit the ground running in my first job.
          </p>
        </div>
        <div className="About-unit">
          <h3 className="About-topic">
            What I learned . . .
          </h3>       
          <p className="About-text">
            Since TOP had me coding my own projects from the start, I gained the most useful development skill of all: the ability to find solutions on my own. While learning HTML, CSS, Javascript, and React.js, I've used Git, Chrome Dev Tools, VSCode, CLI and Webpack throughout.
          </p>
        </div>
        <div className="About-unit">
          <h3 className="About-topic">
            Development meets design . . .
          </h3>       
          <p className="About-text">
            Web design affects everyone, every day, so I also spent time on color, fonts, layout, and learning Illustrator. I care deeply about responsive and simple designs that make our time online useful, smooth, and sometimes even joyous! I've designed several websites, along with icons, logos, and other images in Illustrator.
          </p>
        </div>
    </div>
  )
}
export default About;