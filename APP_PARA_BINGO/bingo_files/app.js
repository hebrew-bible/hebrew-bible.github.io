// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Descrip Apple iPhone 8'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Descrip Apple iPhone 8 Plus'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Descrip Apple iPhone X'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


var tableros = 
[
{ 
	num_tbl: 2674,
	filas: [
		[ 11, 26, 40, 46, 61 ],
		[ 10, 27, 43, 57, 63 ],
		[  2, 21,  0, 55, 64 ],
		[  9, 29, 35, 50, 70 ],
		[ 12, 22, 31, 49, 72 ]
	],
	lleno: false
},
{ 
	num_tbl: 2679,
	filas: [
		[  6, 27, 35, 53, 62 ],
		[ 14, 29, 40, 56, 75 ],
		[  4, 22,  0, 50, 69 ],
		[ 11, 18, 34, 51, 61 ],
		[ 13, 25, 33, 58, 73 ]
	],
	lleno: false
},
{ 
	num_tbl: 2678,
	filas: [
		[  3, 23, 36, 53, 63 ],
		[  7, 17, 43, 60, 67 ],
		[  5, 21,  0, 55, 72 ],
		[  6, 27, 35, 59, 70 ],
		[ 15, 29, 41, 57, 64 ]
	],
	lleno: false
},
{ 
	num_tbl: 2673,
	filas: [
		[  6, 25, 31, 49, 64 ],
		[ 11, 23, 34, 60, 68 ],
		[  1, 21,  0, 59, 67 ],
		[  9, 28, 37, 51, 74 ],
		[  2, 17, 38, 48, 70 ]
	],
	lleno: false
},
{ 
	num_tbl: 2675,
	filas: [
		[  3, 23, 39, 55, 71 ],
		[  8, 29, 33, 58, 61 ],
		[  4, 21,  0, 57, 73 ],
		[  1, 27, 43, 53, 62 ],
		[  6, 18, 41, 59, 75 ]
	],
	lleno: false
},
{ 
	num_tbl: 2706,
	filas: [
		[  6, 28, 34, 57, 74 ],
		[ 12, 30, 31, 58, 73 ],
		[ 14, 26,  0, 56, 62 ],
		[ 11, 19, 44, 52, 61 ],
		[  5, 27, 37, 48, 69 ]
	],
	lleno: false
},
{ 
	num_tbl: 2680,
	filas: [
		[  4, 30, 33, 53, 68 ],
		[  1, 29, 39, 52, 67 ],
		[  5, 24,  0, 51, 71 ],
		[ 13, 19, 38, 59, 66 ],
		[  8, 23, 41, 56, 73 ]
	],
	lleno: false
},
{ 
	num_tbl: 2669,
	filas: [
		[ 10, 30, 45, 60, 61 ],
		[ 12, 24, 41, 54, 74 ],
		[  5, 16,  0, 53, 73 ],
		[ 15, 26, 43, 47, 70 ],
		[ 11, 23, 36, 56, 69 ]
	],
	lleno: false
},
{ 
	num_tbl: 2671,
	filas: [
		[  2, 24, 41, 47, 75 ],
		[ 10, 21, 43, 60, 64 ],
		[ 11, 25,  0, 57, 68 ],
		[  9, 28, 31, 53, 72 ],
		[  4, 19, 38, 54, 63 ]
	],
	lleno: false
},
{ 
	num_tbl: 2676,
	filas: [
		[  7, 30, 39, 46, 61 ],
		[  8, 19, 43, 60, 73 ],
		[  3, 26,  0, 55, 66 ],
		[  1, 18, 37, 49, 71 ],
		[  9, 20, 44, 52, 75 ]
	],
	lleno: false
},
{ 
	num_tbl: 2672,
	filas: [
		[  7, 29, 42, 53, 72 ],
		[  2, 25, 40, 51, 61 ],
		[ 14, 23,  0, 48, 66 ],
		[  1, 20, 32, 59, 73 ],
		[  9, 19, 43, 57, 69 ]
	],
	lleno: false
},
{ 
	num_tbl: 2670,
	filas: [
		[  9, 27, 39, 58, 74 ],
		[  4, 20, 43, 54, 71 ],
		[  1, 21,  0, 48, 73 ],
		[  3, 29, 35, 51, 72 ],
		[ 11, 24, 41, 50, 68 ]
	],
	lleno: false
},
{ 
	num_tbl: 2710,
	filas: [
		[ 14, 28, 31, 46, 73 ],
		[ 10, 26, 37, 57, 61 ],
		[ 13, 20,  0, 56, 68 ],
		[  6, 23, 45, 60, 70 ],
		[  8, 16, 39, 50, 67 ]
	],
	lleno: false
},
{ 
	num_tbl: 2708,
	filas: [
		[  8, 24, 37, 47, 65 ],
		[  5, 17, 42, 50, 70 ],
		[ 11, 21,  0, 55, 73 ],
		[  2, 19, 33, 51, 62 ],
		[ 15, 26, 38, 53, 63 ]
	],
	lleno: false
},
];

//	newNode.innerHTML = 'this created div contains class while created!!!';

function borre_tableros() {
	var htm_all_tab = document.getElementById('all_tables');
	htm_all_tab.innerHTML = '\n';

	var htm_all_full = document.getElementById('all_full');
	htm_all_full.innerHTML = '\n';
}

function llene_tableros() {
	get_numeros();
	get_formato();
	
	var htm_all_tab = document.getElementById('all_tables');
	htm_all_tab.innerHTML = '\n';

	var htm_all_full = document.getElementById('all_full');
	htm_all_full.innerHTML = '\n';
	
	var aa;
	for (aa = 0; aa < tableros.length; aa++) {
		create_tablero(tableros[aa]);
	}
}

