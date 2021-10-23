function startAddingTasks() {

    var allTasks = {};
    var buttontask = document.getElementById("buttontask");
    var task = document.getElementById("task");
    var list1 = document.getElementById("list1");
  
    buttontask.addEventListener('click', function() {

      const checkbox = document.createElement('input');
            checkbox.type = "checkbox";

      const newBTN = document.createElement("button");
      newBTN.innerHTML = "\u274C";

      var newE = document.createElement('LI');
      var textnode = document.createTextNode(task.value);

      // Populate JS Object with data. Assign all values to True

      let newKey = task.value;
      allTasks[newKey] = true;


  
    // appending items

      
      list1.appendChild(checkbox);
      newE.appendChild(textnode);
      list1.appendChild(newBTN);
      
      
  // removes child
  
      newBTN.addEventListener('click', function() {
        list1.removeChild(newE);
        list1.removeChild(newBTN);
        list1.removeChild(checkbox);
      });


      list1.appendChild(newE);
    });







// get labels for checkboxes
    var incomplete = document.getElementById("incomplete");
    var complete = document.getElementById("complete");
    var checkboxINC = document.createElement('input');
        checkboxINC.type = "checkbox";
    incomplete.appendChild(checkboxINC);

// create checkboxes

    var checkboxCOM = document.createElement('input');
        checkboxCOM.type = "checkbox";
    complete.appendChild(checkboxCOM);

// hide elements function
 
var ul = document.getElementById("list1");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  console.log(i);
}

 //event listeners for incomplete labels

 var ul = document.getElementById("list1");
 var items = ul.getElementsByTagName("li");

    checkboxINC.addEventListener('change', function() {
        if(checkboxINC.checked) {
            incomplete.style.color = "white";

            for (var i = 0; i < items.length; ++i) {
              if (items[i].previousSibling.previousSibling.checked == true){
                  items[i].style.display = "none";
                  items[i].previousSibling.style.display = "none";
                  items[i].previousSibling.previousSibling.style.display = "none";
              } else {
                items[i].style.display = "inline";
                items[i].previousSibling.style.display = "inline";
                items[i].previousSibling.previousSibling.style.display = "block";
              }
            }
        }else {
            for (var i = 0; i < items.length; ++i) {
                items[i].style.display = "inline";
                items[i].previousSibling.style.display = "inline";
                items[i].previousSibling.previousSibling.style.display = "block";
            }

        }
        
      });

 //event listeners for complete labels

      checkboxCOM.addEventListener('change', function() {
        if(checkboxCOM.checked) {
            complete.style.color = "white";
            var ul = document.getElementById("list1");
            var items = ul.getElementsByTagName("li");
            for (var i = 0; i < items.length; ++i) {
              if (items[i].previousSibling.previousSibling.checked == false){
                  items[i].style.display = "none";
                  items[i].previousSibling.style.display = "none";
                  items[i].previousSibling.previousSibling.style.display = "none";
              } else {
                items[i].style.display = "inline";
                items[i].previousSibling.style.display = "inline";
                items[i].previousSibling.previousSibling.style.display = "block";

              }
            }
        }else {
            var ul = document.getElementById("list1");
            var items = ul.getElementsByTagName("li");
            for (var i = 0; i < items.length; ++i) {
                items[i].style.display = "inline";
                items[i].previousSibling.style.display = "inline";
                items[i].previousSibling.previousSibling.style.display = "block";
            }
        }
        
      });


    complete.addEventListener('click', function() {
        complete.style.color = "white";
      });

  };
  

  startAddingTasks();

