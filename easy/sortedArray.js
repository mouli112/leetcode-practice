var deleteDuplicates = function(head) {
    if(head === null) return head;
    let node  = head;
    while(node && node.next) {
        if(node.next.val === node.val) {
            node.next = node.next.next
        }else {
            node = node.next
        }
    }
    return head;
};
let head = [1,2,1];
console.log(deleteDuplicates(head));