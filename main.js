// alert();

window.addEventListener('load', () =>{
    const main_fm = document.querySelector("#f-task");
    const input = document.querySelector("#new-input-task");
    const task_con = document.querySelector("#task-container");
    const Db = document.querySelector("#editable-date");

     
    main_fm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task_input = input.value;
        const date_input = Db.value;
       
        if (!task_input){
            alert('please fill in your task');
            return;
        }
        if (!date_input){
            alert('please set date of task');
            return;
        }
        
       
        const fm_el = document.createElement('div');
        fm_el.classList.add('task-box');

        const task_con_el = document.createElement('div');
        task_con_el.classList.add('content');
        // task_con_el.innerHTML=task_input;

        const date_con = document.createElement('div');
        date_con.classList.add('displayedDate');
        date_con.innerHTML = date_input;
        date_con.style.color= 'white';

        const con_input_el = document.createElement('input');
        con_input_el.classList.add('form-input');
        con_input_el.type = 'text';
        con_input_el.value = task_input;
        con_input_el.setAttribute('readonly', 'readonly');

        // =================== 3 =====================
        const act_btn = document.createElement('div');
        act_btn.classList.add('action');

        const act_edit = document.createElement('button');
        act_edit.classList.add('edit-btn');
        act_edit.innerHTML = 'edit';
        

        const act_del = document.createElement('button');
        act_del.classList.add('delete-btn');
        act_del.innerHTML= 'delete';

        // ===============
        act_btn.appendChild(act_edit);
        act_btn.appendChild(act_del);

        task_con_el.appendChild(con_input_el);
        task_con_el.appendChild(date_con);
        // ==================
        
        fm_el.appendChild(task_con_el);
        fm_el.appendChild(act_btn);

        task_con.appendChild(fm_el);
        
        input.value = ' ';
        Db.value = ' ';
        



        act_edit.addEventListener('click', ()=>{
            if(act_edit.innerHTML==='edit'){
                con_input_el.focus();
                con_input_el.removeAttribute('readonly');
                act_edit.innerHTML='save';
            }else{
                con_input_el.setAttribute('readonly', 'readonly');
                act_edit.innerHTML = 'saved';
                ;
            }

        })

        act_del.addEventListener('click', () =>{
            fm_el.remove();
        })


    });


            
// alert();

})



