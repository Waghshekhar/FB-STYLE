// SIDEBAR

const menuItems =document.querySelectorAll('.menu-item');

const messgesNotification = document.querySelector
('#messagse-notification');
const messages =document.querySelector('.messages');
const message =messages.querySelectorAll('.message')
const messageSearch =document.querySelector('#message-search')


// Theme
const theme =document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSizes =document.querySelector('.choose-size span');
var root = document.querySelector(':root');


// -------------------------------sidebar
// remove active class form all menu items
const changeActivItem =()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}


menuItems .forEach(item =>{
    item.addEventListener('click',()=>{
        changeActivItem();
        item.classList.add('active');
        if(item.id !='notification'){
            document.querySelector('.notification-popup').
            style.display='none'   
        }else{
            document.querySelector('.notification-popup').
            style.display='block'; 
           document.querySelector('#notification .notification-counter').style.display='none'
        }

    })
})

// ------------------messges--------------------------
// searches chats
const serachMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display ='flex'
        }else{
            chat.style.display ='none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', serachMessage)



// hightLight messages card when massages menu item is clicked
messgesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messgesNotification.querySelector('.notification-counter').style.display ='none'

    setTimeout(()=>{
        messages.style.boxShadow ='none';
    },2000 )
})

// -------------------Theme/Display customization==================
// open model
const openThemModal =() => {
    themeModal.style.display ='grid'
}

// close model
const closeThemModal = (e) =>{
if(e.target.classList.contains('customize-theme')){
    themeModal.style.display='none';
}
}
// close modal
themeModal.addEventListener('click', closeThemModal);
theme.addEventListener('click',openThemModal)

// fontSize

fontSizes.forEach(size =>{
    let fontSizes;
size.addEventListener('click',()=>{
    if(size.classList.contains('font-size-1')){
        fontSizes='10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
    }else if (size.classList.contains('font-size-2')){
        fontSizes='13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    }
    else if (size.classList.contains('font-size-3')){
        fontSizes='16px';
        root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
    }
    else if (size.classList.contains('font-size-4')){
        fontSizes='19px';
        root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','25rem');
    }
    else if (size.classList.contains('font-size-5')){
        fontSizes='22px';
        root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }
    // change font size of the root html element
    document.querySelector('html').style.fontSize =fontSizes;
})
    
})