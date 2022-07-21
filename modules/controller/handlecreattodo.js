import { toastifyy } from "./../components/toastify.js";


const todotitle = document.getElementById("title");
const tododesc = document.getElementById("desc");
const mainlist = document.getElementById("main")


export const handlecreateNewTodo  = (event) => {
    event.preventDefault();
    
    
    if (! todotitle.value) return toastifyy(" please enter ")
    
    
    
    
    
    
    const newtodo = {
        title:todotitle.value,
        desc:tododesc.value,
    };
    
    const ListItem = document.createElement('li');
    
    //ListItem.setAttribute("class" , "list-item"); 
    
    
    
    const TodotitleHeading = document.createElement('h3');
    TodotitleHeading.innerHTML = newtodo.title;
    TodotitleHeading.style.backgroundColor = "tomato"
    
    
    
    const TodoDescpara = document.createElement('p');
    TodoDescpara.innerHTML = newtodo.desc;
    
    console.log(ListItem ,  TodotitleHeading ,TodoDescpara);
    
    
    ListItem.appendChild(TodotitleHeading);
    ListItem.appendChild( TodoDescpara);
    
    const todoActions = ` 
    <div>
    <button>del</button>
    <button>edit</button>
    <button>ypdate</button>
    </div>`;
    
    ListItem.innerHTML += todoActions;
    
    mainlist .appendChild(ListItem);
    
    }
    
    


   
