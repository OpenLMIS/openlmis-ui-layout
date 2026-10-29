/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2017 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU Affero General Public License for more details. You should have received a copy of
 * the GNU Affero General Public License along with this program. If not, see
 * http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

(function() {

    'use strict';

    /**
     * @ngdoc controller
     * @name openlmis-header.controller:NewUiLinkController
     *
     * @description
     * Resolves the new UI path from the NEW_UI_PATH environment variable.
     */
    angular
        .module('openlmis-header')
        .controller('NewUiLinkController', NewUiLinkController);

    NewUiLinkController.$inject = ['NEW_UI_PATH'];

    function NewUiLinkController(NEW_UI_PATH) {
        var vm = this;

        vm.$onInit = onInit;

        /**
         * @ngdoc property
         * @propertyOf openlmis-header.controller:NewUiLinkController
         * @name path
         * @type {String}
         *
         * @description
         * Path of the new UI with a trailing slash, or an empty string when it is not configured.
         */
        vm.path = undefined;

        function onInit() {
            vm.path = toPath(NEW_UI_PATH);
        }

        function toPath(value) {
            var path = (value || '').trim();

            if (!path || path.indexOf('${') === 0) {
                return '';
            }

            return path.charAt(path.length - 1) === '/' ? path : path + '/';
        }
    }

})();
