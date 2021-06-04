function showscore()
{
    let math = +document.getElementById('math').value;
    let literature = +document.getElementById('literature').value;
    let english = +document.getElementById('english').value;
    let khuvuc = +document.getElementById('khuvuc').value;
    let score = "";
    

    switch(khuvuc){
        case "KV1":
            score = 0.75;
            break;
        case "KV2":
            score = 0.5;
            break;
        case "KV2-NT":
            score = 0.25;
            break;
        case "KV3":
            score = 0;
            break;
        

    }
    result = math + literature + english + score;
    document.getElementById('result').innerHTML = "Tổng điểm ĐH khối D của bạn là: " + result;

  


    
}