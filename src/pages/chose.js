 import React, { Component } from 'react';
 import Select from 'react-select'
 

 class Chose extends Component
 {


 
  constructor(props) {
    super(props);
    this.mass = [

      {ra: '80; 63; 50; 40',rz:'320; 250; 200; 160',baz:'8,0'},
      {ra: '40; 32; 25; 20',rz:'160; 125; 100; 80',baz:'8,0'},
      {ra: '20; 16,0;12,5; 10,0',rz:'160; 125; 100; 80',baz:'8,0'},
      {ra: '10,0; 8,0; 6,3; 5,0',rz:'40; 32; 25; 20',baz:'2,5'},
      {ra: '5,0; 4,0; 3,2; 2,5',rz:'20; 16; 12,5; 10,0',baz:'2,5'},
      {ra: '2,5; 2,0; 1,6; 1,25',rz:'10,0; 8,0; 6,3',baz:'0,8'},
    ];
     
  this.options = [
    { value: '0', label: 'Піскоструменева обробка, кування в штампах, відрізання, лиття в кокіль, лиття під тиском.	' },
    { value: '1', label: 'Кування в штампах, точіння чорнове, попереднє стругання, попереднє фрезерування, лиття в кокіль, лиття під тиском	' },
    { value: '2', label: 'Кування в штампах, свердління, чорнове зенкерування, чорнове та чистове точіння, стругання, лиття в кокіль та під тиском	' },
    { value: '3', label: 'Свердління, чорнове та чистове зенкерування, чорнове та чистове точіння, стругання, вальцювання, лиття в кокіль та під тиском' },
    { value: '4', label: 'Протягування, чистове точіння, зенкерування, свердління, стругання, вальцювання, високоточне литво, попереднє шліфування' },
    { value: '5', label: 'Чистове зенкерування, розвертування, протягування, чистове та тонке точіння, чистове стругання, попереднє та чистове шліфування,шабрування, вальцювання, прецизійне литво' },
  ]
 
 
    this.state = {
        ra: "0",
        rz: "0",
        baz: "0",
    }
  }

  updateContent = e => {
      this.setState({ ra: this.mass[e.value].ra,rz:this.mass[e.value].rz,baz:this.mass[e.value].baz});
 
  }

  ChangStyle = e => {
    if( document.getElementById('1').classList.contains('d-none')){
      document.getElementById('1').classList.remove("d-none");
      document.getElementById('2').classList.remove("d-none");
      document.getElementById('3').classList.add("d-none");
      document.getElementById('4').classList.add("d-none");
    }
    else{
      document.getElementById('1').classList.add("d-none");
      document.getElementById('2').classList.add("d-none");
      document.getElementById('3').classList.remove("d-none");
      document.getElementById('4').classList.remove("d-none");
    }
 
}

  render (){
    return(

  <div class="container main" >
   
       <div class="row " >
       <div class="col ">
        <br/>
    <h1>Вибір параметрів шорсткості</h1>
    <p>При виборі шорсткості поверхонь деталей треба знати їх функціональне призначення та конструктивні особливості. Наприклад, для поверхонь тертя відповідальних деталей установлюють допустимі значення Ra (або Rz), Rmax і tp, а також напрямок нерівностей. Для поверхонь циклічно навантажених деталей установлюють Rmax, Sm і S. Слід враховувати, що параметр Ra дає повнішу оцінку шорсткості, ніж Rz, тому що для його визначення вимірюють і сумують величини більшого числа точок дійсного профілю, тоді як при визначенні параметра Rz вимірюють тільки величину п'яти впадин і п'яти виступів. В окремих випадках встановлюють вимоги до напрямку нерівностей. При цьому слід враховувати, що найменший коефіцієнт тертя та знос деталей, що труться буде, якщо напрямок руху не збігається з напрямком нерівностей. Таке можна отримати при довільному напрямку нерівностей, що утворюються при хонінгуванні чи суперфінішуванні.</p>
    <h1>Залежність шорсткості поверхні від виду обробки</h1>
     <br/>
     <table  class="text-center  tb2 " id='4'>
     <thead class="text2" >
    <tr>
      <th scope="col">Види обробки при формоутворенні</th>
      <th scope="col">Ra, мкм</th>
      <th scope="col">Rz, мкм</th>
      <th scope="col">Базова довжина, мм</th>
    </tr>
  </thead>
  <tbody class="text1">
  <tr>
      <td class="select">  <Select  options={this.options}  value={this.options.find(obj => obj.value === this.selectedValue)} onChange={this.updateContent} /></td>
      <td>{this.state.ra}</td>
      <td>{this.state.rz}</td>
      <td>{this.state.baz}</td>
  </tr>
  </tbody>
     </table >
     <button type="button" id='3' class="btn btn-secondary btn-lg" onClick={this.ChangStyle}>Відобразити таблицею</button>
     
    <table id='2' class="table-bordered tb1 text-center d-none">
  <thead class="text2" >
    <tr>
      <th scope="col">Види обробки при формоутворенні</th>
      <th scope="col">Ra, мкм</th>
      <th scope="col">Rz, мкм</th>
      <th scope="col">Базова довжина, мм</th>
    </tr>
  </thead>
  <tbody  class="text2">
    <tr>
      <td>Піскоструменева обробка, кування в штампах, відрізання, лиття в кокіль, лиття під тиском.</td>
      <td>80; 63; <b>50</b>; 40</td>
      <td>320; 250; 200; 160</td>
      <td  >8,0</td>
    </tr>
    <tr>
      <td>Кування в штампах, точіння чорнове, попереднє стругання, попереднє фрезерування, лиття в кокіль, лиття під тиском</td>
      <td>40; 32;  <b>25</b>; 20</td>
      <td>160; 125; 100; 80</td>
      <td  >8,0</td>
    </tr>
    <tr>
      <td>Кування в штампах, свердління, чорнове зенкерування, чорнове та чистове точіння, стругання, лиття в кокіль та під тиском</td>
      <td>20; 16,0;<b>12,5</b>; 10,0</td>
      <td>160; 125; 100; 80</td>
      <td  >8,0</td>
    </tr>
    <tr>
      <td>Свердління, чорнове та чистове зенкерування, чорнове та чистове точіння, стругання, вальцювання, лиття в кокіль та під тиском</td>
      <td>10,0; 8,0;<b> 6,3</b>; 5,0    </td>
      <td>40; 32; 25; 20</td>
      <td  >2,5</td>
    </tr>
    <tr>
      <td>Протягування, чистове точіння, зенкерування, свердління, стругання, вальцювання, високоточне литво, попереднє шліфування</td>
      <td>5,0; 4,0; <b>3,2</b>; 2,5    </td>
      <td>20; 16; 12,5; 10,0</td>
      <td  >2,5</td>
    </tr>
    <tr>
      <td>Чистове зенкерування, розвертування, протягування, чистове та тонке точіння, чистове стругання, попереднє та чистове шліфування,шабрування, вальцювання, прецизійне литво</td>
      <td >2,5; 2,0; <b>1,6</b>; 1,25</td>
      <td >10,0; 8,0; 6,3</td>
      <td >0,8</td>
    </tr>
    <tr>
      <td>Чистове зенкерування, нормальне та точне розвертування, протягування, чистове та тонке точіння, тонке фрезерування, чистове шліфування, прецизійне литво</td>
      <td >1,25; 1,00; <b>0,80</b>; 0,63</td> 
      <td  >6,3; 5,0, 4,0; 3,2</td> 
      <td >0,8</td>
    </tr>
    <tr>
      <td>Точне та тонке розвертування, протягування, чистове та тонке точіння, хонінгування, шабрування, вальцювання, прецизійне литво</td>
      <td >0,63; 0,50; <b>0,40</b>; 0,32</td> 
      <td >3,2; 2,5; 2,0; 1,60</td> 
      <td >0,8</td>
    </tr>
    <tr>
      <td>Точне та тонке розвертування, протягування, тонке точіння, чистове та тонке шліфування, притирання, хонінгування, прецизійне литво пластмас</td>
      <td >0,32; 0,25;<b> 0,20</b>; 0,160</td> 
      <td >1,60; 1,25; 1,00; 0,80</td> 
      <td >0,25</td>
    </tr>
    <tr>
      <td>Тонке розвертування, тонке шліфування, притирання, хонінгування, прецизійне литво пластмас</td>
      <td >0,160; 0,125; <b>0,10</b>; 0,080</td> 
      <td >0,80; 0,63; 0,50; 0,40</td> 
      <td >0,25</td>
    </tr>
    <tr>
      <td>Полірування, притирання, дзеркальне хонінгування, прецизійне литво пластмас</td>
      <td >0,080; 0,063;<b> 0,050</b>; 0,040</td> 
      <td >0,40; 0,32; 0,25; 0,20</td> 
      <td >0,25</td>
    </tr>
    <tr>
      <td>Полірування, притирання, дзеркальне хонінгування, прецизійне литво пластмас</td>
      <td >0,040; 0,032;<b> 0,025</b>; 0,020</td> 
      <td >0,20; 0,16; 0,125; 0,100</td> 
      <td >0,25</td>
    </tr>
    <tr>
      <td>Полірування, тонке притирання</td>
      <td >0,020; 0,016;<b>  0,012</b>; 0,010</td> 
      <td >0,20; 0,16; 0,125; 0,100</td> 
      <td >0,25</td>
    </tr>
  </tbody>
</table>
<br/>
<button type="button" id='1' class="btn btn-secondary btn-lg d-none" onClick={this.ChangStyle}>Сховати таблицю</button>
  </div>
  
  </div>
  </div>

     )
 }
}

 
 


export default Chose;
