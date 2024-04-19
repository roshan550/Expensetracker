function handleFormSubmit(event){
    event.preventDefault();
  
    const amount = event.target.amount.value;
    const  discription = event.target.discription.value;
    const category = event.target.category.value;
  
    const obj={amount,discription,category}
    
    localStorage.setItem(discription,JSON.stringify(obj));
  ShowDetails()
    
    function ShowDetails(){
      const parent = document.querySelector('ul');
      const li = document.createElement('li'); 
      li.innerHTML=amount+" - "+category+"- "+discription+" ";
      parent.appendChild(li);
  
      const delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.value = 'Delete ';
      delButton.className='btn btn-danger'
      delButton.textContent='Delete Expense'
      delButton.onclick = () => {
        parent.removeChild(li);  
        localStorage.removeItem(discription);
      };
      li.appendChild(delButton);
      const edtButton = document.createElement('button');
      edtButton.type = 'button';
      
      edtButton.className='btn btn-secondary'
      edtButton.textContent='Edit Expense';
      edtButton.onclick = () => {
        parent.removeChild(li);
        
          document.getElementById('amount').value =obj.amount;
      
          document.getElementById('discription').value = obj.discription;
          document.getElementById('category').value =obj.category;
         localStorage.removeItem(discription);
      };
      li.appendChild(edtButton);
    }
  }