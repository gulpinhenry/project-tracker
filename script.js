$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(".btn").on("click", function(){
    $('#myModal').modal('show');
  });

  $(function(){
    $('#due-date').datepicker({
      //add min date
    });
  });