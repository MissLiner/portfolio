# Portfolio Site

This portfolio site was built in spring 2022 to represent my work learning web development and design over the past year.

## Structure

### Component Structure

Each component is organized into folders based on the overall structure of the site:

-Main: components which form the "spine" of the site and are always in use.
-Main Views: sub-controllers for displaying changing content as the site is navigated.
-Project: content components that together display detailed project descriptions.
-Slider: components controlling the image carousel for projects.
-Shared: text content files and components used by more than one other component.

### Content Structure

Text, links and image references are located in files outside of the components, in order to keep the component code cleaner, and to enable easier editing.

### CSS Structure

Each component has its own css file for clarity and simplicity. The main div for each component shares the name of the component, and each child element starts with that name. The naming structure is: *"ComponentName-element-description"*.

All colors and element selectors are declared in index.css.

## Development Story

###

I used [Mockplus](https://www.mockplus.com/) to create a very basic wireframe:
![mock of portfolio site](portfolio/src/assets/images/screenshots/portfolio_mock.svg)
While I made some changes as I developed the site, the basic structure held up:
![published portfolio site](portfolio/src/assets/images/screenshots/portfolio_actual.svg)


### Color Scheme

I started with a very understated black and white color scheme, which I felt would best showcase my colorful portfolio. But as I built the site, I felt it was too austere and didn't really represent me well. I played around with a few options:

-Blue/Purple: two of my favorite colors, but blue felt too restrictive/generic, and purple too amatuer.
-Orange: I love orange, but it didn't look good on my site any more than it looks good on me in real life. Oh how I wish I could wear orange without looking pale and grey :)
-Olive: Olive green feels so sophisticated, but in this case it just felt drab.

Finally I played my way into pink and green, a combination that always makes me happy. In this case, I used watermelons as my inspiration, which hit several notes to help represent my sensibilities:

-Summery and cheerful
-Bright but not garish
-Based on colors found in nature
-Soft callback to the eighties
-Full of good memories and positive associations

After I already had the color scheme, I found a nice picture of myself that happened to be in front of a wall of roses that matched the scheme perfectly! Kismet.