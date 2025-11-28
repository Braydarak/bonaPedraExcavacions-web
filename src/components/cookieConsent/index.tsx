import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

type ConsentPreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const STORAGE_KEY = "cookieConsent";
const TTL_DAYS = 180; // volver a pedir consentimiento tras 180 días
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const [prefs, setPrefs] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: ConsentPreferences = JSON.parse(raw);
        if (
          typeof parsed.analytics === "boolean" &&
          typeof parsed.marketing === "boolean"
        ) {
          // Si ha pasado el TTL, volvemos a pedir consentimiento
          if (!parsed.timestamp || Date.now() - parsed.timestamp > TTL_MS) {
            setShowBanner(true);
            requestAnimationFrame(() => setAnimateIn(true));
          } else {
            setPrefs(parsed);
            setShowBanner(false);
            return;
          }
        }
      }
      setShowBanner(true);
      requestAnimationFrame(() => setAnimateIn(true));
    } catch {
      setShowBanner(true);
      requestAnimationFrame(() => setAnimateIn(true));
    }
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const consent = params.get("consent");
      if (consent === "reset") {
        localStorage.removeItem(STORAGE_KEY);
      }
      if (consent === "open" || consent === "reset") {
        setAnimatingOut(false);
        setShowBanner(true);
        setShowSettings(true);
        requestAnimationFrame(() => setAnimateIn(true));
      }
    } catch {
      // ignore
    }
  }, [location.search]);

  useEffect(() => {
    const onResize = () => {
      try {
        setIsMobile(window.innerWidth < 768);
      } catch (e) {
        void e;
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const openPrefs = () => {
      setAnimatingOut(false);
      setShowBanner(true);
      setShowSettings(true);
      requestAnimationFrame(() => setAnimateIn(true));
    };
    window.addEventListener("openCookiePreferences", openPrefs);
    return () => {
      window.removeEventListener("openCookiePreferences", openPrefs);
    };
  }, []);

  const saveAndClose = (next: ConsentPreferences) => {
    const toSave = { ...next, timestamp: Date.now(), necessary: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    setPrefs(toSave);
    setAnimateIn(false);
    setAnimatingOut(true);
    setTimeout(() => {
      setShowBanner(false);
      setShowSettings(false);
      setAnimatingOut(false);
    }, 500);
  };

  const acceptAll = () =>
    saveAndClose({ ...prefs, analytics: true, marketing: true });
  const rejectAll = () =>
    saveAndClose({ ...prefs, analytics: false, marketing: false });

  if (!showBanner && !animatingOut) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[1000]"
      style={{ position: "fixed" }}
    >
      <div
        className={`w-full bg-transparent text-inherit border-t border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all duration-500 ease-out ${
          animateIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="w-full px-3 md:px-10 py-3 md:py-6 bg-black text-white border-t border-white/10">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            {t("cookieConsent.title")}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed w-full mx-auto md:mx-0 text-center">
            {t("cookieConsent.description")}
          </p>

          {!showSettings && (
            <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="w-full md:flex-1 md:min-w-[200px] px-5 md:px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-sm md:text-base transition hover:from-red-600 hover:to-orange-600 cursor-pointer"
              >
                {t("cookieConsent.acceptAll")}
              </button>
              <button
                onClick={rejectAll}
                className="w-full md:flex-1 md:min-w-[200px] px-5 md:px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 text-sm md:text-base transition cursor-pointer"
              >
                {t("cookieConsent.reject")}
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full md:flex-1 md:min-w-[200px] px-5 md:px-6 py-3 rounded-lg bg-transparent text-white border border-white/30 hover:bg-white/10 text-sm md:text-base transition cursor-pointer"
              >
                {t("cookieConsent.configure")}
              </button>
              {!isMobile && (
                <div className="flex items-center gap-2 md:ml-auto">
                  <a
                    href="/cookies"
                    className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                  >
                    {t("cookieConsent.cookiesPolicy")}
                  </a>
                  <a
                    href="/privacidad"
                    className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                  >
                    {t("cookieConsent.privacyPolicy")}
                  </a>
                  <a
                    href="/aviso-legal"
                    className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                  >
                    {t("cookieConsent.legalNotice")}
                  </a>
                </div>
              )}
            </div>
          )}

          {showSettings && (
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium md:text-lg text-md text-white text-left">
                    {t("cookieConsent.necessaryTitle")}
                  </p>
                  <p className="text-xs md:text-sm text-left text-gray-300">
                    {t("cookieConsent.necessaryDesc")}
                  </p>
                </div>
                <span className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/20">
                  {t("cookieConsent.active")}
                </span>
              </div>
              <div className="w-[90%] mt-4 mb-4 mx-auto border-t border-gray-300"></div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium md:text-lg text-md text-white text-left">
                    {t("cookieConsent.analyticsTitle")}
                  </p>
                  <p className="text-xs md:text-sm text-gray-300">
                    {t("cookieConsent.analyticsDesc")}
                  </p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.analytics}
                    onChange={(e) =>
                      setPrefs({ ...prefs, analytics: e.target.checked })
                    }
                  />
                  <div className="w-10 h-5 bg-white/20 peer-checked:bg-orange-500 rounded-full transition-colors relative before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform before:duration-200 peer-checked:before:translate-x-5"></div>
                </label>
              </div>
              <div className="w-[90%] mt-4 mb-4 mx-auto border-t border-gray-300"></div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium md:text-lg text-md text-white text-left">
                    {t("cookieConsent.marketingTitle")}
                  </p>
                  <p className="text-xs md:text-sm text-gray-300">
                    {t("cookieConsent.marketingDesc")}
                  </p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.marketing}
                    onChange={(e) =>
                      setPrefs({ ...prefs, marketing: e.target.checked })
                    }
                  />
                  <div className="w-10 h-5 bg-white/20 peer-checked:bg-orange-500 rounded-full transition-colors relative before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform before:duration-200 peer-checked:before:translate-x-5"></div>
                </label>
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
                <button
                  onClick={() => saveAndClose(prefs)}
                  className="w-full md:flex-1 md:min-w-[200px] px-5 md:px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-sm md:text-base transition hover:from-red-600 hover:to-orange-600 cursor-pointer"
                >
                  {t("cookieConsent.save")}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full md:flex-1 md:min-w-[200px] px-5 md:px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 text-sm md:text-base transition cursor-pointer"
                >
                  {t("cookieConsent.back")}
                </button>
                {!isMobile && (
                  <div className="flex items-center gap-2 md:ml-auto">
                    <a
                      href="/cookies"
                      className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                    >
                      {t("cookieConsent.cookiesPolicy")}
                    </a>
                    <a
                      href="/privacidad"
                      className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                    >
                      {t("cookieConsent.privacyPolicy")}
                    </a>
                    <a
                      href="/aviso-legal"
                      className="px-4 py-2 rounded-lg bg-transparent text-white underline underline-offset-2 cursor-pointer"
                    >
                      {t("cookieConsent.legalNotice")}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
