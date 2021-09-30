var formEl = $('#project-form');
var nameInputEl = $("#inputName");
var typeInputEl = $("#inputType");
var dateInputEl = $("#inputDate");
var rateInputEl = $("#inputRate");
var alertEl = $("#alert");

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


var handleFormSubmit = function (event) {
    event.preventDefault();

    var nameInput = nameInputEl.val();
    var typeInput = typeInputEl.val();
    var dateInput = dateInputEl.val();
    var rateInput = rateInputEl.val();
    if (!nameInput || !dateInput || !typeInput || !rateInput) {
        alertEl.show();
        return;
    }
    

}

$("#submit").on("click", handleFormSubmit);

formEl.on("submit", handleFormSubmit);
 