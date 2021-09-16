$(window).scroll(function(){
    if($(this).scrollTop() > 10){
        $(".navbar").addClass("navbarAni");
    }
    else{

        $(".navbar").removeClass("navbarAni");
    }
})


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
    $(".samberger").html("Mittelschule an der Sambergerstraße");
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


$(".linkedIn").click(function(){
  $('<a href="https://de.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" target="blank"></a>')[0].click();
})

$(".github").click(function(){
  $('<a href="https://github.com/" target="blank"></a>')[0].click();
})

$(".linkedInNav").click(function(){
  $('<a href="https://de.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" target="blank"></a>')[0].click();
})

$(".githubNav").click(function(){
  $('<a href="https://github.com/alper42" target="blank"></a>')[0].click();
})