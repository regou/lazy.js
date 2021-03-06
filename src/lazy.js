(function (window) {
    'use strict';

    /**
     * Loads resources asynchronously on-demand.
     * @param {NodeList} [nodes] - An node element or a collection of node elements. Default: the result of `querySelectorAll('[data-lazy]')`.
     * @example
     * <img data-lazy="http://foo.bar.com/foobar.png" width="400" height="300">
     *
     * <script>
     *     window.onload = function () {
     *         lazy();
     *     };
     * </script>
     */
    function lazy(nodes) {
        nodes = nodes || document.querySelectorAll('[data-lazy]');

        var i = 0,
            len = nodes.length,
            node,
            data;

        // Converts given nodes into an array.
        if (len === undefined) {
            len = 1;
            nodes = [nodes];
        }

        for (i; i < len; i += 1) {
            node = nodes[i];
            data = node.getAttribute('data-lazy');

            if (data !== '') {
                node[node.tagName !== 'LINK' ? 'src' : 'href'] = data;
            }

            node.removeAttribute('data-lazy');
        }
    }

    // Expose lazy function.
    window.lazy = lazy;
}(this));