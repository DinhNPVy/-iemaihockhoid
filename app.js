function showscore()
{
    let math = +document.getElementById('math').value;
    let literature = +document.getElementById('literature').value;
    let english = +document.getElementById('english').value;
    let khuvuc = +document.getElementById('khuvuc').value;
    let score = 0;
    let result = 0;
    switch(khuvuc){
        case 1:
            score = 0.75;
            break;
        case 2:
            score = 0.5;
            break;
        case 3:
            score = 0.25;
            break;
        case 4:
            score = 0;
            break;
        

    }
    result = math + literature + english + score;
    document.getElementById('result').innerHTML = "Tổng điểm ĐH khối D của bạn là: " + result;

  


    
}