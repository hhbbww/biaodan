/*
* @Author: Thinkpad
* @Date:   2017-09-26 16:48:30
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-27 22:13:12
*/
window.onload =function(){
	let table = document.querySelector('tbody');
	let btns = document.querySelector('.btns');
	let dataobj=new storage();
	let students=dataobj.getData();
	load();
	function load(){
		students.forEach((element,index)=>{
			crea(element,index)
		});
	}
    btns.onclick = function(){
        let objs = {name:"张四",age:11,sex:"nan",jg:"taiyuan"};
        crea(objs,table.childElementCount);
        dataobj.pushs(objs);
    };
	function crea(obj,i) {
		let trss = document.createElement('tr');
		trss.id=i;
		trss.innerHTML=`
				<td type="name">${obj.name}</td>
				<td type="age">${obj.age}</td>
				<td type="sex">${obj.sex}</td>
				<td type="jg">${obj.jg}</td>
				<td class="btn"><button >删除</button></td>
		`;
		table.appendChild(trss);
    }
    //修改
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
				let index=element.parentNode.id;
				let type = element.getAttribute('type');
				let value = newv;
				dataobj.update(index,type,value)
				
			}
			//删除
		}else if(element.nodeName=='BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
			let index = trs.id
			dataobj.delete(index)
			table.innerHTML='';
			load();
		}
	}
	//添加
    //


}