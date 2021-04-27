const chart = document.getElementById('chart');

let array = [];
for(let i = 0; i<100; i++){
    let number = Math.floor(Math.random()*100);
    array.push(number);
}

    function draw() {
       chart.innerHTML = '';
       array.forEach(function (x) {
           let div = document.createElement('div');
           div.style.height = x+'px';
           chart.appendChild(div);
       }) 
    }
    //draw();

    async function bubbleSort(){
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array.length; j++){
                if (array[j] > array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
                draw();
                await sleep(1);
            }
        }
        function sleep(ms){
            return new Promise(resolve => setTimeout(resolve,ms));
        }
    }
    bubbleSort();