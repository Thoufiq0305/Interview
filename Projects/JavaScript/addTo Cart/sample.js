// $('input.selected-product-quantity').change(function(){
//   var quantity = $(this).val();
// //   var price = $('.priceClass').text();
//   var calprice = parseInt(2000) * parseInt(quantity);
//   $('.priceClass').text(calprice);
// });

var gotoCart = document.querySelector('#gotoCart');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(gotoCart.getAttribute('data-count'));
			gotoCart.setAttribute('data-count', add +1);
			gotoCart.classList.add('zero')

      
      var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "pay";
			
			if (clone) {
	gotoCart.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
   document.querySelector(".amount").innerHTML = Math.floor(Math.random() * 40000);

	