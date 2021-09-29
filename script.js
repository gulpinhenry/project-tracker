

function displayTime(){
    setInterval(function(){
        var time = moment(); 
        $(".lead").text(time.format("LLLL"));
    }, 500)
}
displayTime();


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(".btn").on("click", function(){
    $('#myModal').modal('show');
  });


 