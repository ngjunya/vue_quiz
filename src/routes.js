import selection from './components/Selection.vue';
import main from './components/Main.vue';


export default[
    {path:'/:type',component:main},
    {path:'/',component:selection}
]