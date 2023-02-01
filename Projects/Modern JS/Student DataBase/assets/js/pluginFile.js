(function (pWindow) {


	/*===================== creating default values =============*/
	const mainArray = [];
	let CustomList = function (pId, options) {
		if (!(this instanceof CustomList)) {
			return new CustomList(pId, options);
		}
		this.domEl = document.getElementById(pId);
		this.options = options || {};
		mainArray.push(options);
		this.displayList();
	};

	/*==================== creating new list ================*/

	CustomList.prototype.displayList = function () {
		var Array = mainArray[0].data.students;
		arr.push(Array);
		var display = document.getElementById("display");
		Array.forEach(element => {
			var studentData = `
								 <div class="markList col-lg-4 mt-5">
									<div class="card text-center text-dark">							
										<img src="${element.img}" class = "img ">
										<h3 class="name mt-3">${element.name}</h3>										
									</div>
								 </div>`;
			display.innerHTML += studentData;
		});
		$(".markList").click(myFuntion);
	function myFuntion(event){
		var i = $(event.currentTarget).index();
		var element = arr[0][i];
		var display = document.getElementById("box2");		
		display.innerHTML = `<div class="container  mt-5 border border-secondary pt-5">
		<div class=" mark ">
			<h1 class="text-dark text-center bg-secondary">Name : <span class="text-info">${element.name}</span></h1><hr>
			<p class="text-dark text-center">ID : <span class="text-info" >${element.id}</span></p><hr>
			<p class="text-dark text-center">Mark 1 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m1}"></p><hr>
			<p class="text-dark text-center">Mark 2 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m2}"></p><hr>
			<p class="text-dark text-center">Mark 3 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m3}"></p><hr>
			<p class="text-dark text-center">Mark 4 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m4}"></p><hr>
			<p class="text-dark text-center">Mark 5 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m5}"></p>
		</div>
		<div class="mt-5 text-center ">
			<button  class="btn btn-primary btn-lg">Edit</button>
			<button onclick="saveBtn()" class="btn btn-success btn-lg ml-3">Save</button>
		</div>
		</div>`
	}
	// ===================Filter Name ======================================

	document.querySelector("#filter").addEventListener("keyup", function () {

		let i = document.querySelector("#filter").value;
		let main = mainArray[0].data.students.filter((e) => {
			return e.name.toUpperCase().startsWith(i.toUpperCase());
		})

		console.log(main);

		$("#display")[0].innerHTML = '';
		main.map((e, i) => {
			let element = document.createElement("div")
			element.classList.add("col-lg-4");
			element.innerHTML = `
			<div  class="markList col-lg-4 mt-5" onclick=" CustomList.prototype.datas('${e.id}',${i})">
			<div class="card text-center text-dark">							
										<img src="${e.img}" class = "img ">
										<h3 class="name mt-3">${e.name}</h3>										
									</div>
								 </div>`	
			$("#display")[0].append(element);
		})
		
		$(".markList").click(myFuntion);
		function myFuntion(event){
			var i = $(event.currentTarget).index();
			var element = arr[0][i];
			var display = document.getElementById("box2");		
			display.innerHTML = `<div class="container  mt-5 border border-secondary pt-5">
			<div class=" mark ">
				<h1 class="text-dark text-center bg-secondary">Name : <span class="text-info">${element.name}</span></h1><hr>
				<p class="text-dark text-center">ID : <span class="text-info" >${element.id}</span></p><hr>
				<p class="text-dark text-center">Mark 1 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m1}"></p><hr>
				<p class="text-dark text-center">Mark 2 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m2}"></p><hr>
				<p class="text-dark text-center">Mark 3 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m3}"></p><hr>
				<p class="text-dark text-center">Mark 4 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m4}"></p><hr>
				<p class="text-dark text-center">Mark 5 : <input  id='id1' maxlength="2" class="text-info input" value="${element.m5}"></p>
			</div>
			<div class="mt-5 text-center ">
				<button  class="btn btn-primary btn-lg">Edit</button>
				<button onclick="saveBtn()" class="btn btn-success btn-lg ml-3">Save</button>
			</div>
			</div>`
		}

		
	})

// ==================== Edit button ========================

var inputF = document.getElementById("id1");

		function saveBtn() {
			inputF.value = "textValue";
		}

}

	pWindow.CustomList = CustomList;
})(window)

var arr = [];














