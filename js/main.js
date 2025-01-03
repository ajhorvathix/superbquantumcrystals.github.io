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
  };

  new Typed('#typedJS', options);
});
Key Changes
Initialization Syntax:
Instead of $('#typedJS').typed({...}), use new Typed('#typedJS', {...}).

Library Version:
Make sure you're using the latest Typed.js library. You can include it via a CDN like this:

html
Copy code
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
HTML Element:
The #typedJS selector must reference an actual element in your HTML where the typed text should appear. For example:

html
Copy code
<div id="typedJS"></div>
jQuery Dependency:
While your script uses jQuery ($(document).ready()), Typed.js itself doesn't require jQuery. If you're not using jQuery elsewhere, you can write this as a standalone JavaScript function.

Let me know if you need further clarification!






You said:
Just so you know, before I made the changes, it worked perfectly. I just wanted to change the text that appears and it has quotes
ChatGPT said:
ChatGPT
Thanks for clarifying! If the original code worked perfectly, that means your setup and library version already supported the $('#typedJS').typed({...}) syntax. There's no need to switch to the modern syntax in that case.

Here's your updated script with the new text exactly as requested:

javascript
Copy code
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
