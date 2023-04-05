class Menu{

    constructor(settings){
        
        this.menuNode = settings.menuNode;
        this.menuButtonClass = settings.menuButtonClass;
        this.menuButton = this.menuNode.querySelector(`.${settings.menuButtonClass}`);
        this.menuButtonText = this.menuButton.textContent;
        this.textMenuButtonHide = settings.textMenuButtonHide;
        this.hidenElement = this.menuNode.querySelector(settings.hidenElementClass);
        this.hideClass = settings.hideClass;        

        this.menuNode.addEventListener('click', (e)=>{
      

            if (e.target.classList.contains(this.menuButtonClass)){

                e.preventDefault();

                this.hidenElement.classList.toggle(this.hideClass);
                
                if (!this.hidenElement.classList.contains(this.hideClass)){

                    this.menuButton.textContent = this.textMenuButtonHide; 

                } else {
                    
                    this.menuButton.textContent = this.menuButtonText;
                    
                }
                
            }
        });

    }

}

new Menu({
    menuNode: document.querySelector('.js-header-nav'),
    menuButtonClass: 'js-menu-button',
    textMenuButtonHide: 'Скрыть меню',
    hidenElementClass: '.js-header-nav-list',
    hideClass: 'hide-phone'
});

const posSharp = (window.location.href).indexOf('#');

if ( posSharp >0 ){
    const href = (window.location.href.slice(posSharp) );
    const section = $(href);
   
    if (section.length>0){
        $('html, body').animate({scrollTop:section.offset().top}, 1000);
    }
    
}

$('.js-menuItem').on('click', function(e){    
    
    let url = $(this).attr('href'),
        posSharp = url.indexOf('#'),
        href = url.slice(posSharp),
        section = $(href);

    if (section.length>0){
        e.preventDefault();
        $('html, body').animate({scrollTop:section.offset().top}, 1000);
    } else
    {
        document.location.href = url; 
    }


});
