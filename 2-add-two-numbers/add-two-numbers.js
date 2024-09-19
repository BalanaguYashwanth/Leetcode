/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let carry = 0;
    let head;
    let tail;

    const addIntoNewList = (val) => {
        if (!head) {
            head = new ListNode()
            head.val = val
            tail = head
        } else {
            let l3 = new ListNode();
            l3.val = val
            tail.next = l3;
            tail = l3
        }
    }

    while (l1?.val != undefined && l2?.val != undefined) {
        let sum = l1.val + l2.val
        if (carry > 0) {
            sum = sum + carry
            carry = 0
        }
        if (sum > 9) {
            carry = parseInt(sum / 10);
            sum = sum - carry * 10;
        }

        addIntoNewList(sum)
        sum = 0;
        l1 = l1.next;
        l2 = l2.next;
    }


    while (l1?.val!=undefined) {
        let sum = l1.val;
        if (carry > 0) {
            sum = sum + carry
        }
        if (sum > 0) {
            carry = parseInt(sum / 10);
            sum = sum - carry * 10;
        }
        addIntoNewList(sum)
        l1 = l1.next;
    }

    while (l2?.val!=undefined) {
        let sum = l2.val;
        if (carry > 0) {
            sum = sum + carry
        }
        if (sum > 0) {
            carry = parseInt(sum / 10);
            sum = sum - carry * 10;
        }
        addIntoNewList(sum)
        l2 = l2.next;
    }

    while(carry){
        addIntoNewList(carry)
        carry = 0
    }

    return head
};