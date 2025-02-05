$(document).ready(function(){
  $('.nojs').hide(); 

  $(function() {
    console.log("js is (t)werking");
    $('#typedJS').typed({
      strings: [
      "Welcome to Quantum Crystals LLC!",
      "Here, you may find all your crystalline sample needs met",
      "We offer magnetic, superconducting, kagome lattice, and other types of materials",
      "Please contact us for an order or check out the links below!",
      "... :)",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});
