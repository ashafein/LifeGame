$(document).ready(function() {
	t_width = 10;
	t_height = 10;

	gen_row(t_height);
});

t_width = 10;
t_height = 10;

function gen_row(t_height){

	document.write("<table class='life_field'>");
	
	for(i = 0; i < t_height; i++){
		document.write("<tr id='row_"+i+"'>");
		gen_cell(t_width, i);
		document.write("</tr>");
	}
	document.write("</table>");
}

function gen_cell(t_width, i){
	for(j = 0; j < t_width; j++){
		document.write("<td  id='cell_"+i+"_"+j+"'></td>");
	}
}
document.write(t_width);
document.write(t_height);
