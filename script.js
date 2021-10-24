                          /*Lebenslauf*/


$(".beruf").click(function(){
    $(".zielstatt").html("Aushilfsjob im Einzelhandel (Edeka GmbH)");
  });

  $(".schule").click(function(){
    $(".zielstatt").html("M-Zug an der Zielstattstraße (MSA)");
  });

  $(".beruf").click(function(){
    $(".samberger").html("Praktikum im Einzelhandel (Rossmann GmbH)");
  });

  $(".schule").click(function(){
    $(".samberger").html("Samberger Mittelschule");
  });

  $('button').on('click', function(){  
      $('button').removeClass('selected');   
       $(this).addClass('selected');
});




$(".beruf").click(function(){
  $(".berufIcon").css("color", "#b9fc00");
});

$(".schule").click(function(){
  $(".berufIcon").css("color", "rgb(212, 212, 212)");
});

$(".schule").click(function(){
  $(".schuleIcon").css("color", "#b9fc00");
});

$(".beruf").click(function(){
  $(".schuleIcon").css("color", "rgb(212, 212, 212)");
});

$(".beruf").click(function(){
  $(".vier").hide();
});

$(".schule").click(function(){
  $(".vier").show();
});


$(".beruf").click(function(){
  $(".drei").hide();
});

$(".schule").click(function(){
  $(".drei").show();
});

$(".beruf").click(function(){
  $(".jahr1beruf").css("z-index", 1);
});

$(".schule").click(function(){
  $(".jahr1beruf").css("z-index", -1);
});

$(".beruf").click(function(){
  $(".jahr1").css("color", "white");
});

$(".schule").click(function(){
  $(".jahr1").css("color", "rgb(196, 196, 196)");
});

$(".beruf").click(function(){
  $(".jahr2beruf").css("z-index", 1);
});

$(".schule").click(function(){
  $(".jahr2beruf").css("z-index", -1);
});

$(".beruf").click(function(){
  $(".jahr2").css("color", "white");
});

$(".schule").click(function(){
  $(".jahr2").css("color", "rgb(196, 196, 196)");
});

$(".beruf").click(function(){
  $(".schule").css("color", "rgb(196, 196, 196)");
});


                          /*Nav*/


$("ul li a").click(function(){
  $("ul li a").css("color", "");
  $(this).css("color", "#b9fc00");
})



$(window).scroll(function(){
  if($(this).scrollTop() > 10){
      $(".navbar").addClass("navbarAni");
  }
  else{

      $(".navbar").removeClass("navbarAni");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 10){
      $(".navbar").addClass("navbarAni");
  }
  else{

      $(".navbar").removeClass("navbarAni");
  }
})


                          /*Links*/



$(".linkedIn").click(function(){
  $('<a href="https://www.linkedin.com/in/alper-caliskan-267306221/" target="blank"></a>')[0].click();
})

$(".github").click(function(){
  $('<a href="https://github.com/alper42?tab=overview&from=2021-07-01&to=2021-07-31" target="blank"></a>')[0].click();
})

$(".linkedInNav").click(function(){
  $('<a href="https://www.linkedin.com/in/alper-caliskan-267306221/" target="blank"></a>')[0].click();
})

$(".githubNav").click(function(){
  $('<a href="https://github.com/alper42?tab=overview&from=2021-07-01&to=2021-07-31" target="blank"></a>')[0].click();
})



                          /*Menu*/


$(".menu2").click(function(){
  $(".menu").toggleClass("menuAni")
})

$(".menu2").click(function(){
  $(".menuStrich1").toggleClass("menuStrich1Ani")
})

$(".menu2").click(function(){
  $(".menuStrich2").toggleClass("menuStrich2Ani")
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1900){
      $(".htmlKasten2").addClass("htmlKasten2Ani");
  }
  else{

      $(".htmlKasten2").removeClass("htmlKasten2Ani");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1900){
      $(".javaKasten2").addClass("javaKasten2Ani");
  }
  else{

      $(".javaKasten2").removeClass("javaKasten2Ani");
  }
})

$(".menu2").click(function(){
  $(".menuGrey").toggleClass("menuGreyAni")
})

$("li").click(function(){
  $(".menu").toggleClass("menuAni")
})

$("li").click(function(){
  $(".menuStrich1").toggleClass("menuStrich1Ani")
})

$("li").click(function(){
  $(".menuStrich2").toggleClass("menuStrich2Ani")
})



$(window).scroll(function(){
  if($(this).scrollTop() > 2100){
      $(".englischBalken").addClass("englischBalkenAni");
  }
  else{

      $(".englischBalken").removeClass("englischBalkenAni");
  }
})

$(window).scroll(function(){
  if($(this).scrollTop() > 2100){
      $(".deutschBalken").addClass("deutschBalkenAni");
  }
  else{

      $(".deutschBalken").removeClass("deutschBalkenAni");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 2100){
      $(".türkischBalken").addClass("türkischBalkenAni");
  }
  else{

      $(".türkischBalken").removeClass("türkischBalkenAni");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1430){
      $(".strich1").addClass("strich1Ani");
  }
  else{

      $(".strich1").removeClass("strich1Ani");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1430){
      $(".strich2").addClass("strich2Ani");
  }
  else{

      $(".strich2").removeClass("strich2Ani");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1430){
      $(".strich3").addClass("strich3Ani");
  }
  else{

      $(".strich3").removeClass("strich3Ani");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 600){
      $(".strichUber").addClass("strichUberAni");
  }
  else{

      $(".strichUber").removeClass("strichUberAni");
  }
})
