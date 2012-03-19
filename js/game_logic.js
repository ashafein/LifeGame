$(document).ready(function() {
	t_colls = 10;
	t_rows = 10;
	random_generation = true;

	gen_table(t_rows, t_colls, random_generation);
});


function gen_table(t_rows, t_colls, random_generation){

	life = new Array(t_rows, t_colls);

	if(random_generation){
		for(i = 0; i < t_rows; i++){
			for(j = 0; j < t_colls; j++){
				h = getRandomInt(0, 1) ;
				console.log(h);
				life[i,j] = getRandomInt(0, 1);
			}
		}
	}

	wrapper = document.getElementById('table_wrap');
	table = document.createElement('table');
	table.setAttribute('class', 'life_field');
	wrapper.appendChild(table);

	for(i = 0; i < t_rows; i++){
		var tr = document.createElement('tr');
		tr.setAttribute('id','row_'+i);

		for(j = 0; j < t_colls; j++){
			var td = document.createElement('td');
			td.setAttribute('id','cell_'+i+'_'+j);
			td.setAttribute('class', 'alive');
			tr.appendChild(td);
		};
		table.appendChild(tr);
	};
};

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
