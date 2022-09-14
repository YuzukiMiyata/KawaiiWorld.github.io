var hpnm052_prj_no = "21";
var hpnm052_prj_nm = "hpnm052";
var hpnm052_ball_num = 30;
var hpnm052_ball_sbt_num = 11;

var hpnm052_browser = 0;
if( window.opera ) {
	hpnm052_browser = 1; // OP
}
else if( document.all ) {
	hpnm052_browser = 2; // IE
}
else if( document.getElementById ) {
	hpnm052_browser = 3; // N6
}
else if( document.layers ) {
	hpnm052_browser = 4; // N4
}

var hpnm052_i, hpnm052_n;
var hpnm052_obj;
var hpnm052_img;

var hpnm052_preimg = new Array();
hpnm052_preimg[0] = new Image();
hpnm052_preimg[0].src = "https://lh3.googleusercontent.com/-RqxLppr9LB0/YxvjHtoIS-I/AAAAAAAAA9Q/g9qr3alND9QmQFw4X-6MYrG5CUfof3F9QCNcBGAsYHQ/s1600/1662771925663657-0.png";
hpnm052_preimg[1] = new Image();
hpnm052_preimg[1].src = "https://lh3.googleusercontent.com/-IIHUDQf-HaM/YxvjGrsWVsI/AAAAAAAAA9M/EhnLyVyws0UC7Z1dNwkd27jc0_jqRlCQQCNcBGAsYHQ/s1600/1662771921391441-1.png";
hpnm052_preimg[2] = new Image();
hpnm052_preimg[2].src = "https://lh3.googleusercontent.com/-4IKiyOKmK2I/YxvjFYFMJVI/AAAAAAAAA9I/hhSgsqeFJ5s5kZZUK-50JR-EyVi9gvxVACNcBGAsYHQ/s1600/1662771917166739-2.png";
hpnm052_preimg[3] = new Image();
hpnm052_preimg[3].src = "https://lh3.googleusercontent.com/-RHZ7xBgjeW0/YxvjEXl_pVI/AAAAAAAAA9E/7iZisPSV7GUQteo5EQJwFRuV2L3pMQdNwCNcBGAsYHQ/s1600/1662771913219791-3.png";
hpnm052_preimg[4] = new Image();
hpnm052_preimg[4].src = "https://lh3.googleusercontent.com/-96ymcualc5U/YxvjDeWiU0I/AAAAAAAAA9A/gg6MwgaZTkQgOWj347iIq600PvZ2HTgMwCNcBGAsYHQ/s1600/1662771909400633-4.png";
hpnm052_preimg[5] = new Image();
hpnm052_preimg[5].src = "https://lh3.googleusercontent.com/-56zup6mIs_E/YxvjCkgZFqI/AAAAAAAAA88/8hOGmmX0Fckm77kiGWl7L3XIaRCyrAwiwCNcBGAsYHQ/s1600/1662771905698709-5.png";
hpnm052_preimg[6] = new Image();
hpnm052_preimg[6].src = "https://lh3.googleusercontent.com/-rT0tJ8cxqiU/YxvjBoJg4pI/AAAAAAAAA84/0HzECkti4v8ppsH6Jtfs30FAWTFMXB8oQCNcBGAsYHQ/s1600/1662771902074646-6.png";
hpnm052_preimg[7] = new Image();
hpnm052_preimg[7].src = "https://lh3.googleusercontent.com/-7nhBEuHfMDY/YxvjAlsPdcI/AAAAAAAAA80/z3VZp67GBE4hTudLLRh68oblmgD7hBHAgCNcBGAsYHQ/s1600/1662771898074369-7.png";
hpnm052_preimg[8] = new Image();
hpnm052_preimg[8].src = "https://lh3.googleusercontent.com/-Yq74ccLo4AA/Yxvi_l_3W9I/AAAAAAAAA8w/32ifRumHJc0sxZMaYIl8nRyT8-GDtL7TQCNcBGAsYHQ/s1600/1662771894261727-8.png";
hpnm052_preimg[9] = new Image();
hpnm052_preimg[9].src = "https://lh3.googleusercontent.com/-EwdnIiTxCLc/Yxvi-51DlEI/AAAAAAAAA8s/COS-0ILYkC02VwZQpV7Tqy9MEHaloAGOACNcBGAsYHQ/s1600/1662771890338390-9.png";
hpnm052_preimg[10] = new Image();
hpnm052_preimg[10].src = "https://lh3.googleusercontent.com/-HBqzD8SwoUY/Yxvi9q14xrI/AAAAAAAAA8o/BtErzJTp3FAyXYk4-AWW2gNy-hxTb6xgwCNcBGAsYHQ/s1600/1662771885313720-10.png";

