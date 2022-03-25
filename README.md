# Space tourism website - Frontend Mentor

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

I used **Vanilla javascript** to change the content of the pages by fetching the data from the `json` local file
```js
eleId.textContent = jsonData[idField];
```

### The challenge

Users should be able to:
- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Space tourism website](./img/screenshot.webp)

### Links

- Solution URL: [github](https://github.com/denielden/grid-vanilla-js-space-tourism)
- Live Site URL: [live site](https://denielden.github.io/grid-vanilla-js-space-tourism)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Accessibility workflow
- Vanilla Javascript

### What I learned

This challenge helped me to better understand the advanced use of the CSS `grid` and to discover some new CSS properties, such as :  
```css
.example {
  padding-inline: clamp(1.5rem, 5vw, 3.5rem);
  margin-block: 1rem;
  aspect-ratio: 1;
}
```
I was also able to learn more about `aria-attribute` and how to create a floating menu with it.

### Useful resources

- [Scrimba Course](https://scrimba.com/learn/spacetravel)

## Author

- Website - [denielden](https://denielden.github.io)
- Frontend Mentor - [@denielden](https://www.frontendmentor.io/profile/denielden)
  

## **Have fun building!** 🚀
