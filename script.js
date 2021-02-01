var request=new XMLHttpRequest();
request.open('GET','https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json',true);
request.send();
var json_data="";
request.onload=function(){
     json_data=JSON.parse(this.response);
     for( i in json_data)
     {
      console.log(json_data[i].id)
     }
     //initial data to be present on loading
     var start=0;
     var end=10;
     var totaldata=json_data.length;
     var data_perpage=10;
  var tbody=document.querySelector("#pagination_tbody")
        // table body content function
        function showtable(start,end)
        {
            var data="";
            for(j=start;j<end;j++){
                
              data += "<tr>";
              data += "<td>" + json_data[j].id +  "</td>";
              data += "<td>" + json_data[j].name+ "</td>";
            data += "<td>" + json_data[j].email + "</td>";
            }
            tbody.innerHTML=data; 
        }  
     showtable(start,end);

function pages(clickedLink) {
    clickedLink.parentElement.classList = "active";
    let pagenumber = parseInt(clickedLink.innerText);
    showtable((pagenumber* 10) - 10,pagenumber * 10);
    
}
var page = document.querySelectorAll('a');
var activePageNumber;
page.forEach((element) => {
    element.addEventListener("click", function() {
        pre= document.querySelector('#previous');
        next = document.querySelector('#next');
        activeLink = document.querySelector('.active');
        activePageNumber = parseInt(activeLink.innerText);
        if ((this.innerText === 'previous' && activePageNumber === 1) || (this.innerText === 'next' && activePageNumber === 10)) {
            return;
        }
        activeLink.classList = "page-item";
         pages(this);
    });
});
}