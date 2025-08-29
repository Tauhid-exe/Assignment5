Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?



# 1.
# getElementById : 
Selects a single element by its unique id. Returns one element (or null if not found).
# getElementsByClassName : 
Selects all elements with a specific class name. Returns a live HTMLCollection.

# querySelector : 
Selects the first element matching a CSS selector. Returns one element (or null).
# querySelectorAll : 
Selects all elements matching a CSS selector. Returns a static NodeList.





# 2.
# Create an element: 
const newElement = document.createElement('div');

# Add content/attributes: 
newElement.textContent = 'Hello'; newElement.className = 'myClass';

# Insert into DOM: 
document.body.appendChild(newElement);





# 3.
# Event Bubbling:
When an event occurs on an element, it first triggers on that element, then "bubbles up" to its parent elements, triggering their event handlers in sequence.



# 4.
# Event Delegation in JavaScript:
Attaching a single event listener to a parent element to handle events for its child elements, instead of adding listeners to each child. It reduces memory usage, simplifies code, and handles dynamically added elements automatically.


# 5. 
# Difference between :
# preventDefault():
Stops the default action of an event (e.g., prevents a form from submitting). Does not stop event bubbling.
# stopPropagation():
Stops the event from bubbling up to parent elements. Does not prevent the default action.
