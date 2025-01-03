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
      "Oh, sandwiches with sweet nectar!"
      "Excellent, and lunch, snack, supper, and dinner?"
      "We'll go to the market and figure it out!"
      "Awesome I'm ready, let's eat!",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});
