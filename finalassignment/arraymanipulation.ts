// array manipulation :Append (adding at the end) 
// Prepend(adding elements at the beginning)
let cityNames: string[] = ["Karachi", "Lahore", "Islamabad", "Hyderabad", "Multan", "Faislabad"];
for (let arrLen = 0; arrLen < (cityNames.length); arrLen++)
    console.log(cityNames[arrLen])
cityNames.push("Larkana", "Gujranwala", "Sukkur")//adding elements at the end
for (let arrLen = 0; arrLen < (cityNames.length); arrLen++)
    console.log(cityNames[arrLen])
cityNames.unshift("Nawabshah","Quetta","Peshawer") //adding elements at the beginning
for (let arrLen = 0; arrLen < (cityNames.length); arrLen++)
    console.log(cityNames[arrLen])
let days=["sat","sun","mon","tue","wed","thurs","fri"]
console.log(days)
let weekDays=days.slice(1,6)//extracting elements from the starting position index to the last element before the ending position
console.log(weekDays)
console.log(days)//slice doesnot change the original array
let offDays=days.splice(0,2)
console.log(offDays)
console.log(days)//splice change the original array
days.splice(0,0,"sat","sat")//without changing and adding elements in the beginning
console.log(days)
days.splice(1,1,"sun")//changing element to new value
console.log(days)

