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

describe('NewUiLinkController', function() {

    function pathFor(value) {
        module('openlmis-header', function($provide) {
            $provide.constant('NEW_UI_PATH', value);
        });

        var vm;
        inject(function($controller) {
            vm = $controller('NewUiLinkController');
        });
        vm.$onInit();

        return vm.path;
    }

    it('should hide the link when the environment variable is not set', function() {
        expect(pathFor('${NEW_UI_PATH}')).toBe('');
    });

    it('should hide the link when the environment variable is empty', function() {
        expect(pathFor('  ')).toBe('');
    });

    it('should add a trailing slash to the configured path', function() {
        expect(pathFor('/v2')).toBe('/v2/');
    });

    it('should keep a configured path that ends with a slash', function() {
        expect(pathFor('https://example.org/migration/')).toBe('https://example.org/migration/');
    });

});
