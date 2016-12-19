"use strict;"

$(function () { $('#jstree_demo_div').jstree(); });

$('#jstree_demo_div').on("changed.jstree", function (e, data) {
  console.log(data.selected);
});

<<<<<<< HEAD
$('button').on('click', function () {
=======
// TODO: Error jstree is not a function
$('#buttonTree').on('click', function () {
	console.log("es läuft");
>>>>>>> master
  $('#jstree').jstree(true).select_node('child_node_1');
  $('#jstree').jstree('select_node', 'child_node_1');
  $.jstree.reference('#jstree').select_node('child_node_1');
});