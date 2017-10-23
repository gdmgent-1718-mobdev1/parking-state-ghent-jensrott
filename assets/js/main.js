// We use the function getJSON
function parkingUpdate() {
    getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', 

    // SuccesHandler
    function(data){
        console.log(data);

        var parkingContainer = document.querySelector(".parkingContainer");    
        //let tempStr = "";
        let tempStr1 = "";

        // We go through everything in the JSON file
        data.forEach(function(element) {
            
        // We get all the data from the JSON file

        // It only shows the last name, id , date in the full JSON file
        // error fixed, the problem was that i didn't end with ; :p
        let garageName = element.name;
        let garageId = element.id;
        let garageDescription = element.description;


        let lastModifiedDate = element.lastModifiedDate;
        let garageAddress = element.address;
        let latitude = element.latitude;
        let totalCapacity = element.parkingStatus.totalCapacity;
        let availableCapacity = element.parkingStatus.availableCapacity;
    
        
        // Ik ga het doen met een circle die rechts van de card staat die de kleur toont
        // Oude opmaak
        /*tempStr += `<div class="container">
                        <div class="row sm-5">
                            <div class=col>
                                <div class="card-body">
                                    <div class="list-group-item" id="garageName"><b>Name:</b> ${garageName}</div>
                                    <div class="list-group-item" id="garageId"><b>ID:</b> ${garageId}</div>
                                    <div class="list-group-item" id="garageAddress"><b>Adress:</b> ${garageAddress}</div>
                                    <div class="list-group-item" id="totalCapacity"><b>Capacity:</b> ${totalCapacity}</div>
                                    <div class="list-group-item" id="availableCapacity"><b>AvailableCapacity:</b> ${availableCapacity}</div>
                                </div>
                            </div>
                        </div>
                        <div class=row mt-5>
                            <div class=col>
                                <div id="backgroundColorId">qsdqsd</div>
                            </div>
                        </div>
                    </div>
                
        `; */

        tempStr1 += `<div class=row sm-5>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body" style="margin: 10px;">
                                    <div class="card-text" id="garageName"><b>Name:</b> ${garageName}</div>
                                    <div class="card-text" id="garageId"><b>ID:</b> ${garageId}</div>
                                    <div class="card-text" id="garageAddress"><b>Adress:</b> ${garageAddress}</div>
                                    <div class="card-text" id="totalCapacity"><b>Capacity:</b> ${totalCapacity}</div>
                                    <div class="card-text" id="availableCapacity"><b>Available Capacity:</b> ${availableCapacity}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div id="backgroundColorId">
                                    <p>Status of the garage<p> 
                                </div>
                            </div>
                        </div>
                    </div>
        `;


        parkingContainer.innerHTML = tempStr1;

        var backgroundColorId = document.querySelector("#backgroundColorId");
        let halfCapacity = availableCapacity / 2;
        let oneFifthCapacity = availableCapacity / 5; 


        if (availableCapacity > halfCapacity) {
            backgroundColorId.style.backgroundColor = "green";

        } else if (availableCapacity >= oneFifthCapacity && availableCapacity <= halfCapacity) {
            backgroundColorId.style.backgroundColor = "yellow";

        } else {
            backgroundColorId.style.backgroundColor = "red";   
        }

    }, this);
        

    }, 
    
    console.log("error"));

}


parkingUpdate();
setTimeout(parkingUpdate,1000);