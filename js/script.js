$( document ).tooltip();
$( function() {
  $( "#draggable" ).draggable();
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
  $( "#sortable" ).sortable();
  $( "#accordion" ).accordion();

  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
  $( "#datepicker" ).datepicker();
  $( "#anim" ).on( "change", function() {
    $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
  });
  $( "#menu" ).menu();
  $("#tabs").tabs();
 
  $( "#button" ).on( "click", function() {
    $( "#effect" ).addClass( "newClass", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effect" ).removeClass( "newClass" );
    }, 1500 );
  }
  
  

});




