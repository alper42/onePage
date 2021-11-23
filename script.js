                        /*überMich*/

                        
$(window).scroll(function(){
  if($(this).scrollTop() > 600){
      $(".strichUber").addClass("strichUberAni");
  }
  else{

      $(".strichUber").removeClass("strichUberAni");
  }
})



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
  $(".jahr1").css("display", "none");
});

$(".schule").click(function(){
  $(".jahr1").css("display", "flex");
});

$(".beruf").click(function(){
  $(".jahr2beruf").css("z-index", 1);
});

$(".schule").click(function(){
  $(".jahr2beruf").css("z-index", -1);
});

$(".beruf").click(function(){
  $(".jahr2").css("display", "none");
});

$(".schule").click(function(){
  $(".jahr2").css("display", "flex");
});

$(".beruf").click(function(){
  $(".schule").css("color", "rgb(196, 196, 196)");
});





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
  if($(this).scrollTop() > 1950){
      $(".htmlKasten2").addClass("htmlKasten2Ani");
  }
  else{

      $(".htmlKasten2").removeClass("htmlKasten2Ani");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 1950){
      $(".javaKasten2").addClass("javaKasten2Ani");
  }
  else{

      $(".javaKasten2").removeClass("javaKasten2Ani");
  }
})



$(window).scroll(function(){
  if($(this).scrollTop() > 2150){
      $(".englischBalken").addClass("englischBalkenAni");
  }
  else{

      $(".englischBalken").removeClass("englischBalkenAni");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 2150){
      $(".deutschBalken").addClass("deutschBalkenAni");
  }
  else{

      $(".deutschBalken").removeClass("deutschBalkenAni");
  }
})


$(window).scroll(function(){
  if($(this).scrollTop() > 2150){
      $(".türkischBalken").addClass("türkischBalkenAni");
  }
  else{

      $(".türkischBalken").removeClass("türkischBalkenAni");
  }
})




                          /*Nav*/


$("ul li a").click(function(){
  $("ul li a").css("color", "");
  $(this).css("color", "#b9fc00");
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


$(".menu2").click(function(){
  $(".menuGrey").toggleClass("menuGreyAni")
})

$("li").click(function(){
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




var mode = document.getElementById("mode");

mode.onclick = function(){
  document.body.classList.toggle("darkTheme");
}

$(".mode").click(function(){
  $(".blackMode").toggleClass("blackModeAni")
})

$(".mode").click(function(){
  $(".portfolio").toggleClass("portfolioAni")
})

$(".mode").click(function(){
  $(".willkommen").toggleClass("willkommenAni")
})


$(".mode").click(function(){
  $(".grauerKasten").toggleClass("grauerKastenAni")
})


$(".mode").click(function(){
  $(".uberMich2").toggleClass("uberMich2Ani")
})


$(".mode").click(function(){
  $(".lebenslauf2").toggleClass("lebenslauf2Ani")
})

$(".mode").click(function(){
  $(".jahr1").toggleClass("jahr1Ani")
})


$(".mode").click(function(){
  $(".jahr2").toggleClass("jahr2Ani")
})


$(".mode").click(function(){
  $(".kenntnisseGrau").toggleClass("kenntnisseGrauAni")
})

$(".mode").click(function(){
  $(".cssKasten").toggleClass("cssKastenAni")
})


$(".mode").click(function(){
  $(".msOfficeKasten").toggleClass("msOfficeKastenAni")
})


$(".mode").click(function(){
  $(".anschreiben2").toggleClass("anschreiben2Ani")
})

$(".mode").click(function(){
  $(".kontaktierMich2").toggleClass("kontaktierMich2Ani")
})

$(".mode").click(function(){
  $(".nameC").toggleClass("nameCAni")
})

$(".mode").click(function(){
  $(".vornameC").toggleClass("vornameCAni")
})

$(".mode").click(function(){
  $(".firmaC").toggleClass("firmaCAni")
})

$(".mode").click(function(){
  $(".nachrichtC").toggleClass("nachrichtCAni")
})


$(".mode").click(function(){
  $(".navbar").toggleClass("navbar2")
})

$(document).ready(function () {
  $(".mode").click(function () {
      $(".lightMode").toggle();
  });
});

$(".mode").click(function(){
  $(".darkMode").toggleClass("darkModeAni")
})


$(".mode").click(function(){
  $(".menu").toggleClass("menuDark")
})



setInterval(function(){ 
  $('.refresh').addClass("refreshAni")
}, 1500);

setInterval(function(){ 
  $('.refresh2').addClass("refresh2Ani")
}, 1850);


setInterval(function(){ 
  $('.logoNameRefresh').addClass("logoNameRefreshAni")
}, 500);


$(this).scrollTop(0);


if (window.matchMedia('(max-width: 430px)').matches)
{
  $(window).scroll(function(){
    if($(this).scrollTop() > 1700){
        $(".htmlKasten2").addClass("htmlKasten2Ani");
    }
    else{
  
        $(".htmlKasten2").removeClass("htmlKasten2Ani");
    }
  })
  
    
  $(window).scroll(function(){
    if($(this).scrollTop() > 1700){
        $(".javaKasten2").addClass("javaKasten2Ani");
    }
    else{
  
        $(".javaKasten2").removeClass("javaKasten2Ani");
    }
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
  

}
