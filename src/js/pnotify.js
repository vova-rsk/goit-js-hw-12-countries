import { alert, Stack } from "@pnotify/core";

const stackBottomModal = new Stack({
  dir1: "right", 
  firstpos1: 300,
  push: "bottom", 
  overlayClose: true,
  context: document.querySelector(".search-data")
});

export function notice() {
    alert({
        text: "Too many matches found. Please enter a more specific query!",
        width: "320px",
        type: "error",
        stack: stackBottomModal,
        hide: true,
        delay: 2000,
        closer: false,
        sticker: false
    });
}
