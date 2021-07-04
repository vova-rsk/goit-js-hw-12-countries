import { alert, Stack } from "@pnotify/core";

const stackBottomModal = new Stack({
  dir1: "right", 
  firstpos1: 25,
  push: "bottom", 
  overlayClose: true,
  context: document.querySelector(".search-data")
});

export default function notice(message) {
  alert({
    text:`${message}`,
    width: "320px",
    type: "error",
    stack: stackBottomModal,
    hide: true,
    delay: 2000,
    closer: false,
    sticker: false
  });
}
