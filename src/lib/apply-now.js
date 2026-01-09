export const APPLY_NOW_OPEN_EVENT = "dv:apply-now:open";

export const openApplyNowForm = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(APPLY_NOW_OPEN_EVENT));
};
