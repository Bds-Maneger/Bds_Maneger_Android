console.info("Welcome to Bds Maneger Web 2.0")
const token = (localStorage.getItem("the_token")||undefined),
      andress = (localStorage.getItem("the_addr")||undefined)

if (andress){
    function bds_start(){

    }

    function bds_stop (){

    }

    function bds_restart(){
        console.log("restart request")
        if (!(document.getElementById("bds_log").value.includes("Quit correctly"))) bds_stop()
        bds_start
    }

    function bds_command(){

    }
    setInterval(() => {
        fetch(`http://${andress}:6565/`).then(response => response.json()).then(lan => {
            document.getElementById("bds_log").innerHTML = lan.log
        })
    }, 2 * 1000);
} else {
    alert("Please set the Bds Maneger's ip or address, and the authorization token for some advanced features")
    document.getElementById("config").style.display = "block"
}

function settings_display(){
    const se_display = document.getElementById("config").style.display
    if (se_display === "block"){
        document.getElementById("config").style.display = "none"
    } else {
        document.getElementById("config").style.display = "block"
    }
}
