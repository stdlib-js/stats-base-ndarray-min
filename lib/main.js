/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var numelDimension = require( '@stdlib/ndarray-base-numel-dimension' );
var getStride = require( '@stdlib/ndarray-base-stride' );
var getOffset = require( '@stdlib/ndarray-base-offset' );
var getData = require( '@stdlib/ndarray-base-data-buffer' );
var strided = require( '@stdlib/stats-strided-min' ).ndarray;


// MAIN //

/**
* Computes the minimum value of a one-dimensional ndarray.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray
* @returns {number} minimum value
*
* @example
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = min( [ x ] );
* // returns 1.0
*/
function min( arrays ) {
	var x = arrays[ 0 ];
	return strided( numelDimension( x, 0 ), getData( x ), getStride( x, 0 ), getOffset( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = min;
