/* The below is the set-up for my game page Read Me / more info buttons: */

$(() => {
  $('#readMe').css("display", "none")
})

const readMeText = () => {
  const readMessage = document.getElementById('readMe');
  if (readMessage.style.display === "none") {
    readMessage.style.display = "block"
  }
  else {readMessage.style.display = "none"}
}



/* The below is the set-up for my contact page submit message: */

$(() => {
  $('.submit').on('click', () => {
    $('.imResponse').text("Thank you for contacting me! I look forward to reading your message and will be in touch soon. Have a great day!   - Cara")})
})


//hover effect on pics

$(document).ready(function() {
    $('.first_game').mouseenter(function() {
    $('.first_game').css("background-image", "url(images/TreasureInverted.png)")
    })
    $('.first_game').mouseleave(function() {
    $('.first_game').css("background-image", "url(images/Treasure.png)")
    })
  })



//The following was an attempt to link my user input from the contact page into a Google Sheets file. DID NOT WORK. The script source is from https://medium.com/geekculture/link-your-html-form-to-a-spreadsheet-via-google-forms-9024f0611d82
//
//     function postToGoogle() {
//       var field1 = $("#firstName").val();
//       var field2 = $("#lastName").val();
//       var field3 = $("#email").val();
//       var field4 = $("#comment").val();
//
//       $.ajax({
//         url: "{https://docs.google.com/forms/u/0/d/e/1FAIpQLSevE8TqmUw7_aO5gn_gRzvH7qRX7IRg8raybaaf2mnps6u-8Q/formResponse}",
//
//         data: {
//           "entry.847406057": field1,
//           "entry.1603159707": field2,
//           "entry.1613149320": field3,
//           "entry.910551304": field4
//         },
//         type: "POST",
//         dataType: "xml",
//         success: function (d) {
//           $('#contact').trigger('reset');
//         },
//         error: function (x, y, z) {
//           $('#contact').trigger('reset');
//         }
//       });
//       return false;
//     }
//
//
//
//
//
//
//
//
//
//
//
// // The below code was an attempt to get the dropdown menus via jQuery, but I ended up getting it to work with CSS...later I realized I had not synced my script sources for javascript and jQuery with my html files, and that may have been why the below attemps didn't work:
// //
// //
// // $(() => {
// //   $('.about').on('click', () => {
// //     $('.aboutUL').attr("display", "")
// //     $('.aboutUL').attr("pointer-events", "all")
// //     $('.aboutUL').attr("transform", "translateY(0px)")
// //   }
// // )})
//
// // //
// // $(() => {
// //     $('.about').hover(function(){
// //       $('.aboutUL',this).slideDown(500)
// //       }
// //       function(){
// //       $('.aboutUL',this).slideUp(300)
// //       }
// //   })
//
//   //
//   // $(() => {
//   //   if $('.about').on('click') {
//   //     $('.aboutUL').show('slow')
//   //   }
//   //   else {
//   //     $('.aboutUL').hide('slow')
//   //   }
//   // )})
