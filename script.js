let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let madkouri = document.querySelector('.madkouri');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain1.style.top = value * 2 + 'px';
    mountain2.style.top = value * 1,5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px'; 
    boat.style.left = value * 3 + 'px';
    madkouri.style.fontSize = value + 'px';
    if(scrollY >= 58){
        madkouri.style.fontSize = 58 + 'px';
        madkouri.style.position = 'fixed';
        if(scrollY >= 400){
            madkouri.style.display = 'none';
        }else{
            madkouri.style.display= 'block';
        }
        if(scrollY>=117){
            document.querySelector('.main').style.background='linear-gradient(#3e9d99, #200016)';
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
        }
        
    }
    
    

}

