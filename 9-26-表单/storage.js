class storage{
    constructor(){
        this.data=[
            {name:'张三',age:18,sex:'男',jg:'山西太原'},
            {name:'李四',age:18,sex:'男',jg:'山西长治'},
            {name:'王五',age:18,sex:'男',jg:'山西大同'},
            {name:'杜六',age:18,sex:'女',jg:'山西运城'},
            {name:'宋七',age:18,sex:'女',jg:'山西晋城'},
            {name:'许八',age:18,sex:'女',jg:'山西吕梁'},
            {name:'陈九',age:18,sex:'女',jg:'山西榆次'}
            ];
    }
    init(){
        localStorage.setItem('students',JSON.stringify(this.data));
    }
    getData(){
        let data =localStorage.getItem('students');
        if(!data){
            this.init();
        }
        return this.data= JSON.parse(localStorage.getItem('students'));
    }
    update(row,type,value){
        let data =this.getData();
        data[row][type]=value;
        this.save();
    }
    delete(index){
        this.data.splice(index,1);
        this.save();
    }
    pushs(obj){
        this.data.push(obj);
        this.save()
    }
    save(){
        localStorage.setItem('students',JSON.stringify(this.data))
    }



}