// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for (button of deleteButtons)
    {
        button.addEventListener('click', (event)=>
        {
        if (!confirm("are you sure?"))
            {
                event.preventDefault();
                window.location.assign('/book-list');
            }
        });
    }
    }
    window.addEventListener("load", Start);


    
})();