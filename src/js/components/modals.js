/* eslint-disable no-undef */
MicroModal.init();

const openModalQuestion = document.querySelectorAll('.js-open-question');

openModalQuestion.forEach((element)=>{

    element.addEventListener('click', (e)=>{
        
        e.preventDefault();
        MicroModal.show('modal-1');

    });

});

// eslint-disable-next-line no-unused-vars
const showInfoMessage = (content)=>{
    const infoModalContent = document.querySelector('.js-info-content');
    infoModalContent.textContent = content;
    MicroModal.show('modal-info');
};