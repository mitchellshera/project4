function like_post(clicked_id)
{
  var X = document.getElementById(`numlikes_${clicked_id}`).innerHTML;
  X = Number(X) + Number(1)
  var total_adds = document.getElementById(`numlikes_${clicked_id}`).innerHTML = `${X}`;

  $.ajax({
    url: '/ajax/like_post/',
    data: {
      'add_like': total_adds,
      'cur_post' : clicked_id
    },
    dataType: 'json',
    success: function (data) {
       {
        alert("A user with this username already exists.");
      }

    }   
  });
  
  
}
document.addEventListener('DOMContentLoaded', function() {


    
    document.querySelector("#save_edit").addEventListener('click', function() {
        var x = document.getElementById('edited_content').value;
        var y = document.getElementById('edited_content').parentElement.id.replace('post_','');
        console.log(y);
        $.ajax({
            url: '/ajax/edit_post/',
            data: {
              'new_content': x ,
              'cur_post' : y
            },
            dataType: 'json',
            success: function (data) {
               {
                alert("A user with this username already exists.");
              }
            }
          });
        document.getElementById(`post_${y}`).innerHTML = `${x}`;
        });

        

    

    document.querySelector('#all-posts').addEventListener('click', function() { 
    document.querySelector('#profile').style.display = 'none'; 
    document.querySelector('#following').style.display = 'none';                        
    document.querySelector('#all-posts-head').style.display = 'block';
    
    })
    document.querySelector('#following').addEventListener('click', function() {                          
        document.querySelector('#all-posts-head').style.display = 'none';
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#following').style.display = 'block';

    })
    document.querySelector('#username').addEventListener('click', function() {                          
        document.querySelector('#all-posts-head').style.display = 'none';
        document.querySelector('#following').style.display = 'none';
        document.querySelector('#profile').style.display = 'block';

    })

    

});
