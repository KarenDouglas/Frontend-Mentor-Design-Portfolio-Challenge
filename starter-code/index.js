const slider = document.querySelector(".slider")
const sliderImg = slider.querySelector('img')
const preBtn = document.querySelector('.preBtn')
const nxtBtn = document.querySelector( '.nxtBtn')
console.log(sliderImg)
// sliderImg.forEach((item, i)=>{
//     let imgDimensions = item.getBoundingClientRect();
//     let imgWidth=  imgDimensions.width;

//     preBtn.addEventListener('click', ()=>{
//         item.scrollLeft +=  imgWidth;
//     })
// })

nxtBtn.addEventListener('click', ()=>{
    let imgDimensions = sliderImg.getBoundingClientRect();
   let imgWidth=  imgDimensions.width - 7;
    slider.scrollLeft += imgWidth;
})
preBtn.addEventListener('click', ()=>{
    
    let imgDimensions = sliderImg.getBoundingClientRect();
   let imgWidth=  imgDimensions.width - 7;
    slider.scrollLeft -= imgWidth;
})