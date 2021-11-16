// for ...of
for (let item of usPresidents) {
  //console.log(item.president)
}

// forEach
usPresidents.forEach((item, index) => {
  // console.log(`${index}: ${item.president}`)
})

// map
let names = usPresidents.map((item) => item.president)
// console.log(names)

// filter
let republicans = usPresidents.filter((item) => item.party == "Federalist")
// console.log(republicans)

// find
let p1 = usPresidents.find((item) => item.party == "Democratic-Republican")
// console.log(p1)

// sort
usPresidents.sort((i1,i2) => {
  if(i1.president < i2.president) {
    return -1
  } else if (i2.president < i1.president) {
    return 1
  } else {
    return 0
  }
})