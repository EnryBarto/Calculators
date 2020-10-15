/* Create variables */

var A="", B = "", x = 0, R = 0, op = 0, Rans = 0;

/* Numbers */

function num1(){
	if(x==0){
		A = A + "1";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "1";
		document.getElementById("display").value = B;
	}
}
function num2(){
	if(x==0){
		A = A + "2";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "2";
		document.getElementById("display").value = B;
	}
}function num3(){
	if(x==0){
		A = A + "3";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "3";
		document.getElementById("display").value = B;
	}
}function num4(){
	if(x==0){
		A = A + "4";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "4";
		document.getElementById("display").value = B;
	}
}function num5(){
	if(x==0){
		A = A + "5";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "5";
		document.getElementById("display").value = B;
	}
}function num6(){
	if(x==0){
		A = A + "6";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "6";
		document.getElementById("display").value = B;
	}
}function num7(){
	if(x==0){
		A = A + "7";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "7";
		document.getElementById("display").value = B;
	}
}function num8(){
	if(x==0){
		A = A + "8";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "8";
		document.getElementById("display").value = B;
	}
}function num9(){
	if(x==0){
		A = A + "9";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "9";
		document.getElementById("display").value = B;
	}
}function num0(){
	if(x==0){
		A = A + "0";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "0";
		document.getElementById("display").value = B;
	}
}function num00(){
	if(x==0){
		A = A + "00";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + "00";
		document.getElementById("display").value = B;
	}
}
function point(){
	if(x==0){
		A = A + ".";
		document.getElementById("display").value = A;
	} 
	else if(x==1){
		B = B + ".";
		document.getElementById("display").value = B;
	}
}

/* Operators */

function C(){
	A = "",	B = "", x = 0, R = 0, op = 0;
	document.getElementById("display").value = "";
}
function opadd(){x = 1; op=1; document.getElementById("display").value = "+";}
function opsub(){x = 1; op=2; document.getElementById("display").value = "-";}
function opmol(){x = 1; op=3; document.getElementById("display").value = "x";}
function opdiv(){x = 1; op=4; document.getElementById("display").value = "/";}
function opexp(){x = 1; op=5; document.getElementById("display").value = "^";}
function oprad(){
	if (A >= 0){
		A = A * 1;
		R = Math.sqrt(A);
		document.getElementById("display").value = R;
		Rans = R, A = "", B = "", x = 0, op = 0, R = 0;
	}
	else if (A < 0){
		R = "Radq. num. neg.";
		document.getElementById("display").value = R;
	}
}
function piumeno(){
	if(x == 0){
		A = A * (-1);
		document.getElementById("display").value = A;
	}
	else if(x == 1){
		B = B * (-1);
		document.getElementById("display").value = B;
	}
}
function Ans(){
	if(x == 0){
		A = Rans;
		document.getElementById("display").value = A;
	}
	else if(x == 1){
		B = Rans;
		document.getElementById("display").value = B;
	}
}

/* Caluclate! */

function opexe(){
	A=A*1;
	B=B*1;
	if ( x == 0){
		R = A;
	}
	if (op==1){
		R = A + B;
	}
	else if (op==2){
		R = A - B;
	}
	else if (op==3){
		R = A * B;
	}
	else if (op==4){
		if (A != 0) {
			if(B != 0){
				R = A / B;
			}
			else if (B == 0){
				R = "Imp. div. n per 0";
			}

		}
		else if (A==0){
			if (B == 0) {
	            R = 0;
			} 
			else if (B != 0){
				R = A / B;
			}
		}
	}
	else if (op==5){
		R = Math.pow(A, B);
	}

	document.getElementById("display").value = R;

	Rans = R, A = "", B = "", x = 0, op = 0, R = 0;
}