
function Areacircle(){
    var r = 3;
    const pi=3.14;
    var area = pi*(r*r);
    return( area
    );
}
function Arearectangle(){
    var l = 6;
    var b =9;
    var area = l*b;
    return( area
    );
}
function Areasquare(){
    var r = 6;
    var area = r*r;
    return( area
    );
}
function Areatriangle(){
    var b = 3;
    var h = 5;
    var area = 0.5*(b*h);
    return( area
    );
}
function Areasphere(){
    var r = 3;
    const pi = 3.14;
    var area = (pi*4)*(r*r);
    return( area
    );
}

export {Areacircle,Arearectangle,Areasquare,Areatriangle,Areasphere};