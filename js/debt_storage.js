      $(function(){ $("#saveButton").on('click', function(){
          if(localStorage.debt_history)
            var jsonDebt = localStorage.debt_history;
            jsonDebt.push({contact: $("#contact").value, quantity: $("#quantity").value, concept: $("#concept").value});

            localStorage.debt_history = JSON.stringify(jsonDebt);
          }

          else{
            var jsonDebt = [];
            jsonDebt.push({contact: $("#contact").value, quantity: $("#quantity").value, concept: $("#concept").value});

            localStorage.debt_history = JSON.stringify(jsonDebt);
        });
      });




