import FSRestImg from '../../assets/images/screenshots/FS_restaurant.svg';
import TNRestImg from '../../assets/images/thumbnails/TN_restaurant.svg';
import FSBattleImg from '../../assets/images/screenshots/FS_battleship.svg';
import TNBattleImg from '../../assets/images/thumbnails/TN_battleship.svg';
import FSCalcImg from '../../assets/images/screenshots/FS_calculator.svg';
import TNCalcImg from '../../assets/images/thumbnails/TN_calculator.svg';
// import FSMemoryWelcomeImg from '../../assets/images/screenshots/FS_memory-welcome.svg';
import TNMemoryWelcomeImg from '../../assets/images/thumbnails/TN_memory-welcome.svg';
import FSMemoryGameImg from '../../assets/images/screenshots/FS_memory.svg';
import TNMemoryGameImg from '../../assets/images/thumbnails/TN_memory.svg';
import FSCando1Img from '../../assets/images/screenshots/FS_candolist.svg';
import TNCando1Img from '../../assets/images/thumbnails/TN_candolist.svg';
// import FSCando2Img from '../../assets/images/screenshots/FS_candolist-add.svg';
// import TNCando2Img from '../../assets/images/thumbnails/TN_candolist-add.svg';
import FSTictacImg from '../../assets/images/screenshots/FS_tictactoe.svg';
import TNTictacImg from '../../assets/images/thumbnails/TN_tictactoe.svg';
import FSLibraryImg from '../../assets/images/screenshots/FS_library.svg';
import TNLibraryImg from '../../assets/images/thumbnails/TN_library.svg';
import FSResumeImg from '../../assets/images/screenshots/FS_resume.svg';
import TNResumeImg from '../../assets/images/thumbnails/TN_resume.svg';

import RestFooter from "../../assets/images/examples/rest_footer.svg";
import RestMenu from "../../assets/images/examples/rest_menu.svg";

import BattleSetup from "../../assets/images/examples/battle_setup.svg";
import BattleBoard from "../../assets/images/examples/battle_board.svg";

import MemoryScore from "../../assets/images/examples/memory_score.svg";

