$( function(){
        var number = $("#cc-number"),
        expDate = $("#cc-expiration-date"),
        cvv = $("#cc-cvv"),
        paymentButton = $("#submit-payment"),
        ccInputs = $(".cc-input"),
        timerInterval = 1000,
        timer;
        
        number.inputmask("9999 9999 9999 9[999] [999]", {"placeholder": " "} );
        expDate.inputmask("mm/yyyy");
        cvv.inputmask("999[9]", {"placeholder": " "} );
        
        number.focus();
        
        ccInputs.keyup(function(e) {
                clearTimeout(timer);
                timer = setTimeout(finishTyping, timerInterval, $(this).attr("id"), $(this).val());
                });
        
        ccInputs.keydown(function() {
                clearTimeout(timer);
                });
        
        function finishTyping(id, value){
              switch(id)  {
                case "cc-number":
                        break;
                case "cc-expiration-date":
                        break;
                case "cc-cvv":
                        break;
              }
        }
        
        });