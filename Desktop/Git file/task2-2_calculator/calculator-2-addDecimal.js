let result = document.getElementById('totalAnswerView');
let mode = "integer_mode";
//mode変数 -> 小数点の不正入力を制御します。(整数入力中は'integer_mode'、小数点値を入力中は'decimal_mode'と定義) 

//1〜9の数字ボタン
function clickNumber(target){
	let BtnNumber = target.innerHTML;
	
	if(result.innerHTML == "0"){
		result.innerHTML = BtnNumber;
	}else{
		result.innerHTML += BtnNumber;
	}
}

//四則演算記号ボタン
function clickSymbol(target){
	let BtnSymbol = target.innerHTML;

	if(result.innerHTML.slice(-1) == "+" ||
	   result.innerHTML.slice(-1) == "-" || 
		 result.innerHTML.slice(-1) == "*" || 
		 result.innerHTML.slice(-1) == "/" || 
		 result.innerHTML.slice(-1) == "." || 
		 result.innerHTML == "0"){
		;//何もしない
	}else{
		result.innerHTML += BtnSymbol;
		mode = "integer_mode";
	}
}

//0ボタン
function clickZero(target){
	let BtnZero = target.innerHTML;

	if(result.innerHTML == "0"){
		;//何もしない
	}else if(
	 result.innerHTML.slice(-1) == "+" || 
	 result.innerHTML.slice(-1) == "-" || 
	 result.innerHTML.slice(-1) == "*" || 
	 result.innerHTML.slice(-1) == "/"){
	 result.innerHTML += `${BtnZero}` + ".";
	 mode = "decimal_mode";
	}else{	
	 result.innerHTML += BtnZero;
	}
}

//00ボタン
function clickDbZero(target){
	let BtnDbZero = target.innerHTML;

	if(result.innerHTML.slice(-1) == "+" || 
		 result.innerHTML.slice(-1) == "-" || 
		 result.innerHTML.slice(-1) == "*" || 
		 result.innerHTML.slice(-1) == "/" || 
		 result.innerHTML == "0"){
		;//何もしない
	}else{
		result.innerHTML += BtnDbZero;
	}
}

// . ボタン
function clickColon(target){
	let BtnColon = target.innerHTML;

	if(result.innerHTML.slice(-1) == "+" || 
	   result.innerHTML.slice(-1) == "-" || 
		 result.innerHTML.slice(-1) == "*" || 
		 result.innerHTML.slice(-1) == "/" || 
		 result.innerHTML.slice(-1) == "." || 
		 mode === "decimal_mode"){
		;//何もしない
		 }else if(result.innerHTML == "0"){
			result.innerHTML += BtnColon;	 
			mode = "decimal_mode"
		 }else if(result.innerHTML.slice(-1) == "0"){
			result.innerHTML += "0" + `${BtnColon}`;
			mode = "decimal_mode"
		 }else if(mode === "integer_mode"){
			result.innerHTML += BtnColon;
			mode = "decimal_mode"
	} 
}

// = ボタン
function totalValue(){
  result.innerHTML = eval(result.innerHTML);
	mode = "integer_mode";
}

// AC ボタン
function clearValue(){
  result.innerHTML = 0;
	mode = "integer_mode";
}