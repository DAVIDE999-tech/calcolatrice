calcolo="";
function inserisci(valore){
  calcolo=document.getElementById("display").value;
  calcolo+=valore;
  console.log("e");

  if (calcolo[calcolo.length-1]=="*"||calcolo[calcolo.length-1]=="+"||calcolo[calcolo.length-1]=="-"||calcolo[calcolo.length-1]=="/"){
    document.getElementById("*").disabled=true;
     document.getElementById("-").disabled=true;
        document.getElementById("/").disabled=true;
          document.getElementById("+").disabled=true;
    console.log("ee");
  }else{
  document.getElementById("*").disabled=false;
document.getElementById("-").disabled=false;
    document.getElementById("/").disabled=false;
      document.getElementById("+").disabled=false;
    }
  calcolo=document.getElementById("display").value=calcolo;
}
function calc(){
  document.getElementById("display").value=eval(calcolo);
}
function reset(){
    document.getElementById("display").value="";
    calcolo=0;
}
