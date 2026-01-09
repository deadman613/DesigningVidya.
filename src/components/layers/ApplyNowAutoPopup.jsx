"use client";

import { useEffect, useRef, useState } from "react";
import ApplyNowForm from "./ApplyNowForm";
import { APPLY_NOW_OPEN_EVENT } from "@/lib/apply-now";

const DEFAULT_INITIAL_DELAY_MS = 10_000;
const DEFAULT_DELAY_STEP_MS = 5_000;
const STORAGE_NEXT_ALLOWED_AT_KEY = "dv_apply_now_popup_next_allowed_at";
const STORAGE_DELAY_MS_KEY = "dv_apply_now_popup_delay_ms";

const safeNow = () => Date.now();

const getNextAllowedAt = () => {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(STORAGE_NEXT_ALLOWED_AT_KEY);
    const value = raw ? Number(raw) : 0;
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
};

const setNextAllowedAt = (timestampMs) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_NEXT_ALLOWED_AT_KEY, String(timestampMs));
  } catch {
    // ignore
  }
};

const getDelayMs = (fallbackMs) => {
  if (typeof window === "undefined") return fallbackMs;
  try {
    const raw = window.localStorage.getItem(STORAGE_DELAY_MS_KEY);
    const value = raw ? Number(raw) : fallbackMs;
    return Number.isFinite(value) ? value : fallbackMs;
  } catch {
    return fallbackMs;
  }
};

const setDelayMs = (valueMs) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_DELAY_MS_KEY, String(valueMs));
  } catch {
    // ignore
  }
};

export default function ApplyNowAutoPopup({
  initialDelayMs = DEFAULT_INITIAL_DELAY_MS,
  delayStepMs = DEFAULT_DELAY_STEP_MS,
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const scheduleAutoOpen = () => {
    clearTimer();
    const now = safeNow();
    const storedDelayMs = getDelayMs(initialDelayMs);
    const nextAllowedAt = getNextAllowedAt();
    const waitMs = nextAllowedAt > now ? nextAllowedAt - now : storedDelayMs;

    timerRef.current = setTimeout(() => {
      setShow(true);
    }, Math.max(0, waitMs));
  };

  useEffect(() => {
    if (show) return;
    scheduleAutoOpen();
    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, initialDelayMs]);

  useEffect(() => {
    const onOpen = () => {
      clearTimer();
      setShow(true);
    };
    window.addEventListener(APPLY_NOW_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(APPLY_NOW_OPEN_EVENT, onOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setShow(false);

    const now = safeNow();
    const currentDelayMs = getDelayMs(initialDelayMs);
    setNextAllowedAt(now + currentDelayMs);
    setDelayMs(currentDelayMs + delayStepMs);
  };

  return <ApplyNowForm show={show} onClose={handleClose} />;
}
