function onChangeTag(e)
{
    var articleArr = document.querySelectorAll("article");

    if(e.target.getAttribute('id') == "noneTagSelected")
    {
        for (let i = 0; i < articleArr.length; i++)
        {
            articleArr[i].style.display = "block";
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
            if(e.target.getAttribute('id') != articleArr[i].getAttribute('id'))
                articleArr[i].style.display = "none";
        }
    }
}