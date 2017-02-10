angular.module("listaUsuario", ["ngMessages"]);
angular.module("listaUsuario").controller("listaUsuarioCtrl", function ($scope, uppercaseFilter) {
    $scope.app = "Lista Usuários";
    $scope.contatos = [
        { id: 1, email: "kyle@server.com", firstName: "Kyle", lastName: "White", status: { nome: "active" } },
        { id: 2, email: "jane@server.com", firstName: "Jane", lastName: "Stone", status: { nome: "active" } },
        { id: 3, email: "lilly@server.com", firstName: "Lilly", lastName: "Smith", status: { nome: "pending" } },
        { id: 4, email: "fred@server.com", firstName: "Fred", lastName: "Miles", status: { nome: "pending" } },
        { id: 5, email: "alex@server.com", firstName: "Alexandra", lastName: "Betts", status: { nome: "pending" } }
    ];
    $scope.tipoStatus = [
        { nome: "active" },
        { nome: "pending" }
    ];
    $scope.adicionarContato = function (contato) {
        contato.id = $scope.contatos.length + 1;
        contato.status = $scope.tipoStatus[1];

        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});