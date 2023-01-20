function setlocalStorage(key,val){
    localStorage.setItem(key,val);
}
function getlocalStorage(key){
   alert( localStorage.getItem(key));
}
function removelocalStorage(key){
    localStorage.removeItem(key);
}
function removelocalStorage(){
    localStorage.clear();
}