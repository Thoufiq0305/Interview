var objPeople = [
  {
    username: "Giri",
  },
  {
    username: "Hema",
  },
  {
    username: "Mokesh",
  
  },
  {
    username: "elwin",

  },
  {
    username: "Bharath",
    
  },
  {
    username: "Gunal",

  }
]

function getInfo() {
  var username = $('#username').val();
  for (var i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username ) {
      alert(username + " is logged in")
      return
    }
    else{
      console.log("invalid User");
      }
  }
  alert("incorrect username");
  return false

}

$(document).ready(function () {
  $("#show").click(function () {
    $("#display").css("display", "block");
  });
  $("#hide").click(function () {
    $("#display").css("display", "none");
  });
});

var gotoCart = document.querySelector('#gotoCart');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for (var but of button) {
  but.addEventListener('click', (e) => {

    var add = Number(gotoCart.getAttribute('data-count'));
    gotoCart.setAttribute('data-count', add + 1);
    gotoCart.classList.add('zero')


    var parent = e.target.parentNode;
    var clone = parent.cloneNode(true);
    select.appendChild(clone);
    clone.lastElementChild.innerText = "pay";

    if (clone) {
      gotoCart.onclick = () => {
        select.classList.toggle('display');
        clone.stopPropagation();

      }
    }
  })

}

