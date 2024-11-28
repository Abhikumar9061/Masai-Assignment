function scoreman(){
    let score =[10,20,30,40,50,60,70,80,90,100];
    let cnt = 0;
    for(let i=0; i<score.length; i++){
        if(score[i] <=40){
            score[i] = score[i] + 20;
        }
        if(score[i] >= 90){
            score[i] = 90;
        }  
        if(score[i] >= 50){
            cnt++;
        }
    }
    console.log(cnt);
}
scoreman()