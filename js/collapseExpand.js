/*jshint unused: false */

// hat tip: https://css-tricks.com/using-css-transitions-auto-dimensions/

window.CollapseExpand = {
    transitionExpanding: 'height 400ms',
    transitionCollapsing: 'height 400ms',
    collapse: function (element) {
        var innerContentHeight = element.scrollHeight; // close to initial value
        element.style.transition = '';                 // 1.
        element.style.overflowY = 'hidden';
        requestAnimationFrame(function () {
            element.style.height = innerContentHeight + 'px'; // 2.
            var handler = function (event) {
                element.removeEventListener('transitionend', handler);
                element.style.transition = null; // 5.
            }.bind(this);
            element.addEventListener('transitionend', handler);
            element.style.transition = this.transitionCollapsing; // 3.
            requestAnimationFrame(function () {
                element.style.height = '0px'; // 4.
            }.bind(this));
        }.bind(this));
    },
    expand: function (element) {
        var innerContentHeight = element.scrollHeight; // close to initial value
        var handler = function (event) {
            element.removeEventListener('transitionend', handler);
            element.style.height = null; // 3.
            element.style.transition = null; // 4.
        }.bind(this);
        element.addEventListener('transitionend', handler);
        element.style.transition = this.transitionExpanding; // 1.
        requestAnimationFrame(function () {
            element.style.height = innerContentHeight + 'px'; // 2.
        }.bind(this));
    },
    toggle: function (element) {
        if (element.style.height === '0px') {
            this.expand(element);
        } else {
            this.collapse(element);
        }
    },
};

// .style.x = '' disables style value
// .style.x = null removes attribute from inline styles
