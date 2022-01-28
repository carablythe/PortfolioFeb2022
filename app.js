$(() => {
  $('#submit').on('click', () => {
  alert(`Thank you for contacting me! I look forward to reading your message and will be in touch soon. Have a great day!`)
  })
})




// The below code was an attempt to get the dropdown menus via jQuery, but I ended up getting it to work with CSS:


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
