var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var qu = document.getElementById("ti");
var chou = document.getElementById("checkout");
var cabl = document.getElementById("cit");
var noi = document.getElementById("no");
var cam = document.getElementsByClassName("cart")[0];
var em = document.getElementById("empty");
var ite = document.getElementsByClassName("items")[0];
var pqui = document.getElementById("quan");
var pri = document.getElementById("pri");
var del = document.querySelector(".delete");
var me = document.querySelector("#meu");
var ct = document.querySelector(".catg");
var clo = document.querySelector("#close");
var i1 = document.querySelector(".prod img:nth-child(2)");
var i2 = document.querySelector(".prod img:nth-child(3)");
var i3 = document.querySelector(".prod img:nth-child(4)");
var i4 = document.querySelector(".prod img:nth-child(5)");
var pr = document.querySelector(".prev");
var ne = document.querySelector(".next");

minus.addEventListener('click', sub);
plus.addEventListener('click', add);
chou.addEventListener('click', acart);
cabl.addEventListener('click', crt);
del.addEventListener('click', dell);
me.addEventListener('click', meop);
clo.addEventListener('click', clse);
pr.addEventListener('click', pimg);
ne.addEventListener('click', nimg);

var cqu = qu.innerHTML;


function sub(){
cqu = qu.innerHTML;
    if (cqu <=0){
        qu.innerHTML = 0;
    }
    else{
        qu.innerHTML = --cqu;
    }
}

function add(){
    cqu = qu.innerHTML;
    qu.innerHTML = ++cqu;
}

function acart(){
    var ecomputedStyle = window.getComputedStyle(cam);
    var epropertyValue = ecomputedStyle.getPropertyValue('visibility');
    if(cqu > 0){
        noi.style.visibility = 'visible';
        noi.innerHTML = cqu;
        qu.innerHTML = 0;
        if(epropertyValue == 'visible'){
            ite.style.visibility = 'visible';
            em.style.visibility = 'hidden';
            pqui.innerHTML = cqu;
            var fpri = cqu*125.00;
            pri.innerHTML = "$" + fpri;
        }
        else{
        }
    }
}

function crt(){
    var ccomputedStyle = window.getComputedStyle(em);
    var cpropertyValue = ccomputedStyle.getPropertyValue('visibility');
    var ecomputedStyle = window.getComputedStyle(cam);
    var epropertyValue = ecomputedStyle.getPropertyValue('visibility');
    var icomputedStyle = window.getComputedStyle(ite);
    var ipropertyValue = icomputedStyle.getPropertyValue('visibility');
    if(epropertyValue == 'hidden'){
        if(cqu > 0){
            cam.style.visibility = 'visible';
            ite.style.visibility = 'visible';
            pqui.innerHTML = cqu;
            var fpri = cqu*125.00;
            pri.innerHTML = "$" + fpri;
        }
        else {
        cam.style.visibility = 'visible';
        em.style.visibility = 'visible';
    }
}
    else{
        cam.style.visibility = 'hidden';
        em.style.visibility = 'hidden';
        ite.style.visibility = 'hidden';
    }
}

function dell(){
    noi.style.visibility = 'hidden';
    ite.style.visibility = 'hidden';
    em.style.visibility = 'visible';
}

function meop(){
    ct.style.visibility = 'visible';
}

function clse(){
    ct.style.visibility = 'hidden';
}

