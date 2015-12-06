define(function(require) {
    return {
        Sprite : function(filename, callback) {
            this.bitmap = new Image();
            this.bitmap.src = filename;
            
            this.bitmap.onload = callback;
        }
    }; 
});