for(hpnm052_i = 1; hpnm052_i <= hpnm052_ball_num; hpnm052_i++) {
	var hpnm052_elem = document.createElement('div'); 
	hpnm052_elem.id = hpnm052_prj_nm + '_ball' + hpnm052_i; 
	hpnm052_elem.innerHTML = '<img id="' + hpnm052_prj_nm + '_ball_img' + hpnm052_i + '" style="border:0;margin:0;">'; 
	hpnm052_elem.style.position = 'absolute'; 
	hpnm052_elem.style.visibility = 'hidden';
	hpnm052_elem.style.margin = '0px';
	hpnm052_elem.style.padding = '0px';
	var hpnm052_objBody = document.getElementsByTagName("body").item(0); 
	hpnm052_objBody.appendChild(hpnm052_elem); 
}

function hpnm052_getViewTop() {
	if( window.scrollY ) return window.scrollY;
	if( window.pageYOffset ) return window.pageYOffset;
	if( document.documentElement && document.documentElement.scrollTop ) {
		return document.documentElement.scrollTop;
	}
	else if( document.body && document.body.scrollTop ) {
		return document.body.scrollTop;
	}
	return 0;
}

function hpnm052_getViewLeft() {
	if( window.scrollX ) return window.scrollX;
	if( window.pageXOffset ) return window.pageXOffset;
	if( document.documentElement && document.documentElement.scrollLeft ) {
		return document.documentElement.scrollLeft;
	}
	else if( document.body && document.body.scrollLeft ) {
		return document.body.scrollLeft;
	}
	return 0;
}

function hpnm052_getViewHeight() {
	if( window.innerHeight ) return window.innerHeight; 
	if( document.documentElement && document.documentElement.clientHeight ) {
		return document.documentElement.clientHeight;
	}
	else if( document.body && document.body.clientHeight ) {
		return document.body.clientHeight;
	}
	return 0;
}

function hpnm052_getViewWidth() {
	if( window.innerWidth ) return window.innerWidth; 
	if( document.documentElement && document.documentElement.clientWidth ) {
		return document.documentElement.clientWidth;
	}
	else if( document.body && document.body.clientWidth ) {
		return document.body.clientWidth;
	}
	return 0;
}

function hpnm052_getViewBottom() {
	return hpnm052_getViewTop() + hpnm052_getViewHeight();
}

function hpnm052_getViewRight() {
	return hpnm052_getViewLeft() + hpnm052_getViewWidth();
}

function hpnm052_getRandomNum(num) {
	return Math.floor( Math.random() * num );
}

function hpnm052_setOpacity(elem, op){   
	elem.style.filter = 'alpha(opacity=' + (op * 100) + ')';   
	elem.style.MozOpacity = op;   
	elem.style.opacity = op;   
}
function hpnm052_getElement(id) {
	switch( hpnm052_browser ) {
		case 1:	// OP
			return document.getElementById(id);
			break;
		case 2:	// IE
			return document.all[id];
			break;
		case 3:	// N6
			return document.getElementById(id);
			break;
		case 4:	// N4
			return document[id];
			break;
	}
	return null;
}