function pimg(){
    var i1computedStyle = window.getComputedStyle(i1);
    var i2computedStyle = window.getComputedStyle(i2);
    var i3computedStyle = window.getComputedStyle(i3);
    var i4computedStyle = window.getComputedStyle(i4);
    var i1propertyValue = i1computedStyle.getPropertyValue('visibility');
    var i2propertyValue = i2computedStyle.getPropertyValue('visibility');
    var i3propertyValue = i3computedStyle.getPropertyValue('visibility');
    var i4propertyValue = i4computedStyle.getPropertyValue('visibility');


    if(i1propertyValue == 'visible'){
            i2.style.visibility = 'visible';
            i2.style.position = 'relative';
            i2.style.display = 'block';
            i1.style.visibility = 'hidden';
            i1.style.position = 'absolute';
            i1.style.display = 'none';
            i3.style.visibility = 'hidden';
            i3.style.position = 'absolute';
            i3.style.display = 'none';
            i4.style.visibility = 'hidden';
            i4.style.position = 'absolute';
            i4.style.display = 'none';
                }
        if(i2propertyValue == 'visible'){
            i3.style.visibility = 'visible';
            i3.style.position = 'relative';
            i3.style.display = 'block';
            i2.style.visibility = 'hidden';
            i2.style.position = 'absolute';
            i2.style.display = 'none';
            i1.style.visibility = 'hidden';
            i1.style.position = 'absolute';
            i1.style.display = 'none';
            i4.style.visibility = 'hidden';
            i4.style.position = 'absolute';
            i4.style.display = 'none';
            }
            if(i3propertyValue == 'visible'){
                i4.style.visibility = 'visible';
                i4.style.position = 'relative';
                i4.style.display = 'block';
                i3.style.visibility = 'hidden';
                i3.style.position = 'absolute';
                i3.style.display = 'none';
                i1.style.visibility = 'hidden';
                i1.style.position = 'absolute';
                i1.style.display = 'none';
                i2.style.visibility = 'hidden';
                i2.style.position = 'absolute';
                i2.style.display = 'none';
        }
                if(i4propertyValue == 'visible'){
                    i1.style.visibility = 'visible';
                    i1.style.position = 'relative';
                    i1.style.display = 'block';
                    i4.style.visibility = 'hidden';
                    i4.style.position = 'absolute'
                    i4.style.display = 'none';
                    i2.style.visibility = 'hidden';
                    i2.style.position = 'absolute';
                    i2.style.display = 'none';
                    i3.style.visibility = 'hidden';
                    i3.style.position = 'absolute';
                    i3.style.display = 'none';
    }


}

function nimg(){
    var i1computedStyle = window.getComputedStyle(i1);
    var i2computedStyle = window.getComputedStyle(i2);
    var i3computedStyle = window.getComputedStyle(i3);
    var i4computedStyle = window.getComputedStyle(i4);
    var i1propertyValue = i1computedStyle.getPropertyValue('visibility');
    var i2propertyValue = i2computedStyle.getPropertyValue('visibility');
    var i3propertyValue = i3computedStyle.getPropertyValue('visibility');
    var i4propertyValue = i4computedStyle.getPropertyValue('visibility');


    if(i1propertyValue == 'visible'){
        i4.style.visibility = 'visible';
        i4.style.position = 'relative';
        i4.style.display = 'block';
        i3.style.visibility = 'hidden';
        i3.style.position = 'absolute';
        i3.style.display = 'none';
        i1.style.visibility = 'hidden';
        i1.style.position = 'absolute';
        i1.style.display = 'none';
        i2.style.visibility = 'hidden';
        i2.style.position = 'absolute';
        i2.style.display = 'none';
                }
        if(i2propertyValue == 'visible'){
            i1.style.visibility = 'visible';
            i1.style.position = 'relative';
            i1.style.display = 'block';
            i4.style.visibility = 'hidden';
            i4.style.position = 'absolute'
            i4.style.display = 'none';
            i2.style.visibility = 'hidden';
            i2.style.position = 'absolute';
            i2.style.display = 'none';
            i3.style.visibility = 'hidden';
            i3.style.position = 'absolute';
            i3.style.display = 'none';
            }
            if(i3propertyValue == 'visible'){
                i2.style.visibility = 'visible';
                i2.style.position = 'relative';
                i2.style.display = 'block';
                i1.style.visibility = 'hidden';
                i1.style.position = 'absolute';
                i1.style.display = 'none';
                i3.style.visibility = 'hidden';
                i3.style.position = 'absolute';
                i3.style.display = 'none';
                i4.style.visibility = 'hidden';
                i4.style.position = 'absolute';
                i4.style.display = 'none';
        }
                if(i4propertyValue == 'visible'){
                    i3.style.visibility = 'visible';
                    i3.style.position = 'relative';
                    i3.style.display = 'block';
                    i2.style.visibility = 'hidden';
                    i2.style.position = 'absolute';
                    i2.style.display = 'none';
                    i1.style.visibility = 'hidden';
                    i1.style.position = 'absolute';
                    i1.style.display = 'none';
                    i4.style.visibility = 'hidden';
                    i4.style.position = 'absolute';
                    i4.style.display = 'none';
    }
}

