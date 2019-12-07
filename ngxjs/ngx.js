/**
 * A flux frame state management for Angularjs(v1)
 * It's a SIMPLE implementation of the flux architecture
 * Actually reference Vuex.
 * @Config: import Config from './store.config.js'
 */
app.service('$store', function () {
    var _this = this;

    this.config = Config;
    this.getters = {};

    this._state = this.config.state;
    this._getters = this.config.getters;
    this._mutations = this.config.mutations;

    this.commit = function (handler, data) {
        this._mutations[handler](this._state, data);
        setGetters();
    }

    // init getters
    setGetters();

    function setGetters() {
        mapObjValue(_this._getters, function (getterFn, getterName) {
            _this.getters[getterName] = getterFn(_this._state);
        });
    }

    // map object keys
    function mapObjValue(obj, fn) {
        Object.keys(obj).forEach(function (key) {
            fn(obj[key], key)
        });
    }
});