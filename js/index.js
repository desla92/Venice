document.addEventListener('DOMContentLoaded', evt => {
    //responsive menu 
    const hamburgerInput = document.querySelector('nav input');
    const hamburgerBtn = document.querySelector('.hamburgerBtn');
    const ulMenu = document.getElementById('menu');
    const arrowDownLanguage = document.querySelector('.dropdown ion-icon');
    const dropDownContent = document.querySelector('.dropdown-content');
    hamburgerInput.addEventListener('click', evt => {
        if(ulMenu.classList.contains('menuMobileDisplayed')){
            ulMenu.classList.remove('menuMobileDisplayed');
            hamburgerBtn.style = "background-color: var(--primary-color);"
        }else{
            ulMenu.classList.add('menuMobileDisplayed');
            hamburgerBtn.style = "background-color:transparent"
        }
    })
    //languages dropdown
    arrowDownLanguage.addEventListener('click', evt => {
        if(dropDownContent.classList.contains('dropdown-content-opened')){
            dropDownContent.classList.remove('dropdown-content-opened');
        }else{
            dropDownContent.classList.add('dropdown-content-opened');
        }
    })
    //menu fixed and differently colored on scroll
    document.addEventListener('scroll', evt => {
        if(evt.path[1].innerWidth > 961){
            if(window.scrollY > 46){
                //document.querySelector('.addressTopForDesktop').style = "display:none";
                document.querySelector('header').style = "position:fixed; top: 0; background-color: #ffffff;";
                document.querySelector('.dropdown').classList.add('blackText');
                document.querySelector('.active').classList.add('activeBlack');
                Array.from(document.querySelectorAll('nav ul a')).forEach(element => {
                    element.classList.add('blackText');
                    element.addEventListener('mouseover', evt =>{
                        evt.target.style = 'border-bottom: 5px solid #ffdab9;';
                    });
                    element.addEventListener('mouseout', evt =>{
                        evt.target.style = 'border-bottom: none;';
                    });
                });
              } else{
                //document.querySelector('.addressTopForDesktop').style = "display:block";
                document.querySelector('header').style = "position: absolute; background-color: trasparent";
                document.querySelector('.dropdown').classList.remove('blackText');
                document.querySelector('.active').classList.remove('activeBlack');
                Array.from(document.querySelectorAll('nav ul a')).forEach(element => {
                    element.classList.remove('blackText');
                    element.addEventListener('mouseover', evt =>{
                        evt.target.style = 'border-bottom: none;';
                    });
                    element.addEventListener('mouseout', evt =>{
                        evt.target.style = 'border-bottom: none';
                    });
                });
              }
        }
        
      }) 
    

    //managing prenota modal

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = Array.from(document.querySelectorAll("#myBtnModal"));


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.map(btn => {
  btn.addEventListener('click', evt => {
    modal.style.display = "block";
  })
})


// When the user clicks on <span> (x), close the modal
span.addEventListener('click', evt => {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', evt => {
  if (evt.target == modal) {
    modal.style.display = "none";
  }
})

//input datetime with flatpickr
    flatpickr(".calendario", {
      minDate: "today"
    });  
    flatpickr(".orario", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      minTime: "12:00",
      maxTime: "23:00",
    }); 


});