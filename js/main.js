$(document).ready(function(){
  $('.nojs').hide(); 

  $(function() {
    console.log("js is (t)werking");
    $('#typedJS').typed({
      strings: [
      "What's up",
      "Not much",
      "How you doin’",
      "Good and you?",
      "Great, just staaarving.",
      "Yeah, me too, really hungry.",
      "What's for breakfast?",
      "Elderberry jam toast, and tea!",
      "What about second breakfast?",
      "Oh, sandwiches with sweet nectar!",
      "Excellent, and lunch, snack, supper, and dinner?",
      "We'll go to the market and figure it out!",
      "Awesome I'm ready, let's eat!",
      "...3 Days Later...",
      "...",
      "Wow, I'm about as stuffed as slaughter cow",
      "Uuuuuugggghhhh...me too..",
      "We should take a walk through the shire.",
      "Yes to work off all this good food.",
      "You're my best friend you know?",
      "You too, friend.",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});
