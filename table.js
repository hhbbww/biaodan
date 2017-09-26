/*
* @Author: Thinkpad
* @Date:   2017-09-26 16:48:30
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-26 18:08:47
*/
window.onload =function(){
	let table = document.querySelector('tbody');
	let students =[
		{name:'张三',age:18,sex:'男',jg:'山西太原'},
        {name:'李四',age:18,sex:'男',jg:'山西长治'},
        {name:'王五',age:18,sex:'男',jg:'山西大同'},
        {name:'杜六',age:18,sex:'女',jg:'山西运城'},
        {name:'宋七',age:18,sex:'女',jg:'山西晋城'},
        {name:'许八',age:18,sex:'女',jg:'山西吕梁'},
        {name:'陈九',age:18,sex:'女',jg:'山西榆次'}
	];
	students.forEach(element=>{
		crea(element)
	});
	function crea(obj) {
		let trss = document.createElement('tr');
		trss.innerHTML=`
				<td>${obj.name}</td>
				<td>${obj.age}</td>
				<td>${obj.sex}</td>
				<td>${obj.jg}</td>
				<td class="btn"><button >删除</button></td>
		`
		table.appendChild(trss);
    }
	table.ondblclick =function(e){
		let element = e.target;
		if(element.nodeName=='TD' && element.className != 'btn'){
			let oldv = element.innerText;
			element.innerText=null;
			let inputs =document.createElement('input');
			inputs.value = oldv;
			element.appendChild(inputs);
			inputs.onblur=function(){
				let newv = this.value;
				element.removeChild(inputs);
				element.innerText= newv;
				inputs=null;
				if(newv){
					element.innerText= newv;
				}else{
					element.innerText=oldv;
				}
			} 
		}else if(element.nodeName=='BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}


}