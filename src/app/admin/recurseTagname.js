export function recurseSearchTagname(tagName, root){
    let nodeChildren = root.childNodes
    let retArr = []

    nodeChildren.forEach(element => {
        retArr = retArr.concat(recurseSearchTagname(tagName,element))
    });

    if(root.tagName == tagName.toUpperCase()){
        retArr.push(root)
    }

    return retArr
}