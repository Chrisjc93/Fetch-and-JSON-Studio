// TODO: add code here
window.addEventListener('load', function() {fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json()
        }).then(function(json){
            let myContainer = document.getElementById("container");
            // old way of counting:
            // myContainer.innerHTML = myContainer.innerHTML + `<h3> Number Of Astronauts
            // : ${json.length}`;
            let count = document.getElementById("count");
            count.innerHTML += `${json.length}`;
            let astronauts = '';
            json.sort(function(a, b){return a.hoursInSpace-b.hoursInSpace});

            for (astronaut of json) 
            {
                astronauts += ` <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li style="color:${astronaut.active ? 'green' : 'black;'}">Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        </ul>
                </div>
                    <img src="${astronaut.picture}" alt="" class="avatar" />
            </div>`
            }
                myContainer.innerHTML = astronauts;

                        
            // This is the hard way of sorting through the json array and getting least to greatest.
            // let sortedArray = numArr.sort(function(a, b){return a-b});
            // let numArr = [];
            // for(let i = 0; i < json.length; i++) {
            //     numArr.push(json[i].hoursInSpace);
            // }
            //  let count = 0;
            // while ( count < json.length) {
                 // place the for loop below inside of here also need count++ and  if (sortedArray[count] === json[ii].hoursInSpace) { }
            // }

            // for(let ii = 0; ii < json.length; ii++) {
            // myContainer.innerHTML = myContainer.innerHTML + ` 
            //     <div class="astronaut">
            //         <div class="bio">
            //             <h3>Mae ${json[ii].firstName}</h3>
            //                 <ul>
            //                     <li>Hours in space: ${json[ii].hoursInSpace}</li>
            //                     <li class="act">Active: ${json[ii].active}</li>
            //                     <li>Skills: ${json[ii].skills}</li>
            //                 </ul>
            //         </div>
            //             <img class="avatar" src="${json[ii].picture}">
            //     </div>
            //     `;}    
                // old hard way of finding the element and changing to green
                // let activeColor = document.getElementsByClassName("act");
                // for(let j=0; j < activeColor.length; j++) {
                //     if(json[j].active === true) {
                //         activeColor[j].style.color="green";
                //     }
                // }
            
        });

        
    });



