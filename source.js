
const filterBtns=document.querySelectorAll('.filter-btn')
const items=document.querySelectorAll('.gallery-item')

filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{

    filterBtns.forEach(b=>b.classList.remove('active'))
    btn.classList.add('active')

    let cat=btn.dataset.category
    items.forEach(i=>{
      i.style.display=cat==='all'||i.dataset.category===cat?'block':'none'
    })
  })
})

const lightbox=document.querySelector('.lightbox')
const lightboxImg=document.querySelector('.lightbox-img')
const closeBtn=document.querySelector('.close')
const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')

let imgs=[...document.querySelectorAll('.gallery-item img')]
let index=0

imgs.forEach((img,i)=>{
  img.addEventListener('click',()=>{
    index=i
    openLightbox()
  })
})
function openLightbox(){
  lightbox.style.display='flex'
  lightboxImg.src=imgs[index].src
}

function closeLightbox(){
  lightbox.style.display='none'
}
function nextImage(){
  index=(index+1)%imgs.length
  lightboxImg.src=imgs[index].src
}
function prevImage(){
  index=(index-1+imgs.length)%imgs.length
  lightboxImg.src=imgs[index].src
}

nextBtn.addEventListener('click',nextImage)
prevBtn.addEventListener('click',prevImage)
closeBtn.addEventListener('click',closeLightbox)

lightbox.addEventListener('click',e=>{
  if(e.target===lightbox)closeLightbox()
})

document.addEventListener('keydown',e=>{
  if(lightbox.style.display==='flex'){
    if(e.key==='ArrowRight')nextImage()
    if(e.key==='ArrowLeft')prevImage()
    if(e.key==='Escape')closeLightbox()
  }
})
