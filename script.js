    function temaÜýtget() {
      document.body.classList.toggle("dark");
    }

    function ugrat() {
      let ady = document.getElementById("ady").value;
      let email = document.getElementById("email").value;
      let habar = document.getElementById("habar").value;
      document.getElementById("netije").innerHTML =
        `Sag bol, <b>${ady}</b>! Habaryň alndy (${email}).`;
    }