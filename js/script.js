function checkInput(event) {
    event.preventDefault();

    var num=parseInt(document.getElementById("inputNumber").value);

    if ( num > 0 && num < 91) {
        $.notification({
            state         : 'success',
            message       : 'Number you entered in inside valid range !',
            position        : 0,
            overlay       : true
        });
    }
    else if (num > 90 && num < 101 ) {
        $.notification({
            state         : 'warn',
            message       : 'Number you entered is too close to valid range. Lorem ipsum has become the industry standard for design mockups and prototypes. Lorem ipsum has become the industry standard for design mockups and prototypes. Lorem ipsum has become the industry standard for design mockups and prototypes. Lorem ipsum has become the industry standard for design mockups and prototypes. Lorem ipsum has become the industry standard for design mockups and prototypes. Lorem ipsum has become the industry standard for design mockups and prototypes.',
            position      : 100,
            overlay       : false,
            width         : 50
        });
    }
    else {
        $.notification({
            state         : 'error',
            message       : 'Number entered is not with in allowed range',
            position      : 100,
            overlay       : true
        });
    }
};
