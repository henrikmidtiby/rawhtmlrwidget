HTMLWidgets.widget({

  name: 'rawhtmlrwidget',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;
        el.innerHTML = x.message;
        // el.html = x.message;
        //$(el).html('<h1>Hej</h1>');

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
