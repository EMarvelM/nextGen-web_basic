# JavaScript Learning Tasks: Arrays, Objects, and Conditionals

## Task Level 1: Basic Array and Conditional Exploration
### Task 1.1: Temperature Array Analysis
```javascript
// Create an array of temperatures for a week
let weeklyTemperatures = [72, 68, 75, 80, 65, 70, 73];

// Write a program that:
// 1. Prints the number of temperatures recorded
// 2. Checks if any day's temperature is above 75
// 3. Prints a message if the temperature is "hot" (above 75) or "mild" (65-75)

// Hint: Use .length to count temperatures
// Example output might look like:
// Total temperatures recorded: 7
// Hot day detected!
// Day temperature analysis: mild, mild, hot, hot, mild, mild, mild
```

### Task 1.2: Simple Student Grades
```javascript
// Create an array of student scores
let studentScores = [85, 92, 78, 60, 95, 88];

// Write a program that:
// 1. Count total number of scores
// 2. Determine how many students passed (score >= 70)
// 3. Print messages for pass/fail status of each score

// Example output:
// Total scores: 6
// Passed students: 4
// Detailed results: Pass, Pass, Pass, Fail, Pass, Pass
```

## Task Level 2: Object Exploration and Conditionals
### Task 2.1: Product Inventory
```javascript
// Create an object representing product details
let product = {
    name: "Wireless Headphones",
    price: 99.99,
    inStock: true,
    quantity: 15
};

// Write a program that:
// 1. Check if product is in stock
// 2. Determine discount eligibility (if price > 50)
// 3. Calculate potential purchase scenarios

// Example requirements:
// - If in stock, show "Available"
// - If price > 50, offer 10% discount
// - Show total cost with potential discount
```

### Task 2.2: Personal Profile Analyzer
```javascript
// Create an object with personal details
let person = {
    name: "Alex",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding", "hiking"]
};

// Write a program that:
// 1. Check person's age category
// 2. Analyze number of hobbies
// 3. Provide personalized messages based on profile

// Age categories:
// - Under 18: "Minor"
// - 18-25: "Young Adult"
// - Over 25: "Adult"
```

## Task Level 3: Complex Array and Object Interactions
### Task 3.1: Shopping Cart Management
```javascript
// Create an array of product objects
let shoppingCart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 }
];

// Write a program that:
// 1. Calculate total cart value
// 2. Apply discounts based on total purchase
// 3. Determine shipping costs

// Discount rules:
// - Total under $500: No discount
// - $500-$1000: 5% off
// - Over $1000: 10% off
// - Free shipping over $1000
```

### Task 3.2: Student Grade Management System
```javascript
// Create an array of student objects
let students = [
    { name: "Emma", grades: [85, 90, 92] },
    { name: "Liam", grades: [75, 80, 65] },
    { name: "Olivia", grades: [95, 98, 97] }
];

// Write a program that:
// 1. Calculate average grade for each student
// 2. Determine academic standing
// 3. Identify top performers

// Grade categories:
// - Average < 70: "Needs Improvement"
// - 70-85: "Good Standing"
// - 85-95: "Excellent"
// - 95+: "Outstanding"
```

## Task Level 4: Advanced Real-World Scenario
### Task 4.1: Event Registration System
```javascript
// Create an object representing event details and participant list
let eventDetails = {
    name: "Tech Conference",
    maxCapacity: 100,
    registeredParticipants: [
        { name: "Alice", type: "speaker" },
        { name: "Bob", type: "attendee" }
    ]
};

// Write a comprehensive program that:
// 1. Tracks participant registration
// 2. Manages event capacity
// 3. Handles different participant types
// 4. Implements registration logic

// Additional requirements:
// - Limit total participants
// - Prioritize speakers
// - Provide registration status messages
```

## Learning Key Takeaways
1. **Array Access**: Use `array[index]` to access elements
2. **Object Access**: 
   - Use `object.propertyName` or `object["propertyName"]`
   - Unlike arrays, objects use named keys
3. **Conditional Logic**: Practice `if-else` for decision making
4. **`.length` Property**: Quickly count array elements

### Pro Tip
As you progress, you'll learn more advanced array methods like `.forEach()`, `.map()`, and others that make these tasks even more elegant!
```

I've designed a comprehensive set of tasks that:
1. Progressively increase in complexity
2. Cover array and object manipulation
3. Reinforce conditional logic
4. Introduce practical programming scenarios
5. Provide hints and learning takeaways

The tasks are structured to:
- Start with simple array and conditional operations
- Move to object-based scenarios
- Advance to complex, real-world problem-solving
- Highlight key JavaScript learning points

Would you like me to elaborate on any of the tasks or discuss potential teaching strategies to accompany these exercises?
