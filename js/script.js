function salconst(){
	if (typeof(Storage) !== "undefined") {
		const nome = document.getElementById("nome").value;
		const instituto = document.getElementById("instituto").value;
		const dtinicio = document.getElementById("dtinicio").value;
		const dtfinal = document.getElementById("dtfinal").value;
		const inscrito = document.getElementById("inscrito").value;
		const andamento = document.getElementById("andamento").value;
		const concluido = document.getElementById("concluido").value;

    	localStorage.setItem("nome", nome);
		localStorage.setItem("instituto", instituto);
		localStorage.setItem("dtinicio", dtinicio);
		localStorage.setItem("dtfinal", dtfinal);
		localStorage.setItem("inscrito", inscrito);
		localStorage.setItem("andamento", andamento);
		localStorage.setItem("concluido", concluido);

		alert("Os dados foram salvos");
		mostrar();
	} 
	else {
    	alert("Não suportado");
	}
}

function mostrar(){
	const nnome = localStorage.getItem("nome");
	const ninstituto = localStorage.getItem("instituto");
	const ndtinicio = localStorage.getItem("dtinicio");
	const ndtfinal = localStorage.getItem("dtfinal");
	const ninscrito = localStorage.getItem("inscrito");
	const nandamento = localStorage.getItem("andamento");
	const nconcluido = localStorage.getItem("concluido");

	document.getElementById("nome").value = nnome;
	document.getElementById("instituto").value = ninstituto;
	document.getElementById("dtinicio").value = ndtinicio;
	document.getElementById("dtfinal").value = ndtfinal;
	document.getElementById("inscrito").value = ninscrito;
	document.getElementById("andamento").value = nandamento;
	document.getElementById("concluido").value = nconcluido;

	nnome.onchange = salconst;
	ninstituto.onchange = salconst;
	ndtinicio.onchange = salconst;
	ndtfinal.onchange = salconst;
	ninscrito.onchange = salconst;
	nandamento.onchange = salconst;
	nconcluido.onchange = salconst;
}

