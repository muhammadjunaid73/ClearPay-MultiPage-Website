const form=document.querySelector('#contact-form');const status=document.querySelector('#form-status');
function error(id,message){const el=document.querySelector(`#${id}-error`);if(el)el.textContent=message;}
form?.addEventListener('submit',e=>{e.preventDefault();error('name','');error('email','');error('message','');status.textContent='';let valid=true;const name=document.querySelector('#name').value.trim(),email=document.querySelector('#email').value.trim(),message=document.querySelector('#message').value.trim();
if(name.length<2){error('name','Please enter your full name.');valid=false}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error('email','Please enter a valid email address.');valid=false}
if(message.length<10){error('message','Message must contain at least 10 characters.');valid=false}
if(valid){status.textContent='Demo message validated successfully. No data was sent to a server.';status.style.color='var(--success)';form.reset();}});