var mod = document.querySelector(".model");
var cl = document.querySelector(".close");
var i5 = document.querySelector(".prod img:nth-child(6)");
var i6 = document.querySelector(".prod img:nth-child(7)");
var i7 = document.querySelector(".prod img:nth-child(8)");
var i8 = document.querySelector(".prod img:nth-child(9)");

i1.addEventListener('click', enlarge);
i2.addEventListener('click', enlarge);
i3.addEventListener('click', enlarge);
i4.addEventListener('click', enlarge);
i5.addEventListener('click', change1);
i6.addEventListener('click', change2);
i7.addEventListener('click', change3);
i8.addEventListener('click', change4);
cl.addEventListener('click', exit);

var i1s = i1.src;
function change1(){
    i1.src = i1s;
    i5.style.opacity = 0.6;
    i5.style.borderColor = 'hsl(26, 100%, 55%)';
    i6.style.borderColor = 'transparent';
    i7.style.opacity =1;
    i7.style.borderColor = 'transparent';
    i8.style.opacity = 1;
    i8.style.borderColor =  'transparent';
}
function change2(){
    i1.src = i2.src;
    i6.style.opacity = 0.6;
    i6.style.borderColor = 'hsl(26, 100%, 55%)';
    i5.style.opacity = 1;
    i5.style.borderColor =  'transparent';
    i7.style.opacity =1;
    i7.style.borderColor = 'transparent';
    i8.style.opacity = 1;
    i8.style.borderColor =  'transparent';
}
function change3(){
    i1.src = i3.src;
    i7.style.opacity = 0.6;
    i7.style.borderColor = 'hsl(26, 100%, 55%)';
    i5.style.opacity = 1;
    i5.style.borderColor =  'transparent';
    i6.style.opacity = 1;
    i6.style.borderColor = 'transparent';
    i8.style.opacity = 1;
    i8.style.borderColor =  'transparent';
}
function change4(){
    i1.src = i4.src;
    i8.style.opacity = 0.6;
    i8.style.borderColor = 'hsl(26, 100%, 55%)';
    i5.style.opacity = 1;
    i5.style.borderColor =  'transparent';
    i6.style.opacity = 1;
    i6.style.borderColor = 'transparent';
    i7.style.opacity =1;
    i7.style.borderColor = 'transparent';
}

function exit(){
    mod.style.display = 'none';
}
function enlarge(){
    mod.style.display = 'block';
}

var im = document.querySelector("#imgb");
var ii1 = document.querySelector("#img01");
var ii2 = document.querySelector("#img02");
var ii3 = document.querySelector("#img03");
var ii4 = document.querySelector("#img04");
var pri = document.querySelector(".previ");
var nei = document.querySelector(".nexti");

pri.addEventListener('click', prevs);
nei.addEventListener('click', nex);

function prevs(){
    if(im.src == i1.src){
        im.src = i4.src;
        ii4.style.opacity = 0.6;
        ii4.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
    }    
    else if(im.src == i2.src){
        im.src = i1.src;
        ii1.style.opacity = 0.6;
        ii1.style.borderColor = 'hsl(26, 100%, 55%)';
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
    }
    else if(im.src == i3.src){
        im.src = i2.src;
        ii2.style.opacity = 0.6;
        ii2.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
    }
    else if(im.src == i4.src){
        im.src = i3.src;
        ii3.style.opacity = 0.6;
        ii3.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
    }
}

function nex(){
    if(im.src == i1.src){
        im.src = i2.src;
        ii2.style.opacity = 0.6;
        ii2.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
    }    
    else if(im.src == i2.src){
        im.src = i3.src;
        ii3.style.opacity = 0.6;
        ii3.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
    }
    else if(im.src == i3.src){
        im.src = i4.src;
        ii4.style.opacity = 0.6;
        ii4.style.borderColor = 'hsl(26, 100%, 55%)';
        ii1.style.borderColor = 'transparent';
        ii1.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
    }
    else if(im.src == i4.src){
        im.src = i1.src;
        ii1.style.opacity = 0.6;
        ii1.style.borderColor = 'hsl(26, 100%, 55%)';
        ii3.style.borderColor = 'transparent';
        ii3.style.opacity =1;
        ii2.style.borderColor = 'transparent';
        ii2.style.opacity =1;
        ii4.style.borderColor = 'transparent';
        ii4.style.opacity =1;
    }
}