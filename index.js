(function (window) {
				window.isDeepEquals = function (obj1, obj2) {
					var isEqual = true;			
					if(Object.keys(obj1).length !== Object.keys(obj2).length) {
						return false;
					}
					Object.keys(obj1).forEach(function (key) {
						if(obj2[key]) {
							if(typeof(obj1[key]) === typeof(obj2[key])) {
								if(typeof(obj1[key]) === 'object') {
									isEqual = isDeepEquals(obj1[key], obj2[key]);
								} else {
									if(obj1[key] !== obj2[key]) {
										isEqual = false;
									}
								}
							} else {
								isEqual = false;
							}
						} else {
							isEqual = false;
						}
					});
					return isEqual;
				}
			})(window);