export const projectArray = [
  { name: "CV Builder",
    sliderRefs: [ FSResumeImg, "resume maker site screenshot", 
                  TNResumeImg, "Resume Maker"],
    image: [FSResumeImg, "resume maker screenshot"],
    thumbnail: [TNResumeImg, "resume maker thumbnail"],
    code: 'https://github.com/MissLiner/cv-project-func.git',
    live: 'https://missliner.github.io/cv-project-func/',
    focus: ["Functional Components", "Conditional Rendering", "ReactJS", "Forms"],
    summary: "This simple resume generator was my first major ReactJS project. I used fun colors and fonts, to make entering your info a little more cheerful, but it publishes a clean, professional resume.",
    units: [{ name: "Conditional Rendering",
              image: ["", "conditional rendering example"], 
              text: "Each component is designed to be very flexible for data entry, adding, editing and publishing. The user can easily switch between different tasks, and hide or show each section to help focus." },
            { name: "Design Elements",
              image: ["", "design element example"], 
              text: "I customized a glass effect that I found here [add link] to give the buttons depth and a more enjoyable user experience. After searching for a vector to use as the divider on each component, I decided I preferred to make my own, which I did using Illustrator. For customized icons and dividers, I often find that making my own is faster and more satisfying than repurposing someone else's work."
              }],
    detailed: true,
  },
  { name: "Memory Card Game",
    sliderRefs: [ FSMemoryGameImg, "memorycard game screen site screenshot", 
                  TNMemoryGameImg, "Memory Card"],
    image: [FSMemoryGameImg, "memory card game screenshot"],
    thumbnail: [TNMemoryGameImg, "memory card game thumbnail"],
    focus: [ "ReactJS", "Lifecycle Methods", "Hooks", "CSS"],
    summary: "This simple memory game was created using national flags that feature a sun element found on [link here]. I pushed myself to make the design, code and user experience as simple and elegant as possible.",
    code: 'https://github.com/MissLiner/memory-card.git',
    live: 'https://missliner.github.io/memory-card/',
    units: [{ name: "Hooks",
    image: [MemoryScore, "score board example"], 
            text: "Using only functional components, I used useEffect to both update the current score on each guess, and update the best score when the current score is higher." },
          { name: "Creative CSS",
            image: [TNMemoryWelcomeImg, "sun shaped welcome menu example"], 
            text: "I used a css dotted outline to create the rays of the sun for the Welcome Menu. While not a perfect solution, it was fun to use a native css property in an unexpected way."
            }],
    detailed: true,
  },
  { name: "Restaurant Homepage",
    sliderRefs: [ FSRestImg, "restaurant site screenshot", 
                  TNRestImg, "Restaurant Homepage" ],
    image: [FSRestImg, "restaurant homepage screenshot"],
    thumbnail: [TNRestImg, "restaurant homepage thumbnail"],
    code: 'https://github.com/MissLiner/restaurant-page.git',
    live: 'https://missliner.github.io/restaurant-page/',
    focus: ["DOM Manipulation", "Dynamic Rendering", "Webpack", "Illustrator"],
    summary: "A colorful site, inspired by my daughter's love of wild animals! This project employed classes, modules and Webpack for the first time to dynamically render the DOM. I created all images and icons using Adobe Illustrator.",
    units: [{ name: "Custom Graphics",
              image: [RestFooter, "restaurant footer example"], 
              text: "I created the jungle silhouettes using public domain photographs that I transformed into simplified svg vector graphics with Adobe Illustrator. I designed the color palette with Adobe Color, based on the stunning hues of the savannah, tweaked to appeal to a young child's eye." },
            { name: "Synthesized Composition",
              image: [RestMenu, "restaurant menu example"], 
              text: "I drew the cloud in Illustrator to create a custom active button style, and faded the nav bar into the background sky to add some depth. I learned all about spans when I spent a day figuring out how to get these dot leaders to be even and neat."
              }],
    detailed: true,
  },
  { name: "Battleship Game",
    sliderRefs: [ FSBattleImg, "battleship site screenshot", 
                  TNBattleImg, "Battleship Game" ],
    image: [FSBattleImg, "battleship game screenshot"],
    thumbnail: [TNBattleImg, "battleship game thumbnail"],
    focus: ["Jest", "TDD", "Unit Testing", "Factory Functions"],
    summary: "Single-player Battleship game against a very basic AI named 'Hal'. If playing Hal still isn't easy enough, you have the option to unmask Hal's ships, to quickly try out the gameplay.",
    code: 'https://github.com/MissLiner/battleship_game.git',
    live: 'https://missliner.github.io/battleship_game/',
    units: [{ name: "Intuitive UX",
              image: [BattleSetup, "battleship setup armada menu example"], 
              text: "Players are given a choice to have the computer assign ships randomly, or to place their own ships by clicking on a starting space and choosing the direction from a drop-down. Error handling ensures that ships will neither overlap nor overhang the board." },
            { name: "Robust Factory Functions",
              image: [BattleBoard, "battleship gameplay example"], 
              text: "Gameboard and Player factory functions keep track of hits and misses. The Controller provides encouraging game messages, alerts when ships sink, and even generates unique messages depending on whether you won or lost, and how long it took."
            }],
    detailed: true,
  },
  { name: "Calculator App",
    sliderRefs: [ FSCalcImg, "calculator site screenshot", 
                  TNCalcImg, "Calculator"],
    image: [FSCalcImg, "calculator screenshot"],
    thumbnail: [TNCalcImg, "calculator screenshot"],
    focus: ["Objects", "Arrays", "Node.js"],
    summary: "A very early project that helped me learn how to create a functioning app with Javascript, CSS and HTML. The code is all spaghetti, but once the functionality was built I focused on an artistic design. Every calculation is written on the small pad, while every button pressed is added to the background. This reflected my struggle at the time to translate the chaos of my beginner JavaScript into a functional online tool.",
    code: 'https://github.com/MissLiner/Calculator.git',
    live: 'https://missliner.github.io/Calculator/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    detailed: false,
  },

  { name: "Tic-Tac-Toe",
    sliderRefs:   [ FSTictacImg, "tic-tac-toe site screenshot", 
                    TNTictacImg, "Tic-Tac-Toe"],
    image: [FSTictacImg, "tic-tac-toe site screenshot"],
    thumbnail: [TNTictacImg, "tic-tac-toe site screenshot"],
    focus: ["Factory Functions", "Module Pattern", "Illustrator"],
    summary: "Another early project which introduced me to modules and closures. After practicing these basic JS skills, I added a design crafted to appeal to my daughter (and other grade-school-aged children). In order to recolor the title font while preserving the stars, I used Illustrator tracing tools. I also created the corner stars in Illustrator.",
    code: 'https://github.com/MissLiner/tic-tac-toe.git',
    live: 'https://missliner.github.io/tic-tac-toe/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    detailed: false,
  },
  { name: "Task App",
    sliderRefs: [ FSCando1Img, "can do list site screenshot", 
                  TNCando1Img, "Can-Do List"],
    image: [FSCando1Img, "can-do list screenshot"],
    thumbnail: [TNCando1Img, "can-do list thumbnail"],
    focus: ["UI/UX", "OOP", "Objects", "Forms"],
    summary: "My first major project, creating this task app almost broke my brain! As someone who loves to-do lists, I tried giving it every function of my dreams, and finally had to scale myself down a little. I worked hard to make sure that directions would not be needed for use, so that everything is customizable in an intuitive way: views, adding, editing, completing, deleting and categorizing.",
    code: 'https://github.com/MissLiner/to-do-list.git',
    live: 'https://missliner.github.io/to-do-list/',

    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    detailed: false,
  },
  { name: "Library App",
    sliderRefs: [ FSLibraryImg, "libary site screenshot", 
                  TNLibraryImg, "Library App"],
    image: [FSLibraryImg, "library app screenshot"],
    thumbnail: [TNRestImg, "library app thumbnail"],
    focus: ["Objects", "Constructors", "Layout"],
    summary: "An early project which focused on understanding JS objects by keeping track of which books you've read. Since the code was relatively simple, I focused on creating a design that evoked a cozy library while keeping the layout minimalistic.",
    code: 'https://github.com/MissLiner/library-app.git',
    live: 'https://missliner.github.io/library-app/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    detailed: false,
  },
]