function create_tablero(inf_tablero) {

	var htm_all_tab = document.getElementById('all_tables');
	var tab_ee = document.createElement('div');
	tab_ee.className = 'block';

	var titulo = document.createElement('div');
	titulo.className = 'row';
	titulo.innerHTML = 'TABLERO NUMERO ' + inf_tablero.num_tbl;
	tab_ee.appendChild(titulo);
	
	var all_row = inf_tablero.filas;
	var aa, bb;
	var is_full = true;
	for (aa = 0; aa < all_row.length; aa++) {
		var row_aa = document.createElement('div');
		row_aa.className = 'row';
		var ff = all_row[aa];
		for (bb = 0; bb < ff.length; bb++) {
			var rr = ff[bb];
			
			var col_bb = document.createElement('div');
			col_bb.className = 'col';
			var is_on = 'color-blue';
			if(formato_lleno[aa][bb]){
				is_on = 'color-red';
				var in_num = numeros_bingo.indexOf(rr);
				if(in_num != -1){
					is_on = 'color-green';
				} else {
					is_full = false;
				}
			}
			var txt = '<a href="#" class="col button button-fill ' + is_on + '">' + rr + '</a>';
			col_bb.innerHTML = txt;
			row_aa.appendChild(col_bb);
		}
		tab_ee.appendChild(row_aa);
	}
	
	if(is_full){
		var htm_all_full = document.getElementById('all_full');
		var txt = htm_all_full.innerHTML;
		htm_all_full.innerHTML = txt + ' <p><h1>' + inf_tablero.num_tbl + ' ESTA LLENO !!!</h1></p>';
	}
	htm_all_tab.appendChild(tab_ee);
}

var BINGO_TOT_NUM = 75;
var BINGO_NUM_ROW = 5;
var BINGO_NUM_COL = 5;

var numeros_bingo = [];

var formato_lleno = 
[
	[ 0, 1, 0, 0, 0 ],
	[ 0, 0, 1, 0, 0 ],
	[ 0, 0, 0, 1, 0 ],
	[ 0, 0, 0, 0, 1 ],
	[ 1, 0, 0, 0, 0 ]
];

function get_col(elem_id){
	var beg = elem_id.lastIndexOf("_") + 1;
	var col_str = elem_id.substring(beg);
	return col_str;
}

function get_row(elem_id){
	var end = elem_id.lastIndexOf("_");
	var pref = elem_id.substring(0, end);
	return get_col(pref);
}

function size_of_screen(){
	var tt = "Total Width: " + screen.width;
	alert(tt);
}

function prt_formato(){
	get_formato();
	
	var aa, bb;
	var tt = '';
	for (aa = 0; aa < formato_lleno.length; aa++) {
		var ff = formato_lleno[aa];
		for (bb = 0; bb < ff.length; bb++) {
			var rr = ff[bb];
			if(rr){
				tt += '1  ';
			} else {
				tt += '-  ';
			}
		}
		tt += '\n';
	} 
	
	alert(tt);
}

function prt_numeros(){
	get_numeros();
	
	var aa;
	var tt = '\n';
	for (aa = 0; aa < numeros_bingo.length; aa++) {
		if(numeros_bingo[aa] != 0){
			tt += numeros_bingo[aa] + '\n';
		} 
	} 
	
	alert(tt);
}

function get_numeros(){
	var aa, bb;
	numeros_bingo[0] = 0;
	for (aa = 1; aa <= BINGO_TOT_NUM; aa++) {
		var elem_id = 'lln_' + aa;
		var ee = document.getElementById(elem_id);
		if(ee.checked){
			numeros_bingo[aa] = aa;
		} else {
			numeros_bingo[aa] = 0;
		}
	} 
}

function borrar_numeros(){
	var aa, bb;
	numeros_bingo = [];
	for (aa = 1; aa <= BINGO_TOT_NUM; aa++) {
		var elem_id = 'lln_' + aa;
		var ee = document.getElementById(elem_id);
		ee.checked = false;
	} 
}

function get_formato(){
	var aa, bb;
	for (aa = 0; aa < BINGO_NUM_ROW; aa++) {
		for (bb = 0; bb < BINGO_NUM_COL; bb++) {
			var elem_id = 'fmt_' + aa + '_' + bb;
			var ee = document.getElementById(elem_id);
			if(ee.checked){
				formato_lleno[aa][bb] = 1;
			} else {
				formato_lleno[aa][bb] = 0;
			}
			if((aa == 2) && (bb == 2)){
				ee.checked = false;
				formato_lleno[aa][bb] = 0;
			}
		}
	} 
}

function set_formato(){
	var aa, bb;
	for (aa = 0; aa < BINGO_NUM_ROW; aa++) {
		for (bb = 0; bb < BINGO_NUM_COL; bb++) {
			var elem_id = 'fmt_' + aa + '_' + bb;
			var ee = document.getElementById(elem_id);
			if(formato_lleno[aa][bb]){
				ee.checked = true;
			} else {
				ee.checked = false;
			}
		}
	} 
}

function set_all_formato(val){
	var aa, bb;
	for (aa = 0; aa < BINGO_NUM_ROW; aa++) {
		for (bb = 0; bb < BINGO_NUM_COL; bb++) {
			var elem_id = 'fmt_' + aa + '_' + bb;
			var ee = document.getElementById(elem_id);
			ee.checked = val;
		}
	} 
}

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

