function traverse(target, callback){
    if (target.nodeType === Node.ELEMENT_NODE){
        if (target.nodeName === 'A'){
            callback(target);
        }
        var child_node = target.childNodes;
        for (var i=0; i<child_node.length; i+=1){
            traverse(child_node[i], callback);
        }
    }
}

var target = document.getElementById('start');
traverse(target, function(elem){
    elem.style.color = 'yellow';
    if (elem.nodeName === 'A'){
        elem.style.backgroundColor = 'blue';
    }
    console.log(elem);
});