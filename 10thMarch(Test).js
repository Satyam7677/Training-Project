//1 Anagrams

// const anagrams = (a,b)=>{
//     if(a.length==b.length)
//     {
//         let m=a.toLowerCase().split('')
//         let n= b.toLowerCase().split('')
//         for(let i=0;i<a.length;i++)
//         {
//             if((m.includes(b[i])) && (n.includes(a[i])))
//             continue
//             else
//             return(console.log('Not anagrams'))
//         }
//         return(console.log('They are anagrams'))
//     }
//     else
//     return (console.log('Not anagrams'))
// }
// anagrams('Satyam','mmyatS')

//// Output -> Not Anagrams





//2 Factorial

// function factorial(n)
// {
//     if(n==0|| n==1)
//     return 1
//     else
//     return n* factorial(n-1)
// }
// console.log(factorial(4))

//// Output -> 24





//3 GCD

// function gcd(a,b)
// {
//     while(a!=b)
//     {
//         if(a>b)
//         a -=b
//         else
//         b -=a
//     }
//     console.log(a)
// }
// gcd(27,18)

//// Output -> 9





//4 to return promise

// const getPromise=async()=>{
//     let num =12
//     try{
//     let getVal = await demoFun(num)
//     console.log(getVal)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// const demoFun = (x)=>{
//     return new Promise((resolve,reject)=>{
//         if(x%2==0)
//         resolve('even')
//         else
//         reject('even')
//     })
// }
// getPromise()

//// Output -> even



//5 Subset of string

// const subsetString=(str)=>{
//     let a=0,b, result=[]
//     for(b=0;b<str.length;b++)
//     {
//         if(a<str.length-1 && a<=b)
//         {
//             x=str.slice(a,b+1)
//             result.push(x)
//         }
//         if(b==str.length-1 && a!=str.length)
//         {
//         a++
//         b=0
//         }      
//     }
//     result.push(str[str.length-1])
//     let set =new Set(result)
//     let k= Array.from(set)
//     console.log(k)
// }
// subsetString('Kanyakumari')

//Output -> ['K',          'Ka',         'Kan',         'Kany',
//   'Kanya',      'Kanyak',     'Kanyaku',     'Kanyakum',
//   'Kanyakuma',  'Kanyakumar', 'Kanyakumari', 'a',
//   'an',         'any',        'anya',        'anyak',
//   'anyaku',     'anyakum',    'anyakuma',    'anyakumar',
//   'anyakumari', 'n',          'ny',          'nya',
//   'nyak',       'nyaku',      'nyakum',      'nyakuma',
//   'nyakumar',   'nyakumari',  'y',           'ya',
//   'yak',        'yaku',       'yakum',       'yakuma',
//   'yakumar',    'yakumari',   'ak',          'aku',
//   'akum',       'akuma',      'akumar',      'akumari',
//   'k',          'ku',         'kum',         'kuma',
//   'kumar',      'kumari',     'u',           'um',
//   'uma',        'umar',       'umari',       'm',
//   'ma',         'mar',        'mari',        'ar',
//   'ari',        'r',          'ri',          'i'
// ]






//6 Check blank

// let str = ''
// const checkBlank=(str)=>{
//     if(str.length==0)
//     console.log('blank')
//     else
//     console.log('Not blank')
// }
// checkBlank(str)

////Output-> blank





//7 Capitalize first letter

// const capsFirst=(str)=>{
//    let strArr= str.split('')
//     strArr[0]=strArr[0].toUpperCase()
//     str = strArr.join('')
//     console.log(str)
// }
// capsFirst('ant')

////Output -> Ant





//8 Capitalize first letter of each word

// const capEach=(str)=>{
//     let wordArr=str.split(' ')
//     for(let i=0;i<wordArr.length;i++)
//     {
//         let strArr = wordArr[i].split('')
//         strArr[0]=strArr[0].toUpperCase()
//         wordArr[i]=strArr.join('')
//     }
//     str = wordArr.join(' ')
//     console.log(str)
// }
// capEach('my name is Satyam')

////Output-> My Name Is Satyam





//9 Change to UpperCase and LowerCase
// const upLow = (str)=>{
//    let wordArr = str.split('')
//     console.log(wordArr)
//     for(let i=0;i<wordArr.length;i++)
//     {
//         if((wordArr[i].charCodeAt(0)>64) && (wordArr[i].charCodeAt(0)<91))
//         {
//             wordArr[i]=wordArr[i].toLowerCase()
//         }
//         else if((wordArr[i].charCodeAt(0)>96) && (wordArr[i].charCodeAt(0)<123))
//         {
//             wordArr[i]=wordArr[i].toUpperCase()
//         }
//         else
//         continue
//     }
//     str=wordArr.join('')
//     console.log(str)
// }
// upLow('mY name is sahhas;')

////Output-> My NAME IS SAHHAS;





//10 Camel Case

// const camCase=(str)=>{
//     let wordArr=str.split(' ')
//         for(let i=0;i<wordArr.length;i++)
//         {
//             let strArr = wordArr[i].split('')
//             strArr[0]=strArr[0].toUpperCase()
//             wordArr[i]=strArr.join('')
//         }
//         str = wordArr.join('')
//         console.log(str)
// }
// camCase('hey my name is satyam')

////Output-> HeyMyNameIsSatyam