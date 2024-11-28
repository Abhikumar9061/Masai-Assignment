function highPrioritytask(){
    let task = ["Zyming","Learning","Classes","Cyclining","Playing"];
    task.shift();
    task.unshift("Masai","School");
    console.log(task);
}
highPrioritytask();