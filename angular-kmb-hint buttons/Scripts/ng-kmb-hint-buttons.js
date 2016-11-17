/// <reference path="angular.js" />

/*
 * Uses Bootstrap, HintCSS
 * 
 * Install-Package HintCSS
 * Install-Package Bootsrap
 * Install-Package Angular.Core
 * 
 */

var kmbHintButtons = angular.module("kmbHintButtons", []);


// 
// Bootstrap icon
//
kmbHintButtons.directive("icon", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var span =
                angular.element("<span></span>")
                .addClass("glyphicon glyphicon-" + attrs.icon)
                .html("&nbsp;");

            element.prepend(span);
        }
    }
});


// 
// Bootstrap Buttons
//
kmbHintButtons.directive("btnSuccess", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("btn btn-success");
        }
    }
})

kmbHintButtons.directive("btnDanger", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("btn btn-danger");
        }
    }
})

kmbHintButtons.directive("btnWarning", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("btn btn-warning");
        }
    }
})

kmbHintButtons.directive("btnInfo", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("btn btn-info");
        }
    }
})



// 
// Popup Directions
//
kmbHintButtons.directive("popupTop", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--top");
            element.attr("data-hint", attrs.popupTop);
        }
    }
});

kmbHintButtons.directive("popupLeft", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--left");
            element.attr("data-hint", attrs.popupLeft);
        }
    }
});

kmbHintButtons.directive("popupRight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--right");
            element.attr("data-hint", attrs.popupRight);
        }
    }
});

kmbHintButtons.directive("popupBottom", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--bottom");
            element.attr("data-hint", attrs.popupBottom);
        }
    }
});

kmbHintButtons.directive("popupTopLeft", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--top-left");
            element.attr("data-hint", attrs.popupTopLeft);
        }
    }
});

kmbHintButtons.directive("popupTopRight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--top-right");
            element.attr("data-hint", attrs.popupTopRight);
        }
    }
});

kmbHintButtons.directive("popupBottomLeft", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--bottom-left");
            element.attr("data-hint", attrs.popupBottomLeft);
        }
    }
});

kmbHintButtons.directive("popupBottomRight", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.addClass("hint--bottom-right");
            element.attr("data-hint", attrs.popupBottomRight);
        }
    }
});


// 
// Popup Sizes
//
kmbHintButtons.directive("popupSmall", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--small");
        }
    }
});

kmbHintButtons.directive("popupMedium", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--medium");
        }
    }
});

kmbHintButtons.directive("popupLarge", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--large");
        }
    }
});



// 
// Popup Colors
//
kmbHintButtons.directive("popupSuccess", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--success");
        }
    }
});

kmbHintButtons.directive("popupDanger", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs, ctrls) {
            element.addClass("hint--error");
        }
    }
});

kmbHintButtons.directive("popupInfo", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs, ctrls) {
            element.addClass("hint--info");
        }
    }
});

kmbHintButtons.directive("popupWarning", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs, ctrls) {
            element.addClass("hint--warning");
        }
    }
});



// 
// Popup Animations
//
kmbHintButtons.directive("popupNoAnimate", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--no-animate");
        }
    }
});

kmbHintButtons.directive("popupBounce", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--bounce");
        }
    }
});



// 
// Popup Extras
//
kmbHintButtons.directive("popupAlways", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--always");
        }
    }
});

kmbHintButtons.directive("popupRounded", function () {
    return {
        restrict: "AC",
        link: function (scope, element, attrs) {
            element.addClass("hint--rounded");
        }
    }
});