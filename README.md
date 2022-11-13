# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot
#### Large Screen Size
![screencapture-127-0-0-1-5500-starter-code-index-html-2022-11-13-13_27_16](https://user-images.githubusercontent.com/79128405/201540395-d86072de-3255-4c94-8a45-f17c6371bf94.png)
#### Medium Screen Size

![screencapture-frontend-mentor-design-portfolio-challenge-vercel-app-2022-11-13-12_16_32](https://user-images.githubusercontent.com/79128405/201537696-4adb3891-68c2-4b34-9fcf-5c924a574999.png)

### Mobile Screen Size

![screencapture-frontend-mentor-design-portfolio-challenge-vercel-app-2022-11-13-12_16_55](https://user-images.githubusercontent.com/79128405/201537818-7c6ffe43-244f-4a1a-b5b4-02b8e0c31144.png)


### Links

- Live Site URL: [https://frontend-mentor-design-portfolio-challenge.vercel.app/](https://frontend-mentor-design-portfolio-challenge.vercel.app/)

## My process

### Built with

- HTML5
- SCSS
- Flexbox
- Mobile-first workflow
- JavaScript



### What I learned

#### CSS Positioning
I generally have not used CSS positioning, as flexbox has adequately solved my CSS need before. This challenge, however, required me to look at CSS positioning to deal with alignment issues. Once I learned about "relative" and "absolute" properties, I realized my intimidation was unfounded! Because of this challenge, I look forward to more opportunities to use CSS positioning.

#### CSS Images and Clip-path
Before this project, I would look for images that fit my website, instead of coding it out. However, this project calls for CSS images to complete it. Not only that, I learned about another CSS property, "clip-path" to create shapes.  
```css
     button{
        margin: 10px 0;
        border: none;
        clip-path: circle(30%);
        background-color: $Black;
        padding: 40px;
       }
```

#### CSS Overflow and Scroll Properties
I had the temptation to use a CSS framework to build out the slide show part of my project. After some thought, I decided against it, as these frameworks can become a handicap to learning CSS. As a result, I learned about "overflow" and various "scroll" properties to solve this coding problem! 
```css
.slider{
        display: flex;
        overflow: hidden;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
      
        img{
            width: 75%;
            margin:0 2.5%;
            scroll-snap-align: center;
        }

```

#### JavaScript getBoundingClientRect()
 Lastly, I learned about a helpful JavaScript method, getBoundingClientRect()". This method returns the size of an object. I used this method to get the size of the images in my slide show. Then, I used this info to determine how far to scroll to get to the next image in the slide show.
 ```js
 nxtBtn.addEventListener('click', ()=>{
    let imgDimensions = sliderImg.getBoundingClientRect();
   let imgWidth=  imgDimensions.width;
    slider.scrollLeft += imgWidth;
})
```

### Continued development

There were times when I coded the CSS for larger screen sizes before coding for the mobile screen size. As a result, I had unnecessary code in my CSS rules. Moving forward, I plan to adhere to 


## Author

- Frontend Mentor - [@KarenDouglas](https://www.frontendmentor.io/profile/KarenDouglas)
- Twitter - [@CodeNoob4Life](https://twitter.com/CodeNoob4Life)





