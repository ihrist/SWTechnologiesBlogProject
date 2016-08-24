class homeController{
    constructor(homeView, requester, baseUrl, appKey){
        this._homeView = homeView;
        this.requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appKey + "/posts";

        }

    showGuestPage(){
        let _that= this;

        let recentPosts = [];
        this.requester.get(this._baseServiceUrl, function (response) {
            showPopup('success', 'Vzeh ti dannite');

            let currentId = 1;
            
            response.sort(function (elem1, elem2) {
                let date1 = new Date(elem1._kmd.ect);
                let date2 = new Date(elem2._kmd.ect);
                return date2 - date1;
            });

                for (let i = 0; i < 5; i++){
                    recentPosts.postId = currentId;
                    currentId++;
                    recentPosts.push(data[i]);
                }
            
            _that._homeView.showGuestPage(response);
        },
            function (data) {
                showPopup('error', 'greshka pri vzimaneto na danni')

        })
        this._homeView.showGuestPage();
    }
    showUserPage(){
        let _that= this;

        let recentPosts = [];
        this.requester.get(this._baseServiceUrl, function (response) {
                showPopup('success', 'Vzeh ti dannite');

                let currentId = 1;

                response.sort(function (elem1, elem2) {
                    let date1 = new Date(elem1._kmd.ect);
                    let date2 = new Date(elem2._kmd.ect);
                    return date2 - date1;
                });

                for (let i = 0; i < 5; i++){
                    recentPosts.postId = currentId;
                    currentId++;
                    recentPosts.push(data[i]);
                }

                _that._homeView.showUserPage(response);
            },
            function (data) {
                showPopup('error', 'greshka pri vzimaneto na danni')

            })
        this._homeView.showGuestPage();
    }
}
