var arrList = $("#arrList");
var key = config.MY_KEY;
var url =
  "https://developer.nps.gov/api/v1/activities/parks/?api_key=" +
  key +
  "&limit=50";

var arr = [];
//of the 50 elements I get back push "CO" element to empty arr

// url_test = URL + "/activities/parks";

fetch(url)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      for (let x = 0; x < response.data[i].parks.length; x++) {
        if (response.data[i].parks[x].states === "CO") {
          console.log(
            response.data[i].parks[x].fullName + " " + response.data[i].name
          );
          arr.push(
            response.data[i].parks[x].fullName + " " + response.data[i].name
          );
        }
      }
    }
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
      newEl = $("<li>");
      newEl.text(arr[i]);
      arrList.append(newEl);
    }
  });
