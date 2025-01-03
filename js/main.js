$(document).ready(function(){
  $('.nojs').hide(); 

  $(function() {
    console.log("js is (t)werking");
    $('#typedJS').typed({
      strings: [
      "What's up,",
      "Not much,",
      "How you doin’,",
      "Good yourself?,",
      "I’m good,",
      "What’s for dinner.,",
      "Pork Chops.,",
      "What’s for lunch...,",
      "Where are we going?,",
      "To the furthest reaches of space.,",
      "How are we going to get there?,",
      "Microsatellites and quantum teleportation.,",
      "Ah, I see. That’s cool,",
      "Yeah, I got this new thing, a \"QCNH\".,",
      "Uh, okay, and what does that mean?,",
      "Not sure, but it cost me about 5k and I worked all summer to get it.,",
      "Nice, so it works?,",
      "Yeah, just as far as I’m aware, no one has done this.,",
      "So, when you say, \"The furthest reaches of space\" does that mean \"to the edge of the Universe?\",",
      "Pretty much.,",
      "….",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});
