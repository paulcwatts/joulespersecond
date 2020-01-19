import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { next } from "@ember/runloop";

export default class ContentColComponent extends Component {
  @service fastboot;

  @action
  setIn(el) {
    if (!this.fastboot.isFastBoot) {
      next(() => el.classList.add("content-col--in"));
    }
  }
}
