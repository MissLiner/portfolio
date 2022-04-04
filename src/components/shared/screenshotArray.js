import FSRestImg from '../../assets/images/screenshots/FS_restaurant.svg';
import TNRestImg from '../../assets/images/thumbnails/TN_restaurant.svg';
import FSBattleImg from '../../assets/images/screenshots/FS_battleship.svg';
import TNBattleImg from '../../assets/images/thumbnails/TN_battleship.svg';
import FSCalcImg from '../../assets/images/screenshots/FS_calculator.svg';
import TNCalcImg from '../../assets/images/thumbnails/TN_calculator.svg';
import FSMemoryWelcomeImg from '../../assets/images/screenshots/FS_memory-welcome.svg';
import TNMemoryWelcomeImg from '../../assets/images/thumbnails/TN_memory-welcome.svg';
import FSMemoryGameImg from '../../assets/images/screenshots/FS_memory.svg';
import TNMemoryGameImg from '../../assets/images/thumbnails/TN_memory.svg';
import FSCando1Img from '../../assets/images/screenshots/FS_candolist.svg';
import TNCando1Img from '../../assets/images/thumbnails/TN_candolist.svg';
import FSCando2Img from '../../assets/images/screenshots/FS_candolist-add.svg';
import TNCando2Img from '../../assets/images/thumbnails/TN_candolist-add.svg';
import FSTictacImg from '../../assets/images/screenshots/FS_tictactoe.svg';
import TNTictacImg from '../../assets/images/thumbnails/TN_tictactoe.svg';
import FSLibraryImg from '../../assets/images/screenshots/FS_library.svg';
import TNLibraryImg from '../../assets/images/thumbnails/TN_library.svg';

import RestFooter from "../../assets/images/examples/rest_footer.svg";
import RestMenu from "../../assets/images/examples/rest_menu.svg";

import BattleSetup from "../../assets/images/examples/battle_setup.svg";
import BattleBoard from "../../assets/images/examples/battle_board.svg";

export const screenshotArray = [
  [ FSRestImg, "restaurant site screenshot", TNRestImg, "Restaurant Homepage" ],
  [ FSBattleImg, "battleship site screenshot", TNBattleImg, "Battleship Game" ],
  [ FSCalcImg, "calculator site screenshot", TNCalcImg, "Calculator"],
  [ FSMemoryWelcomeImg, "memorycard welcome screen site screenshot", TNMemoryWelcomeImg, "Memory Card"],
  [ FSMemoryGameImg, "memorycard game screen site screenshot", TNMemoryGameImg, "Memory Card"],
  [ FSCando1Img, "can do list site screenshot", TNCando1Img, "Can-Do List"],
  [ FSCando2Img, "can do list add task site screenshot", TNCando2Img, "Can-Do List"],
  [ FSTictacImg, "tic-tac-toe site screenshot", TNTictacImg, "Tic-Tac-Toe"],
  [ FSLibraryImg, "libary site screenshot", TNLibraryImg, "Library App"],
]


export const projectArray = [
  {
    name: "Restaurant Homepage",
    image: [FSRestImg, "restaurant homepage screenshot"],
    thumbnail: [TNRestImg, "restaurant homepage thumbnail"],
    code: 'https://github.com/MissLiner/restaurant-page.git',
    live: 'https://missliner.github.io/restaurant-page/',
    focus: ["Dom manipulation", "Dynamic rendering", "Webpack", "Illustrator"],
    summary: "A colorful site, inspired by my daughter's love of wild animals! This project emplyed classes, modules and Webpack for the first time to dynamically render the DOM. I created all images and icons using Adobe Illustrator.",
    units: [{ name: "Custom Graphics",
              image: [RestFooter, "restaurant footer example"], 
              text: "I created the jungle silhouettes using public domain photographs that I transformed into simplified svg vector graphics with Adobe Illustrator. I designed the color palette with Adobe Color, based on the stunning hues of the savannah, tweaked to appeal to a young child's eye." },
            { name: "Synthesized Composition",
              image: [RestMenu, "restaurant menu example"], 
              text: "I drew the cloud in Illustrator to create a custom active button style, and faded the nav bar into the background sky to add some depth. I learned all about spans when I spent a day figuring out how to get these dot leaders to be even and neat."
              }],
    active: false,
  },
  {
    name: "Battleship Game",
    image: [FSBattleImg, "battleship game screenshot"],
    thumbnail: [TNBattleImg, "battleship game thumbnail"],
    focus: ["Javascript", "Jest", "TDD", "Unit Testing", "Factory Functions"],
    summary: "Single-player Battleship game against a very basic AI named 'Hal'. If playing Hal still isn't easy enough, you have the option to unmask Hal's ships, to quickly try out the gameplay.",
    code: 'https://github.com/MissLiner/battleship_game.git',
    live: 'https://missliner.github.io/battleship_game/',
    units: [{ name: "Intuitive Interaction",
              image: [BattleSetup, "battleship setup armada menu example"], 
              text: "Players are given a choice to have the computer assign ships randomly, or to place their own ships by clicking on a starting space and choosing the direction from a drop-down. Error handling ensures that ships will neither overlap nor overhang the board." },
            { name: "Robust Factory Functions",
              image: [BattleBoard, "battleship gameplay example"], 
              text: "Gameboard and Player factory functions keep track of hits and misses. The Controller provides encouraging game messages, alerts when ships sink, and even generates unique messages depending on whether you won or lost, and how long it took."
            }],
    active: true,
  },
  {
    name: "Calculator",
    image: [FSCalcImg, "calculator screenshot"],
    thumbnail: [TNCalcImg, "calculator screenshot"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/Calculator.git',
    live: 'https://missliner.github.io/Calculator/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    active: false,
  },
  {
    name: "Memory Card",
    image: [FSMemoryGameImg, "memory card game screenshot"],
    thumbnail: [TNMemoryGameImg, "memory card game thumbnail"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/memory-card.git',
    live: 'https://missliner.github.io/memory-card/',
    units: [{ name: "Custom Graphics",
    image: [RestFooter, "restaurant footer example"], 
            text: "I created the jungle silhouettes using public domain photographs that I transformed into simplified svg vector graphics with Adobe Illustrator. I designed the color palette with Adobe Color, based on the stunning hues of the savannah, tweaked to appeal to a young child's eye." },
          { name: "Synthesized Composition",
            image: [RestMenu, "restaurant menu example"], 
            text: "I drew the cloud in Illustrator to create a custom active button style, and faded the nav bar into the background sky to add some depth. I learned all about spans when I spent a day figuring out how to get these dot leaders to be even and neat."
            }],
    active: true,
  },
  {
    name: "Tic-Tac-Toe",
    image: [FSTictacImg, "tic-tac-toe site screenshot"],
    thumbnail: [TNTictacImg, "tic-tac-toe site screenshot"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/tic-tac-toe.git',
    live: 'https://missliner.github.io/tic-tac-toe/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    active: false,
  },
  {
    name: "Can-Do List",
    image: [FSCando1Img, "can-do list screenshot"],
    thumbnail: [TNCando1Img, "can-do list thumbnail"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/to-do-list.git',
    live: 'https://missliner.github.io/to-do-list/',

    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    active: false,
  },
  {
    name: "Library App",
    image: [FSLibraryImg, "library app screenshot"],
    thumbnail: [TNRestImg, "library app thumbnail"],
    focus: [],
    summary: "",
    code: 'https://github.com/MissLiner/library-app.git',
    live: 'https://missliner.github.io/library-app/',
    units: [{ name: "highlight",
              image: ["link", "restaurant footer example"], 
              text: "description" },
            { name: "highlight",
              image: ["link", "restaurant menu example"], 
              text: "description"
            }],
    active: false,
  },
  // {
  //   name: "ResuMaker",
  //   image: [],
  //   thumbnail: [],
  //   addlImages: [],
  //   addlThumbnails: [],
  //   focus: ["ReactJS", "Basic Components"],
  //   summary: "",
  //   code: 'https://github.com/MissLiner/cv-project.git',
  //   live: 'https://missliner.github.io/cv-project/',
  //   active: false,
  // },
]
// const projectTemplate = 
//   {
//     name: "",
//     image: [],
//     thumbnail: [],
//     addlImages: [],
//     addlThumbnails: [],
//     focus: [],
//     summary: "",
//     code: 'https://github.com/MissLiner/-.git',
//     live: 'https://missliner.github.io/-/',
//     active: false,
//   };