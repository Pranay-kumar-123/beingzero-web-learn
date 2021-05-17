let todo;
let all = $(".all")
let allItemsHtml = ``;

getallitems();
$(document).on('click', 'button span', function() {
    let value = $(this).attr("class");
    deleteitem(value);
})

$(document).on('click', '.listt', function() {
    let value = $(this).attr("id");
    updateitem({ t: 'toggle' }, value);
})
$('.todotext').on('keypress', function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        if (($('.todotext').val()).trim() != '') {

            additem({
                title: $('.todotext').val(),
                isActive: true
            });

        }
        $('.todotext').val('');
    }
});

function getallitems() {
    $.ajax({
        method: "GET",
        url: "/api/todos",
        success: function(data) {
            todo = data.todo;

            allItemsHtml = ``;
            for (let i = 0; i < todo.length; i++) {
                if (todo[i].isActive)
                    allItemsHtml += ` <li class="list-group-item w74" id=${todo[i].id} style="flex:1 1 auto"><span class="listt" style:"width:450px;" id=${todo[i].id}>${todo[i].title}</span><button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true" class=${todo[i].id}>&times;</span>
                  </button></li>`;
                else {
                    allItemsHtml += ` <li class="list-group-item w74" id=${todo[i].id} style="flex:1 1 auto"><span class="listt" style:"width:450px" id=${todo[i].id}><del>${todo[i].title}</del></span><button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true" class=${todo[i].id}>&times;</span>
                  </button></li>`;
                }
                // if (todo[i].isActive) {
                //     activeItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
                // } else {
                //     unActiveItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
                // }
            }
            all.html(allItemsHtml);
        }
    });
}

function additem(itemdata) {
    $.ajax({
        method: "POST",
        data: itemdata,
        url: `/api/todos`,
        success: function(Data) {
            Data = Data.data;
            allItemsHtml = ``;
            allItemsHtml += `<li class="list-group-item w74" id=${Data.id} style="flex:1 1 auto"><span class="listt" style:"width:450px" id=${Data.id}>${Data.title}</span><button type="button" class="close" aria-label="Close">
            <span aria-hidden="true" class=${Data.id}>&times;</span>
          </button></li>`;
            all.append(allItemsHtml);

        }
    })
}

function updateitem(itemdata, itemid) {
    $.ajax({
        method: "PUT",
        data: itemdata,
        url: `/api/todos/${itemid}`,
        success: function(Data) {
            Data = Data.data;
            getallitems()
        }
    })
}

function deleteitem(itemid) {
    $.ajax({
        method: "DELETE",
        url: `/api/todos/${itemid}`,
        success: function(Data) {
            getallitems();
        }
    })

}

function gellalldataHTMl(todo) {
    allItemsHtml = ``;
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].isActive)
            allItemsHtml += ` <li class="list-group-item" id=${todo[i].id} style="flex:1 1 auto">${todo[i].title} <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true" class=${todo[i].id}>&times;</span>
  </button></li>`;
        else {
            allItemsHtml += ` <li class="list-group-item" id=${todo[i].id} ><del>${todo[i].title}</del> <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true" class=${todo[i].id}>&times;</span>
  </button></li>`;
        }
        // if (todo[i].isActive) {
        //     activeItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
        // } else {
        //     unActiveItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
        // }
    }
    all.html(allItemsHtml);
}