/* function startServer(){
    const post_ = {
        "token": `${localStorage.getItem("bds_token-remote")}`,
        "command": "start"
    }
    fetch(`http://${localStorage.getItem("bds_ip-remote")}:1932/service`,{
        method: "POST",
        mode: "cors",
        body: JSON.stringify(post_),
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
    }).then(response => response.json()).then(lan => {
        console.log(lan)
    })
};

function bds_stop(){
    const post_ = {
        "token": `${localStorage.getItem("bds_token-remote")}`,
        "command": "stop"
    }
    fetch(`http://${localStorage.getItem("bds_ip-remote")}:1932/service`,{
        method: "POST",
        mode: "cors",
        body: JSON.stringify(post_),
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
    }).then(response => response.json()).then(lan => {
        console.log(lan)
    })
}

function restartServer(){
    alert()
}

fetch(`http://${localStorage.getItem("bds_ip-remote")}:1932/info`).then(response => response.json()).then(lan => {
    document.getElementById("bds_version").innerHTML = lan.server.bds_version
})

function DownloadBDS(){
    const post_ = {
        "token": localStorage.getItem("bds_token-remote"),
        "version": document.getElementById('bds-Server_download').value
    }
    fetch(`http://${localStorage.getItem("bds_ip-remote")}:1932/bds_download`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(post_),
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
    }).then(response => response.json()).then(lan => {
        console.log(lan)
    })
};
document.getElementById('bds-Server_download').innerHTML = "Disabled";
function sendcomand() {
    const post_ = {
        "token": localStorage.getItem("bds_token-remote"),
        "command": document.getElementById("cmds").value
    }
    fetch(`http://${localStorage.getItem("bds_ip-remote")}:1932/bds_command`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(post_),
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
    }
    ).then(response => response.json()).then(lan => {
        if (lan.status === 200){
            document.getElementById("cmds").value = ""
        } else {
            alert(`we had a problem, error code ${lan.status}, message ${message}`)
        }
        console.log({"server":lan, post_})
    })
};

function log_save(){
    alert(`Your log file is being automatically saved to the Server directory`)
}

function log_output(){
    fetch(`http://${localStorage.getItem("bds_ip-remote")}:6565/`).then(response => response.json()).then(lan => {
        document.getElementById("LOG").innerHTML = lan.log
    })
}

setInterval(() => {
    log_output()
}, 1000); */