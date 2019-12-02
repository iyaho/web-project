function onChangeTag(e)
{
    var articleArr = document.querySelectorAll("article");
    var radioSelectedArr = document.querySelectorAll("label");
    var inputSelectedArr = document.querySelectorAll("input");
    var sameArticleGameName;

    for (let i = 0; i < radioSelectedArr.length; i++)
    {
        if (inputSelectedArr[i].checked)
        {
            radioSelectedArr[i].style.backgroundColor="black";
            radioSelectedArr[i].style.color="white";
            radioSelectedArr[i].style.borderRadius='5px'; 
        }
        else
        {
            radioSelectedArr[i].style.backgroundColor="white";
            radioSelectedArr[i].style.color="black";
        }

    }

    if(e.target.getAttribute('class') == "noneTagSelected")
    {
        for (let i = 0; i < articleArr.length; i++)
        {   
            articleArr[i].style.display = "block";
        }

        for (let i = 0; i < articleArr.length; i++)
        {   
            if(sameArticleGameName == articleArr[i].getAttribute('id'))
                articleArr[i].style.display = "none";

            sameArticleGameName = articleArr[i].getAttribute('id');
        }
    }
    else
    {
        for (let i = 0; i < articleArr.length; i++)
        {
            articleArr[i].style.display = "block";
        }

        for (let i = 0; i < articleArr.length; i++)
        {
            if(e.target.getAttribute('class') != articleArr[i].getAttribute('class'))
                articleArr[i].style.display = "none";
        }
    }
}

function pageOnLoadEvent()
{
    var articleArr = document.querySelectorAll("article");
    var radioSelectedArr = document.querySelectorAll("label");
    var inputSelectedArr = document.querySelectorAll("input");
    var sameArticleGameName;

    for (let i = 0; i < radioSelectedArr.length; i++)
    {
        if (inputSelectedArr[i].checked)
        {
            radioSelectedArr[i].style.backgroundColor="black";
            radioSelectedArr[i].style.color="white";
            radioSelectedArr[i].style.borderRadius='5px'; 
        }
        else
        {
            radioSelectedArr[i].style.backgroundColor="white";
            radioSelectedArr[i].style.color="black";
        }

    }

    for (let i = 0; i < articleArr.length; i++)
        {   
            articleArr[i].style.display = "block";
        }

        for (let i = 0; i < articleArr.length; i++)
        {   
            if(sameArticleGameName == articleArr[i].getAttribute('id'))
                articleArr[i].style.display = "none";

            sameArticleGameName = articleArr[i].getAttribute('id');
        }
}