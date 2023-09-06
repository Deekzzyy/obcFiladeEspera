let fila = []
let menu = "3"


do {

    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) +
         "º -" + 
         fila[i] + 
         "\n"
    }



menu = prompt(pacientes + 
    "\nA fila de espera tem " + 
    (fila.length) + 
    " pessoas." + 
    "\n" + 
    "\nO que deseja fazer?" + 
    "\n(1) Novo Paciente" + 
    "\n(2) Consultar Paciente" + 
    "\n(3) Sair")


    switch (menu){
        case "1":
            novoNome = prompt("Qual o nome do paciente?")
            fila.push(novoNome)
            break
        case "2":
            if (fila.length !== 0){
                let paciente = fila.shift()
                alert("Paciente consultado: " + paciente)
            }else{
                alert("Todos já foram atendidos!")
            }
            break
        default: "Opção Inválida!"
    }
} while (menu !== "3")

alert("Encerrando...")