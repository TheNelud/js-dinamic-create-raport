nrow=2;//количество строк по умолчанию
ncells=2;//количество столбцов по умолчанию
bs="none";//стиль границ таблицы по умолчанию
cellpadd=0;//отступ от границы до содержимого


//установка значений по умолчанию в полях при перезагрузке страницы (для вредных браузеров) 
document.getElementById("rows").value=2;
document.getElementById("ecells").value=2;
document.getElementById("cellpadd").value=0;
document.getElementById("bord").value=1;
 
//установка всех других значений переменных при загрузке страницы или ее перезагрузке
mytable = document.getElementById("my_table");
addframe();
addrules();
addbordercolor();
change_align();

  //проверка: удалить или добавить строку?
  function change_tr() {
  rows = document.getElementById("rows");
  if(rows.value-nrow>0){
        addrow();
  }
  else {
    if(rows.value>0)
    {
    delrow();
    }
  }
  }

  //функция добавления строк
  function addrow() {
  rows = document.getElementById("rows");
  ecells=document.getElementById("ecells");
  for(i=0;i<rows.value-nrow;i++)
  {
  var newrow = mytable.insertRow(0);
  for(k=0;k<ecells.value;k++)
  {
  newrow.insertCell(0).innerHTML = "<input type='text' value='текст'size='4'>";
  }
  }
  nrow=rows.value;
  }

  //функция удаления строк
  function delrow() {
  var rows = document.getElementById("rows");
  var lastrowindex=mytable.rows.length-1;
  for(i=0;i<Math.abs(nrow-rows.value);i++) {
  mytable.deleteRow(lastrowindex);
  lastrowindex=lastrowindex-1;
  }
  nrow=rows.value;
  }

  //проверка: добавить столбцы или уменьшить?
  function change_cells() {
  var ecells = document.getElementById("ecells");
  if(ecells.value-ncells>0){
        addcells();
  }
  else {
    if(ecells.value>0)
    {
    delcells();
    }
  }
  }
  //добавление столбцов
  function addcells() {
  var ecells = document.getElementById("ecells");
  for(i=0;i<mytable.rows.length;i++)
  {
  rowname=mytable.rows[i];
  for(e=0;e<Math.abs(ecells.value-ncells);e++)
  {
  rowname.insertCell(0).innerHTML = "<input type='text' value='текст'size='4'>";
  }
  }
  ncells=ecells.value;
  }
  //удаление столбцов
  function delcells() {
  var ecells = document.getElementById("ecells");
  for(i=0;i<mytable.rows.length;i++)
  {
  rowname=mytable.rows[i];
  for(e=0;e<Math.abs(ecells.value-ncells);e++)
  {
  rowname.deleteCell(0);
  }
  }
  ncells=ecells.value;

  }

//изменение цвета границ
function addbordercolor() {
    switch(document.getElementById("bordcolor").selectedIndex){
           case 0:
           bc="black";
           break;
           case 1:
           bc="red";
           break;
           case 2:
           bc="green";
           break;
           case 3:
           bc="blue";
           break;
           case 4:
           bc="#806b08";
           break;
           }
   }
   //изменение отображения внешних границ
   function addframe() {   
     switch(document.getElementById("bordframe").selectedIndex) {
           case 0:
           bframe="border";
           break;
           case 1:
           bframe="void"; 
           break;
           case 2:
           bframe="above";  
           break;
           case 3:
           bframe="below";
           break;
           case 4:
           bframe="rhs";
           break;
           case 5:
           bframe="lhs"; 
           break;
           case 6:
           bframe="hsides";
           break;
           case 7:
           bframe="vsides";
           break;
           }
   }
   //изменение отображения внутренних границ
   function addrules() {
    switch (document.getElementById("bordrules").selectedIndex) {
           case 0:
           brul="all";
           break;
           case 1:
           brul="none";
           break;
           case 2:
           brul="cols";
           break;
           case 3:
           brul="rows";
           break;
           }
   }
   //расположение содержимого ячейки
   function change_align() {
    switch (document.getElementById("cell_align").selectedIndex) {
           case 0:
           cellal="center";
           break;
           case 1:
           cellal="left";
           break;
           case 2:
           cellal="right";
           break;
           }
   }


function get_result() {
    var inputnum=document.getElementsByTagName("input");
    var inindex=4;//поля для ввода данных в ячейки таблицы начинаются с 5-го input 
    bord=document.getElementById("bord");
    cellpadd = document.getElementById("cellpadd").value; 
    bodyt="<table "+"border="+bord.value+" bordercolor='"+bc+"' frame='"+bframe+"'"+" rules='"+brul+"' cellpadding="+cellpadd+">";
    rows=document.getElementById("rows");
    ecells=document.getElementById("ecells");
    // <!--формируем первую строку-заголовок--->
    bodyt=bodyt+"<tr align=center>";
    for(n=0;n<ecells.value;n++)
         {
    bodyt=bodyt+"<td><b>"+inputnum[inindex].value+"</b></td>";
      inindex=inindex+1;
             }
    bodyt=bodyt+"</tr>";
    // <!--формируем тело таблицы--->
    for(x=0;x<rows.value-1;x++)
      {
       bodyt=bodyt+"<tr align="+cellal+">";
         for(n=0;n<ecells.value;n++)
         {
          bodyt=bodyt+"<td>"+inputnum[inindex].value+"</td>";
          inindex=inindex+1;
             }
       bodyt=bodyt+"</tr>";
      }
    bodyt=bodyt+"</table>";
    document.getElementById("result").innerHTML=bodyt;
    document.getElementById("itog_code").innerHTML="<textarea cols=40 rows=35 readonly>"+bodyt+"</textarea>";
    }