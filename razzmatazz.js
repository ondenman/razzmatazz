"use strict";

var razzmatazz = (function(){

    var container = "body",
        children = "p",
        startColor = "ffffff",
        endColor = "000000",
        colorStyle = "foreground";

    function foreground(options) {
        colorStyle = "foreground";
        run(options);
    }

    function background(options) {
        colorStyle = "background";
        run(options);
    }

    function border(options) {
        colorStyle = "border";
        run(options);
    }

    function run(options) {
        container = options.container.trim()|| container;
        children = options.children.trim() || children;
        startColor = options.startColor.trim().replace('#','') || startColor;
        endColor = options.endColor.trim().replace('#','') || endColor;
        colorStyle = options.style || colorStyle;

        var containerElement = document.getElementById(container);

        if (containerElement === null) {
            console.log("razzmatazz.js: Cannot use container '"+options.container+"' Please make sure ID is present in HTML. Specify container element by ID.");
        } 

        if (isColorGood(startColor) && isColorGood(endColor)) {
            addColorStylesToChildElements(containerElement);
        } else {
            console.log("razzmatazz.js: Problem with a color value. Please makes sure values are hexadecimal.");
        }
    }

    function addColorStylesToChildElements(el) {
        var childElements = el.getElementsByClassName(children);

        if (childElements.length === 0) {
            childElements = el.getElementsByTagName(children);
        }

        var numberOfChildElements = childElements.length;
        var step = 1/numberOfChildElements;
        var position = 1;

        for (var i=0; i<childElements.length; i++) {

            var color = gradeForPosition (colorToRGBDecimal(startColor), colorToRGBDecimal(endColor), position);
            color = colorRGBtoHex(color);

            if (colorStyle === "background") {
                childElements[i].style.backgroundColor = color;
            } else if (colorStyle === "border") {
                childElements[i].style.borderColor = color;
            } else {
                childElements[i].style.color = color;
            }
            position -= step;
        }
    }

    function gradeForPosition (startColorRGB, endColorRGB, position) {
        var RGB = [];
        for (var i=0; i < 3; i++) {
            RGB[i] = Math.round( startColorRGB[i] * position + endColorRGB[i] * (1 - position) );
        }

        return RGB;
    }

    function isColorGood (color) {
        if ( isColorGoodLength(color) && isColorGoodHex ) {
            return true;
        } else {
            return false;
        }
    }

    function isColorGoodLength (color) {
        if (color.length === 6) {
            return true;
        }
        return false;
    }

    function isColorGoodHex (color) {
        return /^[0-9A-F]$/i.test(color);
    }

    function colorToRGBDecimal (color) {
        var redHex = color.substr(0,2);
        var greenHex = color.substr(2,2);
        var blueHex = color.substr(4,2);

        var redDec = parseInt(redHex, 16);
        var greenDec = parseInt(greenHex, 16);
        var blueDec = parseInt(blueHex, 16);

        return [redDec, greenDec, blueDec];
    }

    function colorRGBtoHex (RGB) {
        var R = pad( RGB[0].toString(16) );
        var G = pad( RGB[1].toString(16) );
        var B = pad( RGB[2].toString(16) );
        return(R+G+B);
    }

    function pad(x) {
        if ( x.length < 2) {
            x = "0"+x;    
        }
        return x;
    }

    return {
        foreground: foreground,
        background: background,
        border: border
    };

}());