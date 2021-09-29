var time = moment();

function displayTime(){
    setInterval(function(){
        $(".lead").text("Current time: " + time.format("MMM DD, YYYY"));
    }, 1000)
}



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(".btn").on("click", function(){
    $('#myModal').modal('show');
  });


  displayTime();