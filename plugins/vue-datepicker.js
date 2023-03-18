import Vue from 'vue';
import Datepicker from 'vuejs-datepicker';
import { ja } from 'vuejs-datepicker/dist/locale';

Datepicker.props.language.default = () => ja;
Vue.component('date-picker', Datepicker);
