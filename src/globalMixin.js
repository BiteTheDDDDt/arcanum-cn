import { defineAsyncComponent } from "vue";
import Events from "@/events";
import { ItemOver } from "ui/popups/itemPopup.vue";

export default {
	components: {
		Confirm: defineAsyncComponent(() => import("./ui/components/confirm.vue")), // Lazy-load Confirm component
	},
	methods: {
		listen: Events.listen,
		dispatch: Events.dispatch,
		removeListener: Events.removeListener,
		itemOver: ItemOver,
		emit: Events.emit,
		add: Events.add,
		elmId(name) {
			return name + this.$.uid;
		},
	},
};