var hpnm052_action = new Array();
var hpnm052_actioncnt = new Array();
var hpnm052_balltop = new Array();
var hpnm052_ballleft = new Array();
var hpnm052_balltype = new Array();
var hpnm052_ballspeed = new Array();
var hpnm052_ballmovelr = new Array();

for(hpnm052_i = 1; hpnm052_i <= hpnm052_ball_num; hpnm052_i++) {
	hpnm052_action[hpnm052_i] = 0;
}

function hpnm052_fire() {

	var hpnm052_viewtop = hpnm052_getViewTop() - 30;
	var hpnm052_viewbottom = hpnm052_getViewBottom() - 30;
	var hpnm052_viewleft = hpnm052_getViewLeft() + 40;
	var hpnm052_viewright = hpnm052_getViewRight() - 40;

	for(hpnm052_i = 1; hpnm052_i <= hpnm052_ball_num; hpnm052_i++) {

		hpnm052_obj = hpnm052_getElement(hpnm052_prj_nm + '_ball'+hpnm052_i);
		hpnm052_img = hpnm052_getElement(hpnm052_prj_nm + '_ball_img'+hpnm052_i);

		switch( hpnm052_action[hpnm052_i] ) {
			case 0:

				if( hpnm052_action[hpnm052_i] == 0 && hpnm052_getRandomNum( 60 ) == 0 ) {
					hpnm052_action[hpnm052_i] = 1;
					hpnm052_actioncnt[hpnm052_i] = 0;
					hpnm052_balltop[hpnm052_i] = hpnm052_viewtop;
					hpnm052_ballleft[hpnm052_i] = hpnm052_viewleft + hpnm052_getRandomNum( hpnm052_viewright - hpnm052_viewleft );
					hpnm052_ballspeed[hpnm052_i] = hpnm052_getRandomNum( 3 ) + 2;
					hpnm052_ballmovelr[hpnm052_i] = hpnm052_getRandomNum( 2 );
					
					hpnm052_balltype[hpnm052_i] = hpnm052_getRandomNum( hpnm052_ball_sbt_num );
					hpnm052_img.src = hpnm052_preimg[ hpnm052_balltype[hpnm052_i] ].src;
					hpnm052_obj.style.visibility = 'visible';
					hpnm052_obj.style.top = hpnm052_balltop[hpnm052_i] + 'px';
					hpnm052_obj.style.left = hpnm052_ballleft[hpnm052_i] + 'px';
				}
				break;

			case 1:
			
				hpnm052_balltop[hpnm052_i] += hpnm052_ballspeed[hpnm052_i];
				hpnm052_ballleft[hpnm052_i] += ( hpnm052_ballmovelr[hpnm052_i] == 0 ? 1 : -1 ) * 1;

				if( hpnm052_viewtop < hpnm052_balltop[hpnm052_i] && hpnm052_viewbottom > hpnm052_balltop[hpnm052_i] && hpnm052_viewright > hpnm052_ballleft[hpnm052_i] ) {
					hpnm052_obj.style.top = hpnm052_balltop[hpnm052_i] + 'px';
					hpnm052_obj.style.left = hpnm052_ballleft[hpnm052_i] + 'px';
					if( hpnm052_actioncnt[hpnm052_i] > 5 ) {
						hpnm052_ballmovelr[hpnm052_i] = ( hpnm052_ballmovelr[hpnm052_i] == 0 ? 1 : 0 );
						hpnm052_actioncnt[hpnm052_i] = 0;
					}
					else {
						hpnm052_actioncnt[hpnm052_i]++;
					}
				}
				else {
					hpnm052_obj.style.visibility = 'hidden';
					hpnm052_obj.style.top = '0px';
					hpnm052_obj.style.left = '0px';
					hpnm052_action[hpnm052_i] = 0;
				}

				break;
			
		}
	}
	
	setTimeout("hpnm052_fire()",50);

}
hpnm052_fire();