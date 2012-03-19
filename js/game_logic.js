$(document).ready(function() {
	t_colls = 10;
	t_rows = 10;
	random_generation = true;

	gen_table(t_rows, t_colls, random_generation);
});


function gen_table(t_rows, t_colls, random_generation){

	var life = new Array();

	if(random_generation){
		for(i = 0; i < t_rows; i++){
			life[i] = new Array();
			for(j = 0; j < t_colls; j++){
				life[i][j] = getRandomInt(0.5);
			}
		}
	}
				console.log(life);

	wrapper = document.getElementById('table_wrap');
	table = document.createElement('table');
	table.setAttribute('class','life_field');
	wrapper.appendChild(table);

	for(i = 0; i < t_rows; i++){
		var tr = document.createElement('tr');
		tr.setAttribute('id','row_'+i);

		for(j = 0; j < t_colls; j++){
			var td = document.createElement('td');
			td.setAttribute('id','cell_'+i+'_'+j);

			if(life[i][j] == 1){
				td.setAttribute('class','alive');
			}else{td.setAttribute('class','dead');};

			tr.appendChild(td);
		}
		table.appendChild(tr);
	};
};

function getRandomInt(val){
	return Math.floor(Math.random() > val);
};
