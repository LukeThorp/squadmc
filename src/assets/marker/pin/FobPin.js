import { Circle } from "leaflet";

import PinHolder from "./PinHolder";
import { FOB_DISTANCE, FOB_RANGE , RANGE_100, RANGE_200, RANGE_300, RANGE_400, RANGE_500, RANGE_600} from "../../Vars";


export default class FobPin extends PinHolder {
  _createAttachments() {
    super._createAttachments();
    const buildAreaCircle = new Circle(this.pos, {
      draggable: "false",
      radius: 1, // build range
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range100 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_100, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range200 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_200, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range300 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_300, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range400 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_400, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range500 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_500, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    const range600 = new Circle(this.pos, {
      draggable: "false",
      radius: RANGE_600, // min distance to next fob
      color: this.color,
      fillOpacity: 0,
      dashArray: "0, 0",
      interactive: false,
      clickable: false, // legacy support
    });

    this._attachments = [buildAreaCircle, range100, range200, range300, range400, range500, range600];
  }
}
