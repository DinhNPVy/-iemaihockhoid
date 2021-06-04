function showscore()
{
    let math = +document.getElementById('math').value;
    let literature = +document.getElementById('literature').value;
    let english = +document.getElementById('english').value;
    let khuvuc = +document.getElementById('khuvuc').value;
    
    result = math + literature + english + khuvuc;

    document.getElementById('result').innerHTML = "Tổng điểm ĐH khối D của bạn là: " + result;
}