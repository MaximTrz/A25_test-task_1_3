/* eslint-disable no-undef */
const formQuestion = document.querySelector('.js-form-question');

if (formQuestion) {

    formQuestion.addEventListener('submit', async (e) => {
        
        e.preventDefault();

        if(!validateForm(formQuestion)){
            return;
        }
        
        setTimeout(()=>{MicroModal.close('modal-1');}, 500);      

        const action = questionSend;
        const FormData1 = new FormData(formQuestion);   

        try {
            const res = await fetch(action, {
                method: 'POST',
                body: FormData1
            });

            if (res.ok){
                showInfoMessage('Ваш вопрос отправлен');                            
            } else {
                showInfoMessage('Что-то пошло не так');                            
            }

            setTimeout(()=>{MicroModal.close('modal-info');}, 3000);  
        } catch (error) {            
            showInfoMessage('Ошибка при отправке вопроса');                            
            setTimeout(()=>{MicroModal.close('modal-info');}, 3000); 
        }                     
    });

}

const validateForm = (form)=>{
    const inputs = form.querySelectorAll('.validate'),
        regs = {
            fio :/^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/,
            phone : /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            email : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };

    let result = true;

    const checkInput = (value, reg)=>{
        const regExp = reg;
        return regExp.test(value);
    };

    inputs.forEach(element => {
        element.addEventListener('focus', ()=>element.classList.remove('wrong'));
        
        const val = element.value,
            validationType = element.getAttribute('data-validation_type');

        if (!val){
            element.classList.add('wrong');
            result = false;
        } else {
            const res = checkInput(val, regs[validationType]);
            
            if(!res){               
                element.classList.add('wrong');
                result = false;
            }
        }

    });

    return result;

};