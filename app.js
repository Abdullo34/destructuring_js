//  javascript destructing

// const mevalar = ['olma', 'gilos', 'uzum', 'nok']

// const [value1, ...spreed] = mevalar

// const [gilos] = spreed
// console.log(value1, gilos)




const objUser = {
    name: "Akror",
    age: 24,
    job: 'developer'
}


//  key  kalit sozlari buyicha uzgaruvchi yatiladi 

const { name, ...stayData} = objUser


console.log(name, stayData)