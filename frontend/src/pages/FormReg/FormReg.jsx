import './FormReg.scss';

function FormReg () {

  function sub(e) {
    e.preventDefault(); 
    const name = document.getElementById('formRg-name').value,
          email = document.getElementById('formRg-email').value,
          pass = document.getElementById('formRg-pass').value,
          lableName = document.querySelector('.child__err-name'),
          lableEmile = document.querySelector('.child__err-emile'),
          lablePass = document.querySelector('.child__err-pass');

    if(name.length !== 0 ){
      lableName.style.display = 'none';
      if(email.length !== 0){
        lableEmile.style.display = 'none';
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(email) === false){
          lableEmile.style.display = 'block';
          lableEmile.textContent  = 'Неверный e-mail адрес';
        }else{
          lablePass.textContent = 'Пароль не может быть пустым';
          lableEmile.style.display = 'none';
          console.log('верный');
          if(pass.length === 0){
            lablePass.style.display = 'block';
          }else{
            if(pass.length >= 6){
              lablePass.style.display = 'none';
                document.querySelector('.form-reg').submit();
              /* тут заканчивается проверка */
              
            }else{
              lablePass.textContent = 'Пароль должен содержать минимум 6 символов';
              lablePass.style.display = 'block';
            }
          }
        }
      }else{
        lableEmile.textContent  = 'Emile не может быть пустым';
        lableEmile.style.display = 'block';
      }
    }else{
      lableName.style.display = 'block';
    }

  }
  
  return (
    <>
      <div className="wfdiv"></div>
        <div className="container">
          <form className='form-reg' action="" method='post'>
            <h1 className='form-reg__title'>Регистрация</h1>

            <div className="FormReg__child child">
              <label className='child__lable' htmlFor="">Имя</label>
              <label className='child__err-name' >Имя не может быть пустым</label>
              <input id='formRg-name' className='child__input' type="text" />
            </div>

            <div className="FormReg__child child">
              <label className='child__lable' htmlFor="">Е-mail</label>
              <label className='child__err-emile' >Emile не может быть пустым</label>
              <input id='formRg-email' className='child__input' type="text" />
            </div>

            <div className="FormReg__child child">
              <label className='child__lable' htmlFor="">Пароль</label>
              <label className='child__err-pass' >Пароль не может быть пустым</label>
              <input id='formRg-pass' className='child__input' type="text" />
            </div>
            <hr className='FormReg__hr' />
            <button onClick={sub} className='FormReg__btn'>Зарегистрироваться</button>
          </form>
        </div>
      </>
  );
}
export {FormReg};