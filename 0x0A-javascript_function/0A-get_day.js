// print "its <day> and its looking good" 
// replacing day with the actual day of the week
console.log(`Its ${
    (
        () => {
            const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
            return weekday[new Date().getDay() - 1]
        }
    )()
} and its looking good`
)
