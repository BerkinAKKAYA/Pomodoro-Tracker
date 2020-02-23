var datasets = [];

function ShowUploadPanel() {
    var button = document.getElementById("upload");
    button.click();
}

function Upload() {
    var fileHolder = document.getElementById('upload');
    const file = fileHolder.files[0];
    Load(file);
}

function Load(file) {
    var reader = new FileReader();

    reader.onloadend = function(evt){
        if (evt.target.readyState == FileReader.DONE){
            var whole = evt.target.result;
            var data = ReadData(whole);
            datasets = CreateDatasets(data);
            DrawChart();
        }
    }

    var blob = file.slice(0, file.size);
    reader.readAsBinaryString(blob);
}

function CreateDatasets(data)
{
    var result = []

    for (let i=0; i<data.length; i++)
    {
        result.push(Month(
            data[i][0],
            data[i][1],
            GenerateRandomColor()
        ))
    }

    return result;
}

function ReadData(pureData)
{
    var datas = pureData;

    for (let i=0;i<100;i++)
        datas = datas.replace("\n", "");

    datas = datas.replace(" ", "");
    datas = datas.split(";")
    datas = datas.filter(x => x != "", datas);

    var result = [];
    for (let i=0; i<datas.length; i++)
    {
        var wholeData = datas[i].split(":");
        var name = wholeData[0];
        var data = wholeData[1].split(",");
        var dataAsArray = [];

        if (name.length <= 2)
            continue;

        for (let j=0; j<data.length; j++)
            dataAsArray.push(parseInt(data[j]));
        
        result.push([name, dataAsArray]);
    }
    return result;
}

function Month(label, data, color)
{
    return {
        label: label,
        data: data,
        backgroundColor: "white",
        borderColor: color
    }    
}

function GenerateRandomColor()
{
    var result = "#";

    for (let i=0; i<6; i++)
        result += Math.floor(Math.random() * 8) + 1;

    result += "aa";
    return result;
}

function PopulateRandom()
{
    datasets = [
        Month("January", RandomData(), GenerateRandomColor()),
        Month("February", RandomData(), GenerateRandomColor()),
        Month("March", RandomData(), GenerateRandomColor())
    ]

    DrawChart();
}
function RandomData()
{
    var data = [];

    for (let i=0; i<30; i++)
    {
        var dayData = Math.floor(Math.random() * 15);
        data[i] = dayData;
    }

    return data;
}