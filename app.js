/* The below is the set-up for my game page Read Me / more info buttons: */

const readMeText = () => {
  const readMessage = document.getElementById('readMe');
  if (readMessage.style.display === "none") {
    readMessage.style.display = "block"
  }
  else {readMessage.style.display = "none"}
}


/* The below is the set-up for my contact page submit alert: */

$(document).ready(function(){
  $(".submit").click(function(){
    alert("Thank you for contacting me! I look forward to reading your message and will be in touch soon. Have a great day!");
  });
});



// The below code was an attempt to get the "read me" button to work on the Game Space page...Ashley helped me get it working with the first code on this page....


// const button = document.getElementById('readMeButton');
//
// button.addEventListener("click", moreInfo)
//
// const moreInfo = () => {
//   document.getElementById('readMe').innertext= "testing";
// }
//
// moreInfo()


// const readButton = document.getElementById('readMeButton');
//
// readButton.addEventListener("click", moreInfo);
//
// const moreInfo = () => {
//   document.getElementById('readMe').innerHTML= "testing";
// }

// let button = document.querySelector('#readMeButton');
// let message = document.querySelector('#readMe');
//
// button.addEventListener('click', () => {
//   message.classList.toggle('reveal');
// })




// The below code was an attempt to get the dropdown menus via jQuery, but I ended up getting it to work with CSS...later I realized I had not synced my script sources for javascript and jQuery with my html files, and that may have been why the below attemps didn't work:


// $(() => {
//   $('.about').on('click', () => {
//     $('.aboutUL').attr("display", "")
//     $('.aboutUL').attr("pointer-events", "all")
//     $('.aboutUL').attr("transform", "translateY(0px)")
//   }
// )})

// //
// $(() => {
//     $('.about').hover(function(){
//       $('.aboutUL',this).slideDown(500)
//       }
//       function(){
//       $('.aboutUL',this).slideUp(300)
//       }
//   })

  //
  // $(() => {
  //   if $('.about').on('click') {
  //     $('.aboutUL').show('slow')
  //   }
  //   else {
  //     $('.aboutUL').hide('slow')
  //   }
  // )})
