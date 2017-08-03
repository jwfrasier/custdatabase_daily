
let container = document.querySelector(".container")
for (var i = 0; i < customers.results.length; i++) {

  let div = document.createElement("div")
  container.append(div)

  let firstName = customers.results[i].name.first//store customer first name
  let lastName = customers.results[i].name.last// store customer last name
  let customer = customers.results[i]// store customer results in a variable


  let custNum = document.createElement("p")
  custNum.className = "phone"
  custNum.innerHTML = `${customer.phone}`

  let email = document.createElement("p")
  custNum.className = "phone"
  email.innerHTML = `${customer.email}`

  let location = document.createElement("p")
  let custCity = customer.location
  location.innerHTML = `${custCity.state} ${custCity.postcode} ${custCity.street} ${custCity.city}`


  let ssn = document.createElement("p")
  let ssnId = customer.id
  ssn.innerHTML = `${ssnId.value}`
  let img = document.createElement("img")//create an img element in the HTML
  img.src = customer.picture.large // This is where the image is found

// create a variable to store the name
  let nameLabel = document.createElement("p")
  nameLabel.innerHTML = `${firstName}  ${lastName}`

  div.append(img)
  div.append(nameLabel)
  div.append(custNum)
  div.append(email)
  div.append(location)
  div.append(ssn)
}
