import '../../index.scss';
import { Wrapper, Title, Unit, Topic, Text, Skill } from './AboutStyled';

function About() {
  return(
    <Wrapper>
      <Title>My Story</Title>
        <Unit>
          <Topic>
            In a Nutshell . . .
          </Topic>       
          <Text>
            I'm new web developer with years of business success under my belt, making me an experienced and effective collaborator. I'm eager to put my coding skills to work, and show what I can do. I meet every challenge with an analytical mindset, finding the patterns, and tracing them to uncover solutions. I love problem-solving; whether structuring a new project or chasing down an erascible bug, I'm on the case.
          </Text>
        </Unit>
        <Unit>
          <Topic>
            A New Career . . .
          </Topic>       
          <Text>
            When my career in market research sales was interrupted by the pandemic, I realized it was an opportunity to refocus on work that would make better use of my creativity and problem-solving skills. The moment I dabbled in Javascript, I was completely hooked! &#40;get it, <i>hooked</i>?&#41;
          </Text>
        </Unit>
        <Unit>
          <Topic>
            How I learned . . .
          </Topic>       
          <Text>
            I used a self-guided, open source curriculum called The Odin Project (TOP). Created and maintained by a group of web devs to give newbies the knowledge they wish they'd had when they started, TOP prepared me with real-world development skills, not just "class project" skills.
          </Text>
        </Unit>
        <Unit>
          <Topic>
            What I learned . . .
          </Topic>       
          <Text>
            Since TOP had me coding my own projects from the start, I gained the most useful development skill of all: the ability to find solutions on my own. I learned:
          </Text> 
          <ul>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Javascript</Skill>
            <Skill>React.js</Skill>
          </ul>
          <Text>All while using:</Text>
          <ul>
            <Skill>Git</Skill>
            <Skill>Chrome Dev Tools</Skill>
            <Skill>VSCode</Skill>
            <Skill>CLI</Skill>
            <Skill>Webpack</Skill>
          </ul>
        </Unit>
        <Unit>
          <Topic>
            Development meets design . . .
          </Topic>       
          <Text>
            Web design affects everyone, every day, so I also spent time on color, fonts, layout, and learning Illustrator. I care deeply about responsive and simple designs that make our time online useful, smooth, and sometimes even joyous! I've designed several websites, along with icons, logos, and other images in Illustrator.
          </Text>
        </Unit>
    </Wrapper>
  )
}
export default About;