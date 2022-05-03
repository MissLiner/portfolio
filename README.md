# Portfolio Site

This portfolio site was built from scratch in spring 2022 to represent my work learning web development and design over the past year.

### Table of Contents

[Structure](https://github.com/MissLiner/portfolio#structure)
- [File Structure](https://github.com/MissLiner/portfolio#file-structure)
- [CSS Structure](https://github.com/MissLiner/portfolio#css-structure)
[Development Story](https://github.com/MissLiner/portfolio#development-story)
- [ReactJS](https://github.com/MissLiner/portfolio#reactjs)
- [Image Slider](https://github.com/MissLiner/portfolio#image-slider)
- [Organization](https://github.com/MissLiner/portfolio#organization)
- [Content](https://github.com/MissLiner/portfolio#content)
- [Layout](https://github.com/MissLiner/portfolio#layout)
- [Mobile Development](https://github.com/MissLiner/portfolio#mobile-development)
- [Color Scheme](https://github.com/MissLiner/portfolio#color-scheme)

## Structure

### File Structure

Each component is organized into folders, based on the overall structure of the site:

- **main**: components which form the "spine" of the site and are always in use.
- **main_views**: sub-controllers for displaying changing content as the site is navigated.
- **project**: content components that together display detailed project descriptions.
- **slider**: components controlling the image carousel for projects.
- **shared**: text content files and components used by more than one other component.

Images, screenshots, thumbnails, icons, etc. are housed in a separate **assets** folder

### CSS Structure

All color schemes and element selectors are declared in *index.css*. Each component has its own css file, which shares both its name and location. I used only classes to style each element, with the naming convention as follows:

Parent divs: `*"ComponentName"*`
Child elements: `*"ComponentName-element-description"*`

## Development Story

### ReactJS

I adore the modular structure of ReactJS, and used only functional components to construct the site. Every time I found myself writing a shortcut solution to solve a problem, I pushed myself to find a solution that didn't just *work*, but was simple, scalable, and reusable. React inpires me to keep my code clean!

### Image Slider

I quickly decided to use a carousel to show off my work. At first I used an existing library, but quickly became disatisfied as I tried to customize it to my purposes. Instead, I repurposed and refined an image slider I'd created for an earlier project. While I appreciate all of the resources available through ReactJS, building my own component has been worth it almost every single time.

One of my favorite additions was the ability to swipe through the images on mobile - a little more complicated than I expected, but the solution (comparing touch position at the start and during a swipe) is so elegant.

### Organization

Once I had my main components built, I organized them into category folders. I also decided that it was time to stop cramming all of my CSS into one or two files, and researched the best naming convention for my purposes. It took a while to reorganize, create the files/folders, and refactor the code, but development became so much smoother once I had!

### Content

I placed all text, links and image references in separate files outside of my components. This kept my component code cleaner, and enabled easier editing. However, I'm pretty ambivalent about this choice, since it made embedding links and non-standard shaped images more difficult.

### Layout

Before I even opened VSCode, I used [Mockplus](https://www.mockplus.com/) to create a very basic wireframe:

  <img src="./src/assets/images/screenshots/portfolio_mock.svg" width="300" 
  alt="mock of portfolio site">

I did make some changes as I developed the site, but the basic structure held up:

  <img src="./src/assets/images/screenshots/portfolio_actual.svg" width="300" 
  alt="published portfolio site">

### Mobile Development

While I didn't follow mobile-first design principles, this project really increased my media query savvy. It was very easy to change the layout for mobile with simple changes to my CSS grid-template declarations. CSS Grid wins again! (though Flexbox was perfect for my StickyNav)

### Color Scheme

I started with a very understated black and white color scheme, which I felt would best showcase my colorful portfolio. But as I built the site, it felt too austere, and didn't represent me well. I played around with a few options on [Adobe Color](https://color.adobe.com/):

- **Blue/Purple**: two of my favorite colors, but blue felt too restrictive/generic, and purple too amateur
- **Orange**: I love orange, but it didn't look good on my site, any more than it looks good on me in real life
- **Olive**: olive green has a lovely sophisticated feel, but in this case it just felt drab

Finally I played my way into **pink** and **green**, a combination that always makes me happy. In this case, I used watermelons as my inspiration, which hit several of the right notes:

- Summery and cheerful
- Bright but not garish
- Based on colors found in nature
- Soft callback to the eighties
- Full of good memories and positive associations

After I had the color scheme, I happened to find a nice recent picture of myself in front of a wall of roses, which matched the scheme perfectly! Kismet.