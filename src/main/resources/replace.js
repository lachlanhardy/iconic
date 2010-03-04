var replaceIcons = function() {

    var imgs = document.getElementsByTagName("img"),
        i = imgs.length,
        contextPath = AJS.$("#confluence-context-path").attr("content") + "/download/resources/atlassian.iconic/images/",
        page = /docs_16\.gif$/,
        comm = /comment_16\.gif$/,
        spac = /web_16\.gif$/,
        imag = /file\.gif$/,
        spcb = /browse_space\.gif$/,
        paga = /add_page_16\.gif$/,
        pagf = /add_page_faded_16\.gif$/,
        strg = /star_grey\.gif$/,
        star = /star_yellow\.gif$/,
        blog = /blogentry_16\.gif$/;
       
       console.log(imgs);
    while (i--) {
       if (page.test(imgs[i].src)) {
           imgs[i].src = contextPath + "page.png";
       } else if (comm.test(imgs[i].src)) {
           imgs[i].src = contextPath + "comment.png";
       } else if (blog.test(imgs[i].src)) {
           imgs[i].src = contextPath + "blog.png";
       } else if (spac.test(imgs[i].src)) {
           imgs[i].src = contextPath + "space.png";
       } else if (imag.test(imgs[i].src)) {
           imgs[i].src = contextPath + "image.png";
       } else if (spcb.test(imgs[i].src)) {
           imgs[i].src = contextPath + "space-view.png";
       } else if (paga.test(imgs[i].src)) {
           imgs[i].src = contextPath + "page-add.png";
       } else if (strg.test(imgs[i].src)) {
           imgs[i].src = contextPath + "star2.png";
       } else if (star.test(imgs[i].src)) {
           imgs[i].src = contextPath + "star.png";
       } else if (pagf.test(imgs[i].src)) {
           imgs[i].src = contextPath + "page-add2.png";
       }
    }
};
AJS.$(window).load(replaceIcons);
