//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader


//start progress bar or skills set //
class SkillsSet {
    progressMethod(data) {
        $(data.section).waypoint({
            handler: function() {
                // do something
                $(data.progressStatus).each((ind, statusEle) => {
                    const widthData = $(statusEle).attr(data.targetAttr) + '%';
                    $(statusEle).html(widthData);
                    $(statusEle).animate({
                        width: widthData
                    }, 1500);
                });
                this.destroy();
            },
            offset: 'bottom-in-view'
        });
    }
}
//end progress bar or skills set //

// dom content is loaded
$(() => {
    //progress bar or skills set //
    const skillsSetCls = new SkillsSet;
    skillsSetCls.progressMethod({
        section: '.skillSetComp',
        progressStatus: '.progress-status',
        targetAttr: 'data-target'
    });
});