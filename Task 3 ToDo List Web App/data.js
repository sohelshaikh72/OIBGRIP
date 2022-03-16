const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");
const deleteBtn = document.querySelector(".footer button");

	inputBox.onkeyup = ()=>{
		let userData = inputBox.value;
		if(userData.trim() != 0){
	 		addBtn.classList.add("active");
		}
		else{
			addBtn.classList.remove("active");
		}
	}

	addBtn.onclick = ()=>{
		let userData = inputBox.value;
		let getlocalStorage = localStorage.getItem("New Todo");
		if(getlocalStorage == null){
			listArr = [];
		}
		else{
			listArr = JSON.parse(getlocalStorage);
		}
		listArr.push(userData);
		localStorage.setItem("New Todo",JSON.stringify(listArr));
		showTask();
	}

	function showTask() {
		let getlocalStorage = localStorage.getItem("New Todo");
		if(getlocalStorage == null){
			listArr = [];
		}
		else{
			listArr = JSON.parse(getlocalStorage);
		}
		const pendingTask = document.querySelector(".pendingTask");
		pendingTask.textContent = listArr.length;

		let newLiTag = '';
		listArr.forEach((element, index) => {
			newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
	    });
	    todoList.innerHTML = newLiTag;
	    inputBox.value = "";
	}

function deleteTask(index){
	let getlocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getlocalStorage);
	listArr.splice(index,1);
	localStorage.setItem("New Todo",JSON.stringify(listArr));
	showTask();
}

deleteBtn.onclick = () =>{
	listArr = [];
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTask();
}