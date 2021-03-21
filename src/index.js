(function() {
    'use strict';

    var upload = document.getElementById('upload');
    var preview = document.getElementById('preview');
    var qr = new QrCode();

    qr.callback = function(err, result) {
      var span = document.querySelector('span') || document.createElement('span');
      if(result){
        span.textContent = result;
      }
      else{
        span.textContent = 'Error! See error message in console!';
        console.error(err);
      }
      preview.appendChild(span);
    }

    upload.addEventListener('change', function() {
      for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        var imageType = /^image\//;

        if (!imageType.test(file.type)) {
          throw new Error('File type not valid');
        }

        // Read file
        var reader = new FileReader();
        reader.addEventListener('load', function() {
          // Show as preview image
          var img = document.querySelector('img') || document.createElement('img');
          img.src = this.result;
          preview.appendChild(img);

          // Analyse code
          qr.decode(this.result);
        }.bind(reader), false);
        reader.readAsDataURL(file);
      }
    }, false);
  })();