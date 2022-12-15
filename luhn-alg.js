

function validCard(num) {
    const cardNumArr = [];

    for(let i = num.length - 1; i >= 0; i--) {
        console.log('i am in the for loop')
        if(num[i] % 2 === 0) {
            cardNumArr.push(num[i]);
            console.log('first log', cardNumArr);
        } else {
            num[i] *= 2;
            if(num[i] > 10) {
                num[i] = (num[i] - 10) + 1;
                cardNumArr.push(num[i]);
                console.log('second log', cardNumArr);
            } else{
                cardNumArr.push(num[i]);
                console.log('third log', cardNumArr);
            }
        } 
    } cardNumArr.reduce((partialSum, a) => partialSum + a, 0);
    console.log('im not going into the for loop');
    console.log(cardNumArr);
    if(cardNumArr % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

validCard(1234567890123456); //should be false
// validCard(4408041234567893); //should be true
// validCard(38520000023237); //should be true
// validCard(4222222222222); //should be true