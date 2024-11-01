let availablekeywords =[
    'butter chicken',
    'oats idli',
    'gulab jamun',
    'chole bhature',
    'matar kulcha',
    'mango lassi',
    'pakora and chai',
    'palak dal',
    'dosa',
    'chicken curry',
    'panner butter masala',
    'quiona',
    'roganjosh',
    'saag paneer',
    'salad',
    'samosa',
    'sarso and maake ki roti',
    'sweet and snack',
    'tea',
    'vegetable raita',
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result =[];
    let input = inputbox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsbox.innerHTML ='';
    }
    
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultbox.innerHTML="<ul>" + content.join('')+ "</ul>";
}

function selectInput(list){
    inputbox.value = list.innerHTML;
    resultsbox.innerHTML ='';
}