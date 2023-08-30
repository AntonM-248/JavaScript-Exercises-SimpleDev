let add = (num1, num2) => {
  //console.log(num1 + num2);
};

add(3, 44);


setInterval("changeTitle()", 2000);

let runTwice = (fun) => {
  fun(4,6);
  fun(6,2);
};

runTwice(add);

let changeStartText = (id ,text) => {
  document.querySelector('#' + id).innerHTML = text;
};

let finish = function () {
  changeStartText('Loading...');
  setTimeout("changeStartText('Finished', start)", 5000);
};

let timeOutId;

let displayAdded = () => {
  clearTimeout(timeOutId);
  changeStartText('add-message', 'Added');
  timeOutId = setTimeout(`changeStartText('add-message', '')`, 2000);
}

let messages = 0;
let text = 'App';
let changeTitle = () => {
  if(messages === 0){
    text = 'App';
  }
  else{
    text = `(${messages}) New messages`;
    console.log(text);
  }
  document.title = text;
}

let increment = (upOrDown) => {
  if(upOrDown){
    messages++;
  }
  else if (!upOrDown && messages > 0){
    messages--;
  }
  console.log(messages);
}
