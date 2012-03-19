$(document).ready(function() {
	t_colls = 10;
	t_rows = 10;

	gen_rows(t_rows, t_colls);
});

function gen_rows(t_rows, t_colls){
	wrapper = document.getElementById('table_wrap');
	table = document.createElement("table");
	wrapper.appendChild(table);

	row=null;
	for(i = 0; i < t_rows; i++){
		var tr = document.createElement('tr');
		tr.setAttribute('id','row_'+i);
		for(j = 0; j < t_colls; j++){
			var td = document.createElement('td');
			td.setAttribute('id','cell_'+i+'_'+j);
			tr.appendChild(td);
		};
		table.appendChild(tr);
	};

};

