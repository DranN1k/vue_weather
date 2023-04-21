import VInput from "./VInput.vue";
import VButton from "./VButton.vue";
import VImg from "./VImg.vue";

const components = [
    { name: "VInput", component: VInput },
    { name: "VButton", component: VButton },
    { name: "VImg", component: VImg },
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}