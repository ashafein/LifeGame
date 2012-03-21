	$(document).ready(function() {
	$(function() {
		$( "#slider_columns" ).slider({
			orientation: "vertical",
			value:10,
			min: 3,
			max: 20,
			step: 1,
			slide: function( event, ui ) {
				$( "#amount_columns" ).val( ui.value );
						init_life(t_rows, t_colls);
			}
		});
		$( "#amount_columns" ).val($( "#slider_columns" ).slider( "value" ));

	});

	$(function() {
		$( "#slider_rows" ).slider({
			orientation: "vertical",
			value:10,
			min: 3,
			max: 20,
			step: 1,
			slide: function( event, ui ) {
				$( "#amount_rows" ).val(ui.value );
						init_life(t_rows, t_colls);
			}
		});
		$( "#amount_rows" ).val($( "#slider_rows" ).slider( "value" ) );
	});


	$(function() {
		$( "#slider_timing" ).slider({
			orientation: "vertical",
			value:800,
			min: 300,
			max: 5000,
			step: 200,
			slide: function( event, ui ) {
				$( "#amount_timing" ).val( ui.value );
			}
		});
		$( "#amount_timing" ).val($( "#slider_timing" ).slider( "value" ));

	});

	});

	var t_colls = 10;
	var t_rows = 10;
	var random_generation = false;
	var circle_lives = 900;
	var alive = true;
	var timer;
	var run = 0;

	var life = new Array();
	var neighbours = new Array();


	function start_cycle(run) {
		circle_lives = $( "#amount_timing" ).val();
		console.log(circle_lives);
		if(alive == 0){
			 run = 0;
		}
		if(run != 0) {
		if(timer) clearTimeout(timer);
			timer = setTimeout(function(){one_circle(); start_cycle(run);}, circle_lives);
		} else {
			run = 1;
			alive = true;
		 }
	};

	function stop_cycle(){
		clearTimeout(timer);
	}


	function new_gen(flag) {
		stop_cycle();
		t_colls = $( "#amount_columns" ).val();
		t_rows = $( "#amount_rows" ).val();
		if(table = document.getElementById('life_field')) {
			table.parentNode.removeChild(table);
		}

		if(flag != 0) {
		init_life(t_rows, t_colls);
		if(document.options.randomize.checked == true) {
			random_generation = true;
		} else {
		 random_generation = false;
		 }
		
		get_random_gen(random_generation);
		}
		gen_table(t_rows, t_colls);
	};


	function count_neighbours() {
		alive = false;
		for(i = 0; i < t_rows; i++) {
			for(j = 0; j < t_colls; j++) {
				count= 0;
				if(life[i][j] == 1) {
					alive = true;
				}
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
				};
				neighbours[i][j] = count;
			}
		}
	}

	function one_circle() {
		count_neighbours();
		for(i = 0; i < t_rows; i++) {
			for(j = 0; j < t_colls; j++) {
				if((life[i][j] == 1) && ((neighbours[i][j] > 3) || (neighbours[i][j] < 2))) {
					life[i][j] = 0;
				}
				if((life[i][j] == 0) && (neighbours[i][j] == 3)) {
					life[i][j] = 1;
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
					} else { td.setAttribute('class','dead'); };
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
			for(j = 0; j < t_colls; j++){
				life[i][j] = 0;
				neighbours[i][j] = 0;
			}
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


