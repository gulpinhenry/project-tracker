var formEl = $('#project-form');
var nameInputEl = $("#inputName");
var typeInputEl = $("#inputType");
var dateInputEl = $("#inputDate");
var rateInputEl = $("#inputRate");
var alertEl = $("#alert");
var containsEl = $("#containsTrue");

var names = [];
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
    else
    {
        if(names.includes(nameInput))
        {
            containsEl.show();
            return;
        }
        names.push(nameInput);
        console.log(names);
        
        //add name to arr, maybe check if the name already exists?
        // the rest to local storage
    }
    

}

$("#submit").on("click", handleFormSubmit);

formEl.on("submit", handleFormSubmit);
 