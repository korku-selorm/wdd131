const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');

        // creating a delete button to help me delete items from the list 

        const delButton = document.createElement('button');
        li.textContent = input.value;

        delButton.textContent = '❌;'
        delButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
        });

        li.append(delButton);

        list.append(li);
        input.value= '';
        input.focus()

    }
});
