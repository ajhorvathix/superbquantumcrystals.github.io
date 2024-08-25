$(document).ready(function(){
  $('.nojs').hide(); 

  $(function() {
    console.log("js is (t)werking");
    $('#typedJS').typed({
      strings: [
      "Advanced materials available for purchase",
      "See catalog / order below",
      "fulfilled by Quantum Crystals LLC.",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }); 

});
