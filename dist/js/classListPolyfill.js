/**
 * Element.prototype.classList for IE8/9, Safari.
 * @author    Kerem Güneş <k-gun@mail.com>
 * @copyright Released under the MIT License <https://opensource.org/licenses/MIT>
 * @version   1.2
 * @see       https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */
;(function() {
    // Helpers.
    var trim = function(s) {
            return s.replace(/^\s+|\s+$/g, '');
        },
        regExp = function(name) {
            return new RegExp('(^|\\s+)'+ name +'(\\s+|$)');
        },
        forEach = function(list, fn, scope) {
            for (var i = 0; i < list.length; i++) {
                fn.call(scope, list[i]);
            }
        };

    // Class list object with basic methods.
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className = trim(this.element.className +' '+ name);
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className = trim(this.element.className.replace(regExp(name), ' '));
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        item: function(i) {
            return this.element.className.split(/\s+/)[i] || null;
        },
        // bonus
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    // Remove this if statements to override native classList.
    if (!('classList' in Element.prototype)) {
        // Use this if statement to override native classList that does not have for example replace() method.
        // See browser compatibility: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Browser_compatibility.
        // if (!('classList' in Element.prototype) ||
        //     !('classList' in Element.prototype && Element.prototype.classList.replace)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // For others replace() support.
    if (window.DOMTokenList && !DOMTokenList.prototype.replace) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (ancestor.matches(s)) return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}
if (!window.Element || !window.Element.prototype || !window.Element.prototype.hasAttribute) {

    (function () {
        function hasAttribute (attrName) {
            return typeof this[attrName] !== 'undefined'; // You may also be able to check getAttribute() against null, though it is possible this could cause problems for any older browsers (if any) which followed the old DOM3 way of returning the empty string for an empty string (yet did not possess hasAttribute as per our checks above). See https://developer.mozilla.org/en-US/docs/Web/API/Element.getAttribute
        }
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].hasAttribute = hasAttribute;
        }
    }());

}