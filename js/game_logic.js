	$(document).ready(function() {
		new_gen();
	});


	var t_colls = 10;
	var t_rows = 10;
	var random_generation = true;
	var life = new Array();
	var neighbours = new Array();
	var circle_lives = 3000;
	var alive = 1;
	var timer;
	var run = 0;

	function start_cycle(run) {
		if(alive == 0) run = 0;
		console.log(alive);
		if(run != 0) {
		if(timer) clearTimeout(timer);
			timer = setTimeout(function(){one_circle(); start_cycle(run);}, 900);
		}
	};

	function stop_cycle(){
		clearTimeout(timer);
	}


	function new_gen(flag) {
		if(table = document.getElementById('life_field')) {
			table.parentNode.removeChild(table);
		}
		if(flag != 0) {
		init_life(t_rows, t_colls);
		get_random_gen(random_generation);
		}
		gen_table(t_rows, t_colls);
	};


	function count_neighbours() {
		alive = 0;
		for(i = 0; i < t_rows; i++) {
			for(j = 0; j < t_colls; j++) {
				count= 0;
				if(life[i][j] == 1) {
					alive++;
					if((life[i+1] != undefined) && (life[i+1][j-1] != undefined)) {
						count += life[i+1][j-1];
					};
					if(life[i+1] != undefined) {
						count += life[i+1][j];
					};
					if((life[i+1] != undefined) && (life[i+1][j+1] != undefined)) {
						count += life[i+1][j+1];
					};
					if(life[i][j-1] != undefined) {
						count += life[i][j-1];
					};
					if(life[i][j+1] != undefined) {
						count += life[i][j+1];
					};
					if((life[i-1] != undefined) && (life[i-1][j-1] != undefined)) {
						count += life[i-1][j-1];
					};
					if(life[i-1] != undefined) {
						count += life[i-1][j];
					};
					if((life[i-1] != undefined) && (life[i-1][j+1] != undefined)) {
						count += life[i-1][j+1];
					}
				} else { 
					 count = 10;
					 }
				neighbours[i][j] = count;
			}
		}
	}

	function one_circle() {
		count_neighbours()
		for(i = 0; i < t_rows; i++) {
			for(j = 0; j < t_colls; j++) {
				if((neighbours[i][j] > 3) || (neighbours[i][j] < 2)) {
					life[i][j] = 0;
				}
			}
		}
		new_gen(0);
	}

	function gen_table(t_rows, t_colls){
		wrapper = document.getElementById('table_wrap');
		table = document.createElement('table');
		table.setAttribute('id','life_field');
		wrapper.appendChild(table);
		for(i = 0; i < t_rows; i++) {
			var tr = document.createElement('tr');
			tr.setAttribute('id','row_'+i);

			for(j = 0; j < t_colls; j++) {
				var td = document.createElement('td');
				td.row = i;
				td.coll = j;

				if(life[i]) {
					if(life[i][j] == 1) {
						td.setAttribute('class','alive');
					}else{ td.setAttribute('class','dead'); };
				}
				tr.appendChild(td);
				table.appendChild(tr);
			}
		};
		
		$('td').click(function() {
			life[this.row][this.coll] = !life[this.row][this.coll];
				$(this).toggleClass('alive');
				$(this).toggleClass('dead');
		});
		
	};


	function getRandomInt(val) {
		return Math.floor(Math.random() > val);
	};

	function init_life(t_rows, t_colls){
		for(i = 0; i < t_rows; i++) {
			life[i] = new Array();
			neighbours[i] =new Array();
		}
	};


	function get_random_gen(random_generation) {
			if(random_generation) {
			for(i = 0; i < t_rows; i++) {
				for(j = 0; j < t_colls; j++) {
					life[i][j] = getRandomInt(0.5);
				}
			}
		}
		return life;
	};


