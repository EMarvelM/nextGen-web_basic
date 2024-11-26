## Continuing the Comprehensive Guide

### Level 3: Complex Array and Object Interactions

#### 0x05-shopping_cart.js

**Learning Objectives**:
- Array iteration with `.forEach()`
- Conditional logic for calculations
- Aggregating data from objects

**Data Preparation**:
Create an array of product objects:
```javascript
let shoppingCart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];
```

**Requirements**:
1. Calculate total cart value.
2. Apply discounts based on cart total:
   - Below $500: No discount
   - $500-$1000: 5% discount
   - Over $1000: 10% discount and free shipping.
3. Print detailed analysis of cart items, discounts, and final total.

**Expected Output**:
```plaintext
Cart Summary:
- Laptop: $1200 x 1 = $1200
- Mouse: $25 x 2 = $50
- Keyboard: $75 x 1 = $75
Total Before Discount: $1325
Discount Applied: 10%
Final Total: $1192.5
Shipping: Free
```

**Hints**:
- Use `.forEach()` to iterate over the array.
- Use an accumulator to calculate the total cost.
- Apply discounts conditionally.

---

#### 0x06-student_grade_system.js

**Learning Objectives**:
- Iterating through arrays of objects
- Calculating averages
- Nested conditionals for detailed analysis

**Data Preparation**:
Create an array of student objects:
```javascript
let students = [
    { name: "Emma", grades: [85, 90, 92] },
    { name: "Liam", grades: [75, 80, 65] },
    { name: "Olivia", grades: [95, 98, 97] }
];
```

**Requirements**:
1. Calculate the average grade for each student.
2. Determine academic standing:
   - Average < 70: "Needs Improvement"
   - 70-85: "Good Standing"
   - 85-95: "Excellent"
   - 95+: "Outstanding"
3. Print the name, average grade, and academic standing for each student.

**Expected Output**:
```plaintext
Student Grades:
- Emma: Average Grade = 89, Academic Standing = Excellent
- Liam: Average Grade = 73.33, Academic Standing = Good Standing
- Olivia: Average Grade = 96.67, Academic Standing = Outstanding
```

**Hints**:
- Use `.map()` or `.forEach()` to iterate through the students array.
- Use `reduce()` to calculate average grades.

---

### Level 4: Advanced Real-World Scenario

#### 0x07-event_registration.js

**Learning Objectives**:
- Object property manipulation
- Managing nested data
- Dynamic conditional checks

**Data Preparation**:
Create an object representing an event and its participants:
```javascript
let eventDetails = {
    name: "Tech Conference",
    maxCapacity: 100,
    registeredParticipants: [
        { name: "Alice", type: "speaker" },
        { name: "Bob", type: "attendee" }
    ]
};
```

**Requirements**:
1. Track new participant registration.
2. Enforce capacity limit.
3. Prioritize speakers over attendees if capacity is near full.
4. Provide registration status and remaining slots.

**Expected Output**:
```plaintext
Event: Tech Conference
Max Capacity: 100
Current Participants: 2
Slots Remaining: 98

Adding Participant: Charlie (attendee)
Status: Registered Successfully

Adding Participant: Dana (speaker)
Status: Registered Successfully

Updated Participants: 4
Remaining Slots: 96
```

**Hints**:
- Use `.push()` to add participants dynamically.
- Use conditionals to prioritize participant types.

---

## Submission Checklist

1. Ensure all task files follow the naming convention (`0x0x-description.js`).
2. Write clean and well-documented code with inline comments.
3. Test and verify console output matches expected results.
4. Create meaningful console logs for each requirement.

## Additional Resources

- **MDN Web Docs**: [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- **W3Schools**: [JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

---
