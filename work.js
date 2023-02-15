
   
var swiper = new Swiper(".popular ", {
    spaceBetween: 20,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        540:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
        
    
  });


  // ---------------------------video--------------------------------------

  let videoContainer = document.querySelector('.video-container');
  let myVideo = document.querySelector('#myVideo')
  document.querySelector('.play-icon').onclick =() =>{
      videoContainer.classList.add("show-video")
      myVideo.play() 
  }

  // close video

  document.querySelector('.close-btn').onclick =()=>{
    videoContainer.classList.remove('show-video')
  }

