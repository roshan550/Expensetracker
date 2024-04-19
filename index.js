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
          console.log(localStorage.getItem(obj.Amount));
          document.getElementById('amount').value = localStorage.getItem(obj.amount);
          console.log(document.getElementById('amount').value );
          document.getElementById('discription').value = localStorage.getItem(obj.discription);
          document.getElementById('category').value = localStorage.getItem(obj.category);
         localStorage.removeItem(discription);
      };
      li.appendChild(edtButton);
    }
  }