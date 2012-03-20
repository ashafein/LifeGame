$(document).ready(function() {
	gen_table(t_rows, t_colls, random_generation);
});

var t_colls = 20;
var t_rows = 20;
var random_generation = true;

var life = new Array();

function start_cycle() {
	for(i = 0; i < t_rows; i++){
		for(j = 0; j < t_colls; j++){
			count
			
		}
	}
};


function new_gen() {
	table = document.getElementById('life_field');
	table.parentNode.removeChild(table);
	gen_table(t_rows, t_colls, random_generation);
};


function gen_table(t_rows, t_colls, random_generation) {
	get_random_gen(random_generation);
	wrapper = document.getElementById('table_wrap');
	table = document.createElement('table');
	table.setAttribute('id','life_field');
	wrapper.appendChild(table);

	for(i = 0; i < t_rows; i++) {
		var tr = document.createElement('tr');
		tr.setAttribute('id','row_'+i);

		for(j = 0; j < t_colls; j++) {
			var td = document.createElement('td');
			td.setAttribute('row',i);
			td.setAttribute('coll',j);

			if(life[i]) {
				if(life[i][j] == 1) {
					td.setAttribute('class','alive');
				}else{ td.setAttribute('class','dead'); };
			}
			tr.appendChild(td);
			table.appendChild(tr);
		}
	};
};


function getRandomInt(val) {
	return Math.floor(Math.random() > val);
};


function get_random_gen(random_generation) {

		if(random_generation) {
		for(i = 0; i < t_rows; i++) {
			life[i] = new Array();
			for(j = 0; j < t_colls; j++) {
				life[i][j] = getRandomInt(0.5);
			}
		}
	}
	return life;
};
