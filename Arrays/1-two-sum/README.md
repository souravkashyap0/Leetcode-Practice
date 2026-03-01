<h2><a href="https://leetcode.com/problems/two-sum">Two Sum</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /><hr><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?

**Problem:** LeetCode #1 - Two Sum

**Difficulty:** Easy

**Topic:** Arrays & Hashing

#### 1\. Brute Force Approach

*   **Logic:** Use two nested loops to check every possible pair of numbers in the array. If their sum matches the target, return their indices.
    
*   **Analogy:** Like trying every single key on a keyring until one fits the lock.
    
*   **Time Complexity:** $O(n^2)$ — Since we have a loop inside another loop, the operations grow quadratically with the input size.
    
*   **Space Complexity:** $O(1)$ — We are not using any extra data structures to store information.
    

#### 2\. Optimized Approach (Hash Map)

*   **Logic:** Traverse the array once. For each number, calculate its "match" ($target - currentNumber$). Check if this match is already in our "memory" (a JavaScript Map or Object). If yes, we found the pair. If no, store the current number and its index in the Map for future reference.
    
*   **Analogy:** Like walking into a party and asking, "Is the person I'm looking for here yet?" If not, you leave your name and number on the wall so they can find you when they arrive.
    
*   **Time Complexity:** $O(n)$ — We only traverse the list of $n$ elements once. Searching for a key in a Map is a constant time $O(1)$ operation.
    
*   **Space Complexity:** $O(n)$ — In the worst case, we might have to store almost all $n$ elements in the Map before finding a matc
