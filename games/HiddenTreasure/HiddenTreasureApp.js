const username = prompt('What is your name?');

const gameRestart = () => {
$('.story').text(`Please press the 'Start Game' button to play again! `)
$(() => {
  $('.buttonA').on('click', () => {$('.story').text(`Please press the 'Start Game' button to play again! `)})
  $('.buttonB').on('click', () => {$('.story').text(`Please press the 'Start Game' button to play again! `)})
  $('.buttonStart').on('click', () => {gameStart()})
})
}
const away = () => {
  $('.story').text(`You stayed away from the scorpion and went into a desert village with many people. They traded you a hidden treasure for your iPhone. YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const ignore = () => {
  $('.story').text(`You ignored the camel and walked the other way where you found a Genie's bottle in the sand. The Genie granted you three wishes, and one of your wishes was a hidden treasure.  YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const run = () => {
  $('.story').text(`You ran away from the snake and discovered a cave! Inside the cave was a hidden treasure.  YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const avoid = () => {
  $('.story').text(`In your attempt to avoid the monkey, you found a waterfall. Behind the waterfall was a hidden treasure. YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const near = () => {
  $('.story').text(`Going near a scorpion is dangerous, but all of a sudden a hunter arrived and killed the scorpion. The hunter said, 'I've been looking for this scorpion all day. Here is your finder's fee, a hidden treasure.' YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const ride = () => {
  $('.story').text(`You rode the camel to an oasis where you found a hidden treasure. YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const approach = () => {
  $('.story').text(`Are you crazy? Why would you approach a snake? Luckily, this was a lucky snake, and he showed you the location of a hidden treasure.  YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const pet = () => {
  $('.story').text(`The monkey seemed friendly at first, but then chased you up a tree.  Lucky for you, there was hidden treasure in that tree!  YOU WIN!!!!!!`)
  $(() => {
    $('.buttonA').on('click', () => {gameRestart()})
    $('.buttonB').on('click', () => {gameRestart()})
    $('.buttonStart').on('click', () => {gameRestart()})
  })
}
const scorpion = () => {
  $('.story').text(`You encountered a scorpion! What will you do?  Click <--"Choice A" if you'll go near it or "Choice B"--> if you'll stay away from it.`)
  $(() => {
    $('.buttonA').on('click', () => {near()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonB').on('click', () => {away()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonStart').on('click', () => {scorpion()})
  })
}
const camel = () => {
  $('.story').text(`You encountered a camel! What will you do?  Click <--"Choice A" if you'll try to ride it or "Choice B"--> if you'll ignore it.`)
  $(() => {
    $('.buttonA').on('click', () => {ride()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonB').on('click', () => {ignore()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonStart').on('click', () => {camel()})
  })
}
const snake = () => {
  $('.story').text(`You encountered a snake! What will you do?  Click <--"Choice A" if you'll approach it or "Choice B"--> if you'll run away.`)
  $(() => {
    $('.buttonA').on('click', () => {approach()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonB').on('click', () => {run()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonStart').on('click', () => {snake()})
  })
}
const monkey = () => {
  $('.story').text(`You encountered a monkey! What will you do?  Click <--"Choice A" if you'll pet it or "Choice B"--> if you'll avoid it.`)
  $(() => {
    $('.buttonA').on('click', () => {pet()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonB').on('click', () => {avoid()
    $('body').css('background-image','url("https://videohive.img.customer.envatousercontent.com/files/89b4d83e-c5bf-433d-b3b2-89b553293a32/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=0a437edda9b1d7b915c894af06c1d8b3")')
    })
    $('.buttonStart').on('click', () => {monkey()})
  })
}
const jungle = () => {
 $('.story').text(`You are in the jungle! What jungle creature will you encounter next? Click <--"Choice A" for snake or "Choice B"--> for monkey.`)
 $(() => {
   $('.buttonA').on('click', () => {snake()
    $('body').css('background-image','url("https://dkt6rvnu67rqj.cloudfront.net/sites/default/files/styles/600x400/public/media/iStock-ballpython.jpg?h=e03e11fa&itok=IQ217D41")')
    })
   $('.buttonB').on('click', () => {monkey()
   $('body').css('background-image','url("http://4.bp.blogspot.com/-MqSh5uZJsW8/Uf0Tw0NafyI/AAAAAAAABAE/0_ZqAg_VHE4/s1600/Jungle+monkey.jpg")')
   })
  $('.buttonStart').on('click', () => {jungle()})
 })
}

const desert = () => {
  $('.story').text(`You are in the desert! What desert creature will you encounter next? Click <--"Choice A" for camel or "Choice B"--> for scorpion.`)
  $(() => {
    $('.buttonA').on('click', () => {camel()
    $('body').css('background-image','url("https://images.freeimages.com/images/large-previews/f97/camel-1249778.jpg")')
    })
    $('.buttonB').on('click', () => {scorpion()
    $('body').css('background-image','url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghpPjs4I56zoyB5frqCS98fF8CcnHUVvlGy6VIm2k3Zv7W2BS4ecQLgZAP_FYtUu2EaQ&usqp=CAU")')
    })
    $('.buttonStart').on('click', () => {desert()})
  })
}

const gameStart = () => {
  $('.story').text(`Welcome to the "Hidden Treasure" game, ${username}! Where do you want your adventure to begin? Click <--"Choice A" for jungle or "Choice B"--> for desert.`)
  $(() => {
    $('.buttonA').on('click', () =>
    {jungle()
    $('body').css('background-image','url("https://happymag.tv/wp-content/uploads/2018/07/thaijungle.jpg")')
    })
    $('.buttonB').on('click', () => {desert()
    $('body').css('background-image','url("https://dhofardelight.com/wp-content/uploads/2017/12/Theimposingbeautyofthe_Emp.jpg")')
    })
    $('.buttonStart').on('click', () => {gameStart()})
  })
}

$(() => {
  $('.buttonStart').on('click', () => {gameStart()})
})
