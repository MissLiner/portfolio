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
            I'm new web developer and an experienced and effective collaborator. I approach every challenge with curiosity and an analytical mindset, uncovering patterns, and tracing them to develop solutions. I love problem-solving; whether structuring a new project or chasing down an erascible bug, I'm on the case.
          </Text>
        </Unit>
        <Unit>
          <Topic>
            A New Career . . .
          </Topic>       
          <Text>
            When my sales career was interrupted by the pandemic, I realized it was my chance to pursue something more fulfilling. The moment I dabbled in Javascript, I was completely hooked! &#40;get it, <i>hooked</i>?&#41;
          </Text>
        </Unit>
        <Unit>
          <Topic>
            How I learned . . .
          </Topic>       
          <Text>
            I followed a self-guided, open source curriculum called The Odin Project (TOP). Run by a group of web devs to give newbies the knowledge they wish they'd had when they started, TOP prepared me with real-world development skills, not just "class project" skills.I learned <u>HTML, CSS, Javascript and React.js</u>.
          </Text>
        </Unit>
        <Unit>
          <Topic>
            What I learned . . .
          </Topic>       
          <Text>
            Since TOP had me coding my own projects from the start, I gained the most useful development skill of all: the ability to find solutions on my own. From the start I used:
          </Text> 
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
            Developing design . . .
          </Topic>       
          <Text>
            Web design affects everyone, every day, so I also spent time on color, fonts, layout, and learning <u>Illustrator</u>. I care deeply about responsive and simple designs that make our time online useful, smooth, and sometimes even joyous! I've designed several websites, along with icons, logos, and other images in Illustrator.
          </Text>
        </Unit>
    </Wrapper>
  )
}
export default About;