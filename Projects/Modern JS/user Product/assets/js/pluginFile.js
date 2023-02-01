(function(pWindow) {
	

	/*===================== creating default values =============*/
	const mainArray=[];
	let CustomList= function(pId, options) {
		if(!(this instanceof CustomList)) {
			return new CustomList(pId, options);
		}
		this.domEl = document.getElementById(pId);
		this.options=options||{};	
		mainArray.push(options);
		this.displayList();
	};

	/*==================== creating new list ================*/

	CustomList.prototype.displayList = function(){
		// console.log(mainArray);
		var Array = mainArray[0].data.ProductCollection;
		arr.push(Array);
		$(".submit").click(myFuntion);
		$(".userlist").hide();
  function myFuntion(event){
	var i = $(event.currentTarget).index();
		var element = arr[0][i];
  var display = document.getElementById("display");		
  Array.forEach(element => {
	var ProductData = `		<div class="">
								<div class=" col-lg-4 mt-5">
									<div class="card text-center text-dark">							
										<img src="${element.ProductPicUrl}" class = "img ">
										<h3 class="name mt-3">${element.Name}</h3>										
									</div>
								</div>
							</div>	`;
	display.innerHTML += ProductData;
	
});
 // ========= filter products ===========

document.querySelector("#filter").addEventListener("keyup", function () {

	let i = document.querySelector("#filter").value;
	let main = mainArray[0].data.ProductCollection.filter((e) => {
		return e.Category.toUpperCase().startsWith(i.toUpperCase());
	})
	console.log(main);
	$("#display")[0].innerHTML = '';
		main.map((e, i) => {
			let element = document.createElement("div")
			element.classList.add("col-lg-4");
			element.innerHTML = `
			<div  class="markList col-lg-4 mt-5" onclick="CustomList.prototype.datas('${e.id}',${i})">
			<div class="card text-center text-dark">							
										<img src="${e.ProductPicUrl}" class = "img ">
										<h3 class="name mt-3">${e.Name}</h3>										
									</div>
								 </div>`	
			$("#display")[0].append(element);
		})
})
}
}

	
	pWindow.CustomList = CustomList;
})(window)
var arr = [];
//===================== User List ==========================
var objPeople = [
	{
	  username: "Giri",
	  cart : []
	},
	{
	  username: "Hema",
	  cart : []
	},
	{
	  username: "Mokesh",
	  cart : []
	
	},
	{
	  username: "Elwin",
	  cart : []

	},
	{
	  username: "Bharath",
	  cart : []	  
	},
	{
	  username: "Gunal",
	  cart : []
	}
  ]
  
  function getInfo() {
	var username = $('#username').val();
  
	for (var i = 0; i < objPeople.length; i++) {
	  if (username == objPeople[i].username) {
		alert(username + " is logged in")
		$(".userlist").show();
		$(".form").hide();
		return
	  }
	  else{
		console.log("invalid User");
	  }
	}
	alert("incorrect username ");
	return false
  
  }


$(document).ready(function(){
	$(".clic").click(function(){
	  $("#user").toggle();
	});
  });
  $("#user").hide();


  