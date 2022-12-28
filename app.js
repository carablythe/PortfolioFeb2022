/* Scroll to and toggle AboutME/GOALS section*/

$(() => {
  $('.aboutMe').css("display", "none")
  $('.aboutMeLink').on('click', () => {
     $('.aboutMe').toggle()
     $("html, body").animate({ scrollTop: $(".aboutMeStart").position().top + (-55)
    }, 500);
  })
});


/* The below is the set-up for the Read Me button/ more info sections in the ID projects section: */

$(() => {
  $('#readMe').css("display", "none")
})

$(() => {{}
  $('#readMe2').css("display", "none")
})

const readMeText = () => {
  const readMessage = document.getElementById('readMe');
  if (readMessage.style.display === "none") {
    readMessage.style.display = "block"
  }
  else {readMessage.style.display = "none"}
}

const readMeText2 = () => {
  const readMessage2 = document.getElementById('readMe2');
  if (readMessage2.style.display === "none") {
    readMessage2.style.display = "block"
  }
  else {readMessage2.style.display = "none"}
}




/* ARTWORK page: The below is the show description function of each piece of artwork: */
$(() => {$('.first').on('click', () => {
  $('.painting1').toggleClass("show-description")
 })
})

$(() => {$('.second').on('click', () => {
  $('.painting2').toggleClass("show-description")
 })
})

$(() => {$('.third').on('click', () => {
  $('.painting3').toggleClass("show-description")
 })
})

/* Scroll to Contacts section*/

$(() => {
  $('.contactCara').css("display", "none")
  $('.contactLink').on('click', () => {
     $('.contactCara').toggle()
     $("html, body").animate({ scrollTop: $(".contactCara").position().top + (-55)
    }, 500);
  })
});

/* The below is the set-up for my contact submit message: */

$(() => {
  $('.submit').on('click', () => {
    $('.imResponse').text("Thank you! Cara will be in touch with you soon! (provided you have supplied a valid e-mail address ; ) )")})
})


//Scroll to ID and SE project buttons

$(() => {
  $('.projectsLink').on('click', () => {
     $("html, body").animate({ scrollTop: $(".second_row").position().top + (-55)
    }, 500)
  })
});

//Image carousels for both ID and SE projects

$(() => {
  currentIDImgIndex = 0;
  numOfIDImages = $('.carousel-images').children().length -1
  $('.idStart').on('click', () => {
     $('.carousel-images').children().eq(currentIDImgIndex).toggle()
     $('.carousel-images2').children().css('display','none')
     $("html, body").animate({ scrollTop: $(".container").position().top + (-55)
    }, 500)
  })
});

$(() => {
  currentSEImgIndex = 0;
  numOfSEImages = $('.carousel-images2').children().length -1
  $('.seStart').on('click', () => {
     $('.carousel-images2').children().eq(currentSEImgIndex).toggle()
     $('.carousel-images').children().css('display','none')
     $("html, body").animate({ scrollTop: $(".container").position().top  + (-55)
    }, 500)
  })  
});

$(() => {
  currentIDImgIndex = 0;
  currentSEImgIndex = 0;
  numOfIDImages = $('.carousel-images').children().length -1
  numOfSEImages = $('.carousel-images2').children().length -1
  $('.next').on('click', () => {
     $('.carousel-images').children().eq(currentIDImgIndex).css('display','none')
     $('.carousel-images2').children().eq(currentIDImgIndex).css('display','none')
     if(currentIDImgIndex < numOfIDImages) {
       currentIDImgIndex++
     } else {
       currentIDImgIndex = 0
     }
    $('.carousel-images').children().eq(currentIDImgIndex).css('display','block')
  })
});

$(() => {
  currentIDImgIndex = 0;
  currentSEImgIndex = 0;
  numOfIDImages = $('.carousel-images').children().length -1
  numOfSEImages = $('.carousel-images2').children().length -1
  $('.previous').on('click', () => {
     $('.carousel-images').children().eq(currentIDImgIndex).css('display','none')
     $('.carousel-images2').children().eq(currentIDImgIndex).css('display','none')
     if(currentIDImgIndex < numOfIDImages) {
       currentIDImgIndex--
     } else {
       currentIDImgIndex = 0
     }
    $('.carousel-images').children().eq(currentIDImgIndex).css('display','block')
  })
});

$(() => {
  currentIDImgIndex = 0;
  currentSEImgIndex = 0;
  numOfIDImages = $('.carousel-images').children().length -1
  numOfSEImages = $('.carousel-images2').children().length -1
  $('.next2').on('click', () => {
     $('.carousel-images2').children().eq(currentSEImgIndex).css('display','none')
     $('.carousel-images').children().eq(currentSEImgIndex).css('display','none')
     if(currentSEImgIndex < numOfSEImages) {
       currentSEImgIndex++
     } else {
       currentSEImgIndex = 0
     }
    $('.carousel-images2').children().eq(currentSEImgIndex).css('display','block')
  })
});

$(() => {
  currentIDImgIndex = 0;
  currentSEImgIndex = 0;
  numOfIDImages = $('.carousel-images').children().length -1
  numOfSEImages = $('.carousel-images2').children().length -1
  $('.previous2').on('click', () => {
     $('.carousel-images2').children().eq(currentSEImgIndex).css('display','none')
     $('.carousel-images').children().eq(currentSEImgIndex).css('display','none')
     if(currentSEImgIndex < numOfSEImages) {
       currentSEImgIndex--
     } else {
       currentSEImgIndex = 0
     }
    $('.carousel-images2').children().eq(currentSEImgIndex).css('display','block')
  })
});



  


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
