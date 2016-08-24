class HomeView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector = mainContentSelector;
        this._wrapperSelector = wrapperSelector;

    }

    showGuestPage(mainData, sideBarData){

            let _that = this;
            $.get('templates/welcome-guest.html', function(template) {

              let renderedTemplate = Mustache.render(template, null);


                $(_that._wrapperSelector).html(renderedTemplate);

                $.get('templates/recent-posts.html', function(template) {
                    let blogPosts ={
                        blogPosts:sideBarData
                    };



                    let renderPosts = Mustache.render(template, blogPosts);
                    $('.recent-posts').html(renderPosts);
                })
            });
    }
    showUserPage(sideBarData, mainData){
        let _that = this;
        $.get('templates/welcome-user.html', function(template) {

            let renderedTemplate = Mustache.render(template, null);


            $(_that._wrapperSelector).html(renderedTemplate);

            $.get('templates/recent-posts.html', function(template) {
                let blogPosts ={
                    blogPosts:sideBarData
                };



                let renderPosts = Mustache.render(template, blogPosts);
                $('.recent-posts').html(renderPosts);
            })
        });
    }
}
