var googleBooksUrl = "https://www.googleapis.com/books/v1/volumes?q=title:";

$('form').on('submit', function(e) {
  e.preventDefault();
  var title = $('#title').val();
  $.ajax({
    url: googleBooksUrl + title,
    success: function( response ) {
// Step 2: Get HTML from template
    var source = $("#book").html();
// Step 3: Compile template
    var template = Handlebars.compile(source);
// Step 4: Get data for template.
// In this case, we are setting the data for the template to
// the volume info that we received back in the response, which, as
// you'll recall, is an object holding the title, description, etc.
    var bookInfo = response.items[0].volumeInfo;
// Step 5: Integrate the volume info data with the template
    var newListItemHTML = template(bookInfo);
// Step 6: Append the new book to the books list
    $('.books').append(newListItemHTML);
    }
  });
});