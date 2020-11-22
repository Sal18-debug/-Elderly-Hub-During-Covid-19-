function SeachFood(){
	var settings = {
  "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + document.getElementById("FoodInput").value,
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-key": "33179136b2mshc66e07cecd059ddp130dbbjsn54a479c20abd",
    "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
  },
};

$.ajax(settings).done(function (response) {
var foodTable = document.getElementById("foodTable");
for (var i=foodTable.rows.length-1;i>0;i--){
  foodTable.deleteRow(i)


}

	for (var food in response.hints ){
var currentfood= response.hints[food];
		var newRow = foodTable.insertRow(foodTable.rows.length);
		var NameColumn = newRow.insertCell(0);	
			var CaloriesColumn = newRow.insertCell(1);	
			var ProtinColumn = newRow.insertCell(2);	
			var FatColumn = newRow.insertCell(3);	
			var CHOCDFColumn = newRow.insertCell(4);	
      var FIBTGColumn = newRow.insertCell(5);	

      NameColumn.innerHTML = currentfood.food.label;
					CaloriesColumn.innerHTML = currentfood.food.nutrients.ENERC_KCAL;
			ProtinColumn.innerHTML = currentfood.food.nutrients.PROCNT;
			FatColumn.innerHTML = currentfood.food.nutrients.FAT;
			CHOCDFColumn.innerHTML = currentfood.food.nutrients.CHOCDF;
			FIBTGColumn.innerHTML = currentfood.food.nutrients.FIBTG;
	
  }

});}