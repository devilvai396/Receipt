
import { sdk } from "https://esm.sh/@farcaster/miniapp-sdk";
import { mountReceipt } from "./Receipt-ui.js";

window.addEventListener("load", async () => {
  const root = document.getElementById("app");
  let isMini = false;
  try { isMini = await sdk.isInMiniApp(); } catch {}
  mountReceipt(root, { isMini });
  try { await sdk.actions.ready(); } catch {}
});
