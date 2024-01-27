let idleTimer;

function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(handleIdle,  30000); // 30 seconds idle threshold
}

function handleIdle() {  
   const respose = confirm("You are idel from last 30 seconds. Do You Want to Continue Session");
   if(respose){
    alert("Happy Continue Session!");
   } else {
    alert("You Are logged Out!")
   }
  
}

document.addEventListener('mousemove', resetIdleTimer);
document.addEventListener('mousedown', resetIdleTimer); 
document.addEventListener('keypress', resetIdleTimer);
document.addEventListener('touchstart', resetIdleTimer);