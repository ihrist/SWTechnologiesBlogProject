class UserController{
    constructor(userView, requester, baseUrl, appKey){
        this._userView=userView;
        this._requester=requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/user/" + appKey + "/";


    }
    showLoginPage(){
        this._userView.showLoginPage()
    }
    showRegisterPage(){
        this._userView.showRegisterPage(isLoggedIn);
    }

    register(data){
        if(data.username.length<6){
            showPopup('error', 'Oprai si username-a');
            return;
        }
        if(data.fullname.length < 6){
            showPopup('error', 'Smeni si imeto');
            return;
        }
        if(data.password != data.confirmPassword){
            showPopup('error', 'Podmeni Parola');
            return;
        }
        if(data.password.length < 8 ){
            showPopup('error', 'kusa ti e parolata');
            return;
        }
        delete data['confirmPassword'];
        this._requester.post(this._baseServiceUrl, data,
        function successCallback(response) {
         showPopup('success', 'Bravo Regna se');
            redirectUrl('#/login');
        },
        function errorCallback(response) {
            showPopup('error', 'Nishto ne napravi pak');
        });
    }

    login(data){
        let requestUrl= this._baseServiceUrl + "login";
        this._requester.post(requestUrl, data,
            function successCallback(response) {
                sessionStorage.setItem('username', response.username);
                sessionStorage.setItem('_authToken', response._kmd.authtoken);
                sessionStorage.setItem('fullName', response.fullname);
                showPopup('success', 'logna se');
                redirectUrl('#/');
            },
            function errorCallback(response) {
                showPopup('error', 'Nishto ne napravi pak');
            });


    }


    logout(){
        sessionStorage.clear();
        redirectUrl('#/')

    }
}
