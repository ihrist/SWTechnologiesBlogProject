class PostView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector = mainContentSelector;
        this.wrapperSelector = wrapperSelector;

    }
    showCreatePostPage(isLoggedIn){
        let _that = this;
        let requestTemplate = isLoggedIn ? 'template/form-user.html' : 'templates/form-guest.html'
        $.get(requestTemplate, function (template) {
            let renderedTemplate = Mustache.render(template, null);

            $(_that._wrapperSelector).html(renderedTemplate);
            $.get('templates/register.html', function (template) {
                let renderedCreatePost = Mustache.render(template, null);
                $(_that._mainContentSelector).html(renderedCreatePost);

                $('#author').val(fullname);
                
                $('#create-new-post-request-button').on('click', function () {
                    let title = $('#title').val();
                    let content = $('#content').val();
                    let date = moment().format("MMMM Do YYYY");
                    let author = fullName;

                    let data = {
                        title:title,
                        content:content,
                        author:author,
                        date:date
                    }

                    

                    triggerEvent('login', data);
                })
            })
        });
    }
}
