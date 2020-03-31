$("#check").submit(function(e)
{
  e.preventDefault();
  console.log("click");
})


$("#form").submit(function(e)
{
  e.preventDefault();
  
  let item = event.target[0].value;
  
  $(".list").append(`<form id="newForm"> <fieldset> <p> ${item} </p> <button id="check" type="submit"> check </button> <button id="delete" type="submit"> delete </button> </fieldset> </form>`);
})

$("#check").submit(function(e)
{
  e.preventDefault();

  if (event.currentTarget.firstChild.classList.length === 0)
  {
    event.currentTarget.firstChild.classList.add("cross");
  }
  else
  {
    event.currentTarget.firstChild.classList.remove("cross");
  }
})

$("#delete").submit(function(e)
{
  event.currentTarget.remove()
})