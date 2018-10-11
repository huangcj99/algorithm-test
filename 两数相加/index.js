/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var sumListNode = new ListNode(0),
      currentNode = sumListNode,
      l1Node = l1,
      l2Node = l2,
      carry = 0;  // 进位

  while (l1Node || l2Node) {
    var l1Val = l1Node ? l1Node.val : 0,
        l2Val = l2Node ? l2Node.val : 0,
        sum = null;

    // 求和
    sum = l1Val + l2Val + carry;
    // 设置进位
    carry = parseInt(sum / 10);

    // 递归链表
    l1Node = l1Node ? l1Node.next : null
    l2Node = l2Node ? l2Node.next : null

    // 设置当前节点当前位的值
    currentNode.next = new ListNode(sum % 10)
    // currentNode指像sumListNode下一节点，递归
    currentNode = currentNode.next
  }

  // 链表结尾时，若有进位，则增加一个进位的节点
  if (carry > 0) {
    currentNode.next = new ListNode(carry);
  }

  // 返回除了除了初始节点外的链表
  return sumListNode.next
};