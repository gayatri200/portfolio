console.log(" script running.... ");
document.querySelector('.close').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.close').style.display='none'
        console.log("enter");
    }
    else
    {
        document.querySelector('.ham').style.display='none'
        setTimeout(()=>{ document.querySelector('.close').style.display='inline'},350);
       
        console.log("exit");
    }
